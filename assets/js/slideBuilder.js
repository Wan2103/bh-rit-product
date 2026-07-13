/**
 * slideBuilder.js
 * 
 * Handles dynamic slide/carousel rendering.
 * Loads slide data and builds reusable slider components.
 */

class SlideBuilder {

    constructor(selector, options = {}) {

        this.container = document.querySelector(selector);

        this.options = {
            autoplay: true,
            interval: 5000,
            loop: true,
            showIndicators: true,
            showControls: true,
            ...options
        };

        this.slides = [];
        this.currentIndex = 0;
        this.timer = null;

    }


    /**
     * Initialize slider
     */
    async init(data = []) {

        if (!this.container) {
            console.warn("Slide container not found");
            return;
        }


        this.slides = data;


        if (!this.slides.length) {
            this.renderEmpty();
            return;
        }


        this.render();

        this.attachEvents();


        if (this.options.autoplay) {
            this.startAutoplay();
        }

    }



    /**
     * Render slider HTML
     */
    render() {

        this.container.innerHTML = `

            <div class="slider">

                <div class="slider__track">

                    ${this.slides.map((slide, index) => `

                        <div class="slider__item ${index === 0 ? "active" : ""}" data-index="${index}">

                            ${slide.image ? `

                                <img 
                                    src="${slide.image}" 
                                    alt="${slide.title || "Slide"}"
                                    class="slider__image"
                                >

                            ` : ""}


                            <div class="slider__content">

                                ${
                                    slide.title
                                    ?
                                    `<h3 class="slider__title">
                                        ${slide.title}
                                    </h3>`
                                    :
                                    ""
                                }


                                ${
                                    slide.description
                                    ?
                                    `<p class="slider__description">
                                        ${slide.description}
                                    </p>`
                                    :
                                    ""
                                }


                                ${
                                    slide.link
                                    ?
                                    `
                                    <a 
                                        href="${slide.link}"
                                        class="btn btn--primary"
                                    >
                                        Learn More
                                    </a>
                                    `
                                    :
                                    ""
                                }


                            </div>


                        </div>


                    `).join("")}

                </div>


                ${
                    this.options.showControls
                    ?
                    `

                    <button 
                        class="slider__control slider__control--prev"
                        aria-label="Previous slide"
                    >
                        ‹
                    </button>


                    <button 
                        class="slider__control slider__control--next"
                        aria-label="Next slide"
                    >
                        ›
                    </button>

                    `
                    :
                    ""

                }


                ${
                    this.options.showIndicators
                    ?
                    `

                    <div class="slider__indicators">

                        ${
                            this.slides.map((_, index) => `

                                <button 
                                    class="slider__indicator ${index === 0 ? "active" : ""}"
                                    data-index="${index}"
                                    aria-label="Go to slide ${index + 1}"
                                ></button>

                            `).join("")
                        }

                    </div>

                    `
                    :
                    ""
                }


            </div>

        `;


    }



    /**
     * Attach slider controls
     */
    attachEvents() {


        const next = this.container.querySelector(".slider__control--next");

        const prev = this.container.querySelector(".slider__control--prev");


        if (next) {

            next.addEventListener(
                "click",
                () => this.next()
            );

        }


        if (prev) {

            prev.addEventListener(
                "click",
                () => this.previous()
            );

        }



        const indicators = this.container.querySelectorAll(
            ".slider__indicator"
        );


        indicators.forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index = Number(button.dataset.index);

                    this.goTo(index);

                }
            );

        });



        this.container.addEventListener(
            "mouseenter",
            () => this.stopAutoplay()
        );


        this.container.addEventListener(
            "mouseleave",
            () => {

                if (this.options.autoplay) {
                    this.startAutoplay();
                }

            }
        );


    }




    /**
     * Change slide
     */
    goTo(index) {


        if (index < 0 || index >= this.slides.length) {
            return;
        }


        const items = this.container.querySelectorAll(
            ".slider__item"
        );


        const indicators = this.container.querySelectorAll(
            ".slider__indicator"
        );


        items.forEach(item => {

            item.classList.remove("active");

        });


        indicators.forEach(indicator => {

            indicator.classList.remove("active");

        });



        items[index]?.classList.add("active");

        indicators[index]?.classList.add("active");



        this.currentIndex = index;


    }



    /**
     * Next slide
     */
    next() {

        let nextIndex = this.currentIndex + 1;


        if (nextIndex >= this.slides.length) {

            nextIndex = this.options.loop 
                ? 0 
                : this.currentIndex;

        }


        this.goTo(nextIndex);

    }




    /**
     * Previous slide
     */
    previous() {


        let previousIndex = this.currentIndex - 1;


        if (previousIndex < 0) {

            previousIndex = this.options.loop
                ? this.slides.length - 1
                : 0;

        }


        this.goTo(previousIndex);


    }




    /**
     * Autoplay
     */
    startAutoplay() {


        this.stopAutoplay();


        this.timer = setInterval(
            () => this.next(),
            this.options.interval
        );


    }



    stopAutoplay() {


        if (this.timer) {

            clearInterval(this.timer);

            this.timer = null;

        }

    }




    /**
     * Empty state
     */
    renderEmpty() {

        this.container.innerHTML = `

            <div class="slider__empty">

                No slides available.

            </div>

        `;

    }


}



/**
 * Global helper
 */
window.createSlider = function(selector, slides, options = {}) {

    const slider = new SlideBuilder(
        selector,
        options
    );


    slider.init(slides);


    return slider;

};
