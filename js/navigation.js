document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();

});



function initializeNavigation() {

    initializeMobileMenu();

    initializeDropdowns();

    highlightActivePage();

    closeMenuOnLinkClick();

}



/*
====================================
Mobile Navigation
====================================
*/

function initializeMobileMenu() {

    const toggle =
        document.querySelector(
            ".navbar__toggle"
        );


    const menu =
        document.querySelector(
            ".navbar__menu"
        );


    if (!toggle || !menu) return;


    toggle.addEventListener(
        "click",
        () => {

            toggle.classList.toggle(
                "active"
            );


            menu.classList.toggle(
                "active"
            );


            document.body.classList.toggle(
                "menu-open"
            );

        }
    );

}



/*
====================================
Dropdown Navigation
====================================
*/

function initializeDropdowns() {

    const dropdownItems =
        document.querySelectorAll(
            ".navbar__item--dropdown"
        );


    dropdownItems.forEach((item) => {

        const link =
            item.querySelector(
                ".navbar__link"
            );


        if (!link) return;


        link.addEventListener(
            "click",
            (event) => {

                if (
                    window.innerWidth <= 992
                ) {

                    event.preventDefault();


                    item.classList.toggle(
                        "active"
                    );

                }

            }
        );

    });

}



/*
====================================
Active Page Highlight
====================================
*/

function highlightActivePage() {

    const currentPath =
        window.location.pathname;


    const links =
        document.querySelectorAll(
            ".navbar__link"
        );


    links.forEach((link) => {

        const linkPath =
            new URL(
                link.href
            ).pathname;


        if (
            currentPath === linkPath
        ) {

            link.classList.add(
                "active"
            );

        }

    });

}



/*
====================================
Close Menu After Click
====================================
*/

function closeMenuOnLinkClick() {

    const links =
        document.querySelectorAll(
            ".navbar__link"
        );


    const menu =
        document.querySelector(
            ".navbar__menu"
        );


    const toggle =
        document.querySelector(
            ".navbar__toggle"
        );


    links.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                if (
                    window.innerWidth <= 992
                ) {

                    menu?.classList.remove(
                        "active"
                    );


                    toggle?.classList.remove(
                        "active"
                    );


                    document.body.classList.remove(
                        "menu-open"
                    );

                }

            }
        );

    });

}



/*
====================================
Sticky Navigation Effect
====================================
*/

window.addEventListener(
    "scroll",
    () => {

        const navbar =
            document.querySelector(
                ".navbar"
            );


        if (!navbar) return;


        if (
            window.scrollY > 50
        ) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);



/*
====================================
Smooth Scroll
====================================
*/

function enableSmoothScroll() {

    const anchors =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchors.forEach((anchor) => {

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

                        behavior: "smooth"

                    });

                }

            }
        );

    });

}


document.addEventListener(
    "DOMContentLoaded",
    enableSmoothScroll
);
