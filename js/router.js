document.addEventListener("DOMContentLoaded", () => {

    initializeRouter();

});



function initializeRouter() {

    const routes = {

        "/": "pages/home.html",

        "/home": "pages/home.html",

        "/about": "pages/about.html",

        "/industries": "pages/industries.html",

        "/portfolio": "pages/portfolio.html",

        "/support": "pages/support.html",

        "/contact": "pages/contact.html"

    };


    handleRoute(routes);


    window.addEventListener(
        "popstate",
        () => {

            handleRoute(
                routes
            );

        }
    );


    initializeRouterLinks(
        routes
    );

}



/*
====================================
Handle Route
====================================
*/

async function handleRoute(
    routes
) {

    const path =
        window.location.pathname;


    const page =
        routes[path] ||
        "404.html";


    const container =
        document.querySelector(
            "[data-router]"
        );


    if (!container) return;


    try {

        const response =
            await fetch(
                page
            );


        if (!response.ok) {

            throw new Error(
                "Page not found"
            );

        }


        container.innerHTML =
            await response.text();


        window.scrollTo(
            0,
            0
        );


        initializePageScripts();


    } catch (error) {

        console.error(
            "Router Error:",
            error
        );


        container.innerHTML =
            `

            <section class="section">

                <div class="container text-center">

                    <h1>
                        Page Not Found
                    </h1>

                    <p>
                        The requested page could not be loaded.
                    </p>

                </div>

            </section>

            `;

    }

}



/*
====================================
Router Links
====================================
*/

function initializeRouterLinks(
    routes
) {

    const links =
        document.querySelectorAll(
            "[data-route]"
        );


    links.forEach(
        (link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const path =
                        link.dataset.route;


                    if (
                        routes[path]
                    ) {

                        event.preventDefault();


                        navigate(
                            path
                        );

                    }

                }
            );

        }
    );

}



/*
====================================
Navigate
====================================
*/

function navigate(
    path
) {

    window.history.pushState(
        {},
        "",
        path
    );


    initializeRouter();

}



/*
====================================
Page Initialization
====================================
*/

function initializePageScripts() {

    if (
        typeof initializeGallery ===
        "function"
    ) {

        initializeGallery();

    }


    if (
        typeof initializeModals ===
        "function"
    ) {

        initializeModals();

    }


    if (
        typeof initializeAnimations ===
        "function"
    ) {

        initializeAnimations();

    }


    if (
        typeof initializeNavigation ===
        "function"
    ) {

        initializeNavigation();

    }

}



/*
====================================
404 Redirect
====================================
*/

function redirectTo404() {

    window.history.pushState(
        {},
        "",
        "/404.html"
    );


    location.reload();

}
