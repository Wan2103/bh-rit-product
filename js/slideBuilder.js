document.addEventListener("DOMContentLoaded", () => {

    initializeSlides();

});



async function initializeSlides() {

    const sliders =
        document.querySelectorAll(
            "[data-slides]"
        );


    if (!sliders.length) return;


    sliders.forEach(
        async (slider) => {

            const source =
                slider.dataset.slides;


            try {

                const slides =
                    await loadSlides(
                        source
                    );


                buildSlider(
                    slider,
                    slides
                );


            } catch (error) {

                console.error(
                    "Failed loading slides:",
                    error
                );

            }

        }
    );

}



/*
====================================
Load Slides Data
====================================
*/

async function loadSlides(
    source
) {

    const response =
        await fetch(
            source
        );


    if (!response.ok) {

        throw new Error(
            "Unable to load slides"
        );

    }


    return await response.json();

}



/*
====================================
Build Slider
====================================
*/

function buildSlider(
    container,
    slides
) {

    container.innerHTML = `

        <div class="slides__container"></div>


        <div class="slide__controls">

            <button class="slide__button slide-prev">

                &#10094;

            </button>


            <button class="slide__button slide-next">

                &#10095;

            </button>

        </div>


        <div class="slide__indicators"></div>

    `;


    const track =
        container.querySelector(
            ".slides__container"
        );


    const indicators =
        container.querySelector(
            ".slide__indicators"
        );


    slides.forEach(
        (slide, index) => {

            const item =
                createSlide(
                    slide,
                    index
                );


            track.appendChild(
                item
            );


            const indicator =
                document.createElement(
                    "button"
                );


            indicator.className =
                "slide__indicator";


            if (index === 0) {

                indicator.classList.add(
                    "active"
                );

            }


            indicator.dataset.index =
                index;


            indicators.appendChild(
                indicator
            );

        }
    );


    initializeSliderControls(
        container
    );

}



/*
====================================
Create Slide
====================================
*/

function createSlide(
    slide,
    index
) {

    const element =
        document.createElement(
            "div"
        );


    element.className =
        "slide";


    if (index === 0) {

        element.classList.add(
            "active"
        );

    }


    element.innerHTML = `

        <img 
            src="${slide.image}"
            alt="${slide.title || "Slide"}"
        >


        <div class="slide__content">

            ${
                slide.title
                ?
                `<h2 class="slide__title">
                    ${slide.title}
                </h2>`
                :
                ""
            }


            ${
                slide.description
                ?
                `<p class="slide__description">
                    ${slide.description}
                </p>`
                :
                ""
            }


            ${
                slide.button
                ?
                `<a 
                    href="${slide.button.url}"
                    class="btn btn--primary"
                >
                    ${slide.button.text}
                </a>`
                :
                ""
            }

        </div>

    `;


    return element;

}



/*
====================================
Slider Controls
====================================
*/

function initializeSliderControls(
    slider
) {

    const track =
        slider.querySelector(
            ".slides__container"
        );


    const slides =
        slider.querySelectorAll(
            ".slide"
        );


    const indicators =
        slider.querySelectorAll(
            ".slide__indicator"
        );


    const next =
        slider.querySelector(
            ".slide-next"
        );


    const prev =
        slider.querySelector(
            ".slide-prev"
        );


    let current = 0;


    function showSlide(
        index
    ) {

        if (
            index >= slides.length
        ) {

            current = 0;

        } else if (
            index < 0
        ) {

            current =
                slides.length - 1;

        } else {

            current = index;

        }


        track.style.transform =
            `translateX(-${current * 100}%)`;


        slides.forEach(
            (slide, i) => {

                slide.classList.toggle(
                    "active",
                    i === current
                );

            }
        );


        indicators.forEach(
            (indicator, i) => {

                indicator.classList.toggle(
                    "active",
                    i === current
                );

            }
        );

    }



    next?.addEventListener(
        "click",
        () => {

            showSlide(
                current + 1
            );

        }
    );



    prev?.addEventListener(
        "click",
        () => {

            showSlide(
                current - 1
            );

        }
    );



    indicators.forEach(
        (indicator) => {

            indicator.addEventListener(
                "click",
                () => {

                    showSlide(
                        Number(
                            indicator.dataset.index
                        )
                    );

                }
            );

        }
    );



    startAutoSlide(
        showSlide
    );

}



/*
====================================
Auto Slide
====================================
*/

function startAutoSlide(
    callback
) {

    setInterval(
        () => {

            callback(
                "next"
            );

        },
        6000
    );

}
