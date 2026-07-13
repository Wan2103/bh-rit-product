document.addEventListener("DOMContentLoaded", () => {

    const animatedElements = document.querySelectorAll(
        ".reveal, .animate"
    );


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach((element) => {

        observer.observe(element);

    });


});



/* Scroll Animation */

function revealOnScroll() {

    const reveals = document.querySelectorAll(".reveal");


    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;


        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();




/* Counter Animation */

function animateCounter(element) {

    const target = Number(
        element.dataset.target
    );


    let current = 0;


    const increment = Math.ceil(
        target / 100
    );


    const updateCounter = () => {

        current += increment;


        if (current >= target) {

            element.textContent = target;

            return;

        }


        element.textContent = current;


        requestAnimationFrame(
            updateCounter
        );

    };


    updateCounter();

}



const counters = document.querySelectorAll(
    "[data-target]"
);


const counterObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                animateCounter(
                    entry.target
                );

                counterObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.5
    }
);



counters.forEach((counter) => {

    counterObserver.observe(counter);

});
