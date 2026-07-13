/*
=========================================
Navigation Controller
Beyond Horizon Technologies
=========================================
*/


document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeNavigation();

    }
);



/*
=========================================
Initialize Navigation
=========================================
*/


function initializeNavigation() {


    const navbar =
        document.querySelector(
            "[data-component='navbar']"
        );



    if (!navbar) {

        return;

    }



    setupMobileMenu();

    setupDropdowns();

    setupActiveLinks();

    setupNavbarScroll();


}



/*
=========================================
Mobile Menu
=========================================
*/


function setupMobileMenu() {


    const menuButton =
        document.querySelector(
            ".nav__toggle"
        );


    const navMenu =
        document.querySelector(
            ".nav__menu"
        );



    if (
        !menuButton ||
        !navMenu
    ) {

        return;

    }



    menuButton.addEventListener(
        "click",
        () => {


            menuButton.classList.toggle(
                "active"
            );


            navMenu.classList.toggle(
                "active"
            );


            document.body.classList.toggle(
                "no-scroll"
            );


        }
    );



    const links =
        navMenu.querySelectorAll(
            "a"
        );



    links.forEach(
        (link) => {


            link.addEventListener(
                "click",
                () => {


                    menuButton.classList.remove(
                        "active"
                    );


                    navMenu.classList.remove(
                        "active"
                    );


                    document.body.classList.remove(
                        "no-scroll"
                    );


                }
            );


        }
    );


}



/*
=========================================
Dropdown Menu
=========================================
*/


function setupDropdowns() {


    const dropdowns =
        document.querySelectorAll(
            ".nav__dropdown"
        );



    dropdowns.forEach(
        (dropdown) => {


            const button =
                dropdown.querySelector(
                   (".nav__dropdown-toggle")
                );



            if (!button) {

                return;

            }



            button.addEventListener(
                "click",
                (event) => {


                    event.preventDefault();



                    dropdown.classList.toggle(
                        "active"
                    );


                }
            );


        }
    );


}



/*
=========================================
Active Link Highlight
=========================================
*/


function setupActiveLinks() {


    const currentPage =
        window.location.pathname;



    const links =
        document.querySelectorAll(
            ".nav a"
        );



    links.forEach(
        (link) => {


            const linkPath =
                new URL(
                    link.href
                ).pathname;



            if (
                linkPath === currentPage
            ) {


                link.classList.add(
                    "active"
                );


            }


        }
    );


}



/*
=========================================
Navbar Scroll Effect
=========================================
*/


function setupNavbarScroll() {


    const navbar =
        document.querySelector(
            ".navbar"
        );



    if (!navbar) {

        return;

    }



    window.addEventListener(
        "scroll",
        () => {


            if (
                window.scrollY > 50
            ) {


                navbar.classList.add(
                    "scrolled"
                );


            }

            else {


                navbar.classList.remove(
                    "scrolled"
                );


            }


        }
    );


}



/*
=========================================
Load Navigation From JSON
=========================================
*/


async function loadNavigation() {


    try {


        const response =
            await fetch(
                "data/navigation.json"
            );



        const navigation =
            await response.json();



        return navigation;



    }

    catch(error) {


        console.error(
            "Navigation loading failed:",
            error
        );


        return [];


    }


}



/*
=========================================
Generate Navigation
=========================================
*/


function generateNavigation(
    items = []
) {


    const container =
        document.querySelector(
            ".nav__menu"
        );



    if (!container) {

        return;

    }



    container.innerHTML = "";



    items.forEach(
        (item) => {


            const li =
                document.createElement(
                    "li"
                );



            li.className =
                "nav__item";



            li.innerHTML = `

                <a href="${item.link}">
                    ${item.title}
                </a>

            `;



            container.appendChild(
                li
            );


        }
    );


}



/*
=========================================
Export
=========================================
*/


window.Navigation = {


    initialize:
        initializeNavigation,


    load:
        loadNavigation,


    generate:
        generateNavigation

};
