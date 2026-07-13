/*
=========================================
Animation Controller
Beyond Horizon Technologies
=========================================
*/


document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeAnimations();

    }
);



/*
=========================================
Initialize Animations
=========================================
*/


function initializeAnimations() {


    const animatedElements =
        document.querySelectorAll(
            "[data-animation]"
        );


    if (!animatedElements.length) {

        return;

    }



    const observer =
        new IntersectionObserver(
            (entries) => {


                entries.forEach(
                    (entry) => {


                        if (
                            entry.isIntersecting
                        ) {


                            const element =
                                entry.target;


                            const animation =
                                element.dataset.animation;



                            element.classList.add(
                                "animate",
                                animation
                            );



                            observer.unobserve(
                                element
                            );


                        }


                    }
                );


            },
            {
                threshold: 0.15
            }
        );



    animatedElements.forEach(
        (element) => {

            observer.observe(
                element
            );

        }
    );


}



/*
=========================================
Reveal On Scroll
=========================================
*/


function revealOnScroll(
    selector,
    animation = "fade-up"
) {


    const elements =
        document.querySelectorAll(
            selector
        );



    elements.forEach(
        (element) => {


            element.dataset.animation =
                animation;


        }
    );



    initializeAnimations();


}



/*
=========================================
Stagger Animation
=========================================
*/


function staggerAnimation(
    selector,
    delay = 100
) {


    const elements =
        document.querySelectorAll(
            selector
        );



    elements.forEach(
        (
            element,
            index
        ) => {


            element.style.transitionDelay =
                `${index * delay}ms`;



            element.dataset.animation =
                "fade-up";


        }
    );



    initializeAnimations();


}



/*
=========================================
Counter Animation
=========================================
*/


function animateCounter(
    element,
    target,
    duration = 2000
) {


    let start = 0;


    const increment =
        target /
        (duration / 16);



    const counter =
        setInterval(
            () => {


                start += increment;



                if (
                    start >= target
                ) {


                    element.textContent =
                        target;


                    clearInterval(
                        counter
                    );


                }

                else {


                    element.textContent =
                        Math.floor(start);


                }


            },
            16
        );


}



/*
=========================================
Initialize Counters
=========================================
*/


function initializeCounters() {


    const counters =
        document.querySelectorAll(
            "[data-counter]"
        );



    if (!counters.length) {

        return;

    }



    const observer =
        new IntersectionObserver(
            (entries) => {


                entries.forEach(
                    (entry) => {


                        if (
                            entry.isIntersecting
                        ) {


                            const element =
                                entry.target;



                            const target =
                                Number(
                                    element.dataset.counter
                                );



                            animateCounter(
                                element,
                                target
                            );



                            observer.unobserve(
                                element
                            );


                        }


                    }
                );


            },
            {
                threshold: 0.5
            }
        );



    counters.forEach(
        (counter) => {

            observer.observe(
                counter
            );

        }
    );


}



document.addEventListener(
    "DOMContentLoaded",
    initializeCounters
);
