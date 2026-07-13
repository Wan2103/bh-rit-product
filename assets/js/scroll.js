/*
=========================================
Scroll Controller
Beyond Horizon Technologies
=========================================
*/


document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeScrollEffects();

    }
);



/*
=========================================
Initialize Scroll Effects
=========================================
*/


function initializeScrollEffects() {


    setupScrollReveal();

    setupBackToTop();

    setupSmoothScroll();

    setupParallax();


}



/*
=========================================
Scroll Reveal Animation
=========================================
*/


function setupScrollReveal() {


    const elements =
        document.querySelectorAll(
            "[data-reveal]"
        );



    if (!elements.length) {

        return;

    }



    const observer =
        new IntersectionObserver(
            (
                entries
            ) => {


                entries.forEach(
                    (entry) => {


                        if (
                            entry.isIntersecting
                        ) {


                            entry.target.classList.add(
                                "revealed"
                            );


                            observer.unobserve(
                                entry.target
                            );


                        }


                    }
                );


            },
            {
                threshold: 0.15
            }
        );



    elements.forEach(
        (element) => {


            observer.observe(
                element
            );


        }
    );


}



/*
=========================================
Back To Top Button
=========================================
*/


function setupBackToTop() {


    const button =
        document.querySelector(
            "[data-back-to-top]"
        );



    if (!button) {

        return;

    }



    window.addEventListener(
        "scroll",
        () => {


            if (
                window.scrollY > 500
            ) {


                button.classList.add(
                    "visible"
                );


            }

            else {


                button.classList.remove(
                    "visible"
                );


            }


        }
    );



    button.addEventListener(
        "click",
        () => {


            window.scrollTo({

                top: 0,

                behavior:
                    "smooth"

            });


        }
    );


}



/*
=========================================
Smooth Scroll Links
=========================================
*/


function setupSmoothScroll() {


    const links =
        document.querySelectorAll(
            "a[href^='#']"
        );



    links.forEach(
        (link) => {


            link.addEventListener(
                "click",
                (event) => {


                    const targetId =
                        link.getAttribute(
                            "href"
                        );



                    const target =
                        document.querySelector(
                            targetId
                        );



                    if (
                        target
                    ) {


                        event.preventDefault();



                        target.scrollIntoView(
                            {

                                behavior:
                                    "smooth",

                                block:
                                    "start"

                            }
                        );


                    }


                }
            );


        }
    );


}



/*
=========================================
Parallax Effect
=========================================
*/


function setupParallax() {


    const elements =
        document.querySelectorAll(
            "[data-parallax]"
        );



    if (!elements.length) {

        return;

    }



    window.addEventListener(
        "scroll",
        () => {


            const scrollY =
                window.scrollY;



            elements.forEach(
                (
                    element
                ) => {


                    const speed =
                        element.dataset.parallax
                        ||
                        0.2;



                    element.style.transform =
                        `
                        translateY(
                            ${scrollY * speed}px
                        )
                        `;


                }
            );


        }
    );


}



/*
=========================================
Scroll Progress Bar
=========================================
*/


function createScrollProgress() {


    const progress =
        document.createElement(
            "div"
        );



    progress.className =
        "scroll-progress";



    document.body.appendChild(
        progress
    );



    window.addEventListener(
        "scroll",
        () => {


            const height =
                document.documentElement
                    .scrollHeight -
                window.innerHeight;



            const percentage =
                (
                    window.scrollY /
                    height
                ) * 100;



            progress.style.width =
                `${percentage}%`;


        }
    );


}



/*
=========================================
Export
=========================================
*/


window.ScrollController = {


    initialize:
        initializeScrollEffects,


    reveal:
        setupScrollReveal,


    top:
        () => {


            window.scrollTo({

                top:0,

                behavior:"smooth"

            });


        }

};
