document.addEventListener("DOMContentLoaded", () => {

    initializeScroll();

});



function initializeScroll() {

    initializeScrollReveal();

    initializeBackToTop();

    initializeScrollProgress();

}



/*
====================================
Scroll Reveal
====================================
*/

function initializeScrollReveal() {

    const elements =
        document.querySelectorAll(
            ".scroll-reveal"
        );


    if (!elements.length) return;


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
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
====================================
Back To Top Button
====================================
*/

function initializeBackToTop() {

    const button =
        document.querySelector(
            ".back-to-top"
        );


    if (!button) return;


    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 500
            ) {

                button.classList.add(
                    "active"
                );

            } else {

                button.classList.remove(
                    "active"
                );

            }

        }
    );


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}



/*
====================================
Scroll Progress
====================================
*/

function initializeScrollProgress() {

    const progress =
        document.querySelector(
            ".scroll-progress"
        );


    if (!progress) return;


    window.addEventListener(
        "scroll",
        () => {

            const scrollTop =
                document.documentElement.scrollTop;


            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;


            const percentage =
                (scrollTop / height) * 100;


            progress.style.width =
                `${percentage}%`;

        }
    );

}



/*
====================================
Smooth Anchor Scroll
====================================
*/

function enableAnchorScroll() {

    const anchors =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchors.forEach(
        (anchor) => {

            anchor.addEventListener(
                "click",
                (event) => {

                    const target =
                        document.querySelector(
                            anchor.getAttribute(
                                "href"
                            )
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({

                            behavior: "smooth",

                            block: "start"

                        });

                    }

                }
            );

        }
    );

}


document.addEventListener(
    "DOMContentLoaded",
    enableAnchorScroll
);



/*
====================================
Parallax Effect
====================================
*/

function initializeParallax() {

    const elements =
        document.querySelectorAll(
            "[data-parallax]"
        );


    window.addEventListener(
        "scroll",
        () => {

            const scrollY =
                window.scrollY;


            elements.forEach(
                (element) => {

                    const speed =
                        element.dataset.parallax || 0.2;


                    element.style.transform =
                        `translateY(${scrollY * speed}px)`;

                }
            );

        }
    );

}


document.addEventListener(
    "DOMContentLoaded",
    initializeParallax
);
