/*
=========================================
SPA Router Controller
Beyond Horizon Technologies
=========================================
*/


document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeRouter();

    }
);



/*
=========================================
Router Configuration
=========================================
*/


const routes = {


    "/":
        "pages/home.html",


    "/home":
        "pages/home.html",


    "/about":
        "pages/about.html",


    "/industries":
        "pages/industries.html",


    "/products":
        "pages/products.html",


    "/portfolio":
        "pages/portfolio.html",


    "/support":
        "pages/support.html",


    "/contact":
        "pages/contact.html"


};



/*
=========================================
Initialize Router
=========================================
*/


function initializeRouter() {


    const app =
        document.querySelector(
            "[data-router]"
        );



    if (!app) {

        return;

    }



    handleRoute();



    window.addEventListener(
        "popstate",
        handleRoute
    );



    setupRouterLinks();


}



/*
=========================================
Handle Route
=========================================
*/


async function handleRoute() {


    const path =
        window.location.pathname
            .replace(
                "/bh-rit-product-presentation",
                ""
            )
            .replace(
                /\/$/,
                ""
            )
        ||
        "/";



    const page =
        routes[path];



    if (!page) {


        loadPage(
            "404.html"
        );


        return;

    }



    loadPage(
        page
    );


}



/*
=========================================
Load Page
=========================================
*/


async function loadPage(
    page
) {


    const app =
        document.querySelector(
            "[data-router]"
        );



    if (!app) {

        return;

    }



    try {


        const response =
            await fetch(
                page
            );



        if (!response.ok) {


            throw new Error(
                `Page not found: ${page}`
            );


        }



        const html =
            await response.text();



        app.innerHTML =
            html;



        window.scrollTo(
            {
                top: 0,
                behavior: "instant"
            }
        );



        refreshPageScripts();



    }

    catch(error) {


        console.error(
            "Router error:",
            error
        );


        app.innerHTML = `

            <section class="error-page">

                <h1>
                    Page Not Found
                </h1>


                <p>
                    The requested page could not be loaded.
                </p>

            </section>

        `;


    }


}



/*
=========================================
Router Links
=========================================
*/


function setupRouterLinks() {


    document.addEventListener(
        "click",
        (event) => {


            const link =
                event.target.closest(
                    "a"
                );



            if (
                !link ||
                link.target === "_blank"
            ) {

                return;

            }



            const url =
                new URL(
                    link.href
                );



            if (
                url.origin !==
                window.location.origin
            ) {

                return;

            }



            const path =
                url.pathname;



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



/*
=========================================
Navigate
=========================================
*/


function navigate(
    path
) {


    history.pushState(
        null,
        "",
        path
    );



    handleRoute();


}



/*
=========================================
Refresh Dynamic Features
=========================================
*/


function refreshPageScripts() {


    if (
        typeof initializeAnimations ===
        "function"
    ) {


        initializeAnimations();


    }



    if (
        typeof initializeGallery ===
        "function"
    ) {


        initializeGallery();


    }



    if (
        typeof initializeProductBuilder ===
        "function"
    ) {


        initializeProductBuilder();


    }



    if (
        typeof initializeScrollEffects ===
        "function"
    ) {


        initializeScrollEffects();


    }


}



/*
=========================================
Export
=========================================
*/


window.Router = {


    navigate,


    routes,


    load:
        loadPage

};
