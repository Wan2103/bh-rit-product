/**
 * utils.js
 *
 * Global utility functions used throughout
 * Beyond Horizon Technologies website.
 */


/**
 * Select single element
 */
function $(selector, parent = document) {

    return parent.querySelector(selector);

}



/**
 * Select multiple elements
 */
function $$(selector, parent = document) {

    return [
        ...parent.querySelectorAll(selector)
    ];

}



/**
 * Load JSON file
 */
async function loadJSON(path) {


    try {


        const response = await fetch(path);


        if (!response.ok) {

            throw new Error(
                `Failed to load ${path}`
            );

        }


        return await response.json();



    } catch(error) {


        console.error(
            "JSON Load Error:",
            error
        );


        return null;


    }


}





/**
 * Create element helper
 */
function createElement(
    tag,
    className = "",
    content = ""
) {


    const element = document.createElement(
        tag
    );


    if (className) {

        element.className = className;

    }


    if (content) {

        element.innerHTML = content;

    }


    return element;


}





/**
 * Debounce function
 */
function debounce(
    callback,
    delay = 300
) {


    let timer;


    return function(...args) {


        clearTimeout(timer);


        timer = setTimeout(
            () => {

                callback.apply(
                    this,
                    args
                );

            },
            delay
        );


    };


}





/**
 * Throttle function
 */
function throttle(
    callback,
    limit = 300
) {


    let waiting = false;


    return function(...args) {


        if (!waiting) {


            callback.apply(
                this,
                args
            );


            waiting = true;


            setTimeout(
                () => {

                    waiting = false;

                },
                limit
            );


        }


    };


}





/**
 * Format text
 */
function capitalize(text) {


    if (!text) {

        return "";

    }


    return text.charAt(0).toUpperCase()
        + text.slice(1);


}





/**
 * Convert text to slug
 */
function slugify(text) {


    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(
            /\s+/g,
            "-"
        )
        .replace(
            /[^\w\-]+/g,
            ""
        )
        .replace(
            /\-\-+/g,
            "-"
        );


}





/**
 * Format file size
 */
function formatFileSize(bytes) {


    if (bytes === 0) {

        return "0 Bytes";

    }


    const units = [
        "Bytes",
        "KB",
        "MB",
        "GB"
    ];


    const index = Math.floor(
        Math.log(bytes) /
        Math.log(1024)
    );


    return (
        parseFloat(
            (
                bytes /
                Math.pow(1024,index)
            )
            .toFixed(2)
        )
        +
        " "
        +
        units[index]
    );


}





/**
 * Check if element exists
 */
function exists(element) {


    return (
        element !== null &&
        element !== undefined
    );


}





/**
 * Smooth scroll
 */
function scrollToElement(
    selector
) {


    const element = $(
        selector
    );


    if (!element) {

        return;

    }


    element.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });


}





/**
 * Get URL parameter
 */
function getURLParam(
    name
) {


    const params =
        new URLSearchParams(
            window.location.search
        );


    return params.get(name);


}





/**
 * Delay helper
 */
function wait(
    milliseconds
) {


    return new Promise(
        resolve =>
            setTimeout(
                resolve,
                milliseconds
            )
    );


}





/**
 * Export utilities globally
 */
window.BHUtils = {


    $,

    $$,

    loadJSON,

    createElement,

    debounce,

    throttle,

    capitalize,

    slugify,

    formatFileSize,

    exists,

    scrollToElement,

    getURLParam,

    wait


};
