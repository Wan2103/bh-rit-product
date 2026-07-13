document.addEventListener("DOMContentLoaded", () => {

    initializeLoader();

});


function initializeLoader() {

    const loader =
        document.querySelector(
            ".loading"
        );


    if (!loader) return;


    window.addEventListener(
        "load",
        () => {

            hideLoader();

        }
    );


    setTimeout(() => {

        hideLoader();

    }, 3000);

}



/*
====================================
Hide Loader
====================================
*/

function hideLoader() {

    const loader =
        document.querySelector(
            ".loading"
        );


    if (!loader) return;


    loader.classList.add(
        "loaded"
    );


    document.body.classList.add(
        "loaded"
    );


    setTimeout(() => {

        loader.remove();

    }, 500);

}



/*
====================================
Show Loader
====================================
*/

function showLoader() {

    const loader =
        document.querySelector(
            ".loading"
        );


    if (!loader) return;


    loader.classList.remove(
        "loaded"
    );


    document.body.classList.remove(
        "loaded"
    );

}



/*
====================================
Page Navigation Loader
====================================
*/

function enablePageLoader() {

    const links =
        document.querySelectorAll(
            "a[href]"
        );


    links.forEach((link) => {

        const url =
            link.getAttribute(
                "href"
            );


        if (
            !url ||
            url.startsWith("#") ||
            url.startsWith("http")
        ) return;


        link.addEventListener(
            "click",
            () => {

                showLoader();

            }
        );

    });

}



document.addEventListener(
    "DOMContentLoaded",
    enablePageLoader
);
