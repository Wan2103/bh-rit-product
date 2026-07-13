document.addEventListener("DOMContentLoaded", () => {

    initializeApp();

});


function initializeApp() {

    loadComponents();

    initializeNavigation();

    initializeAnimations();

    initializeGallery();

    initializeModals();

    initializeTheme();

}



/*
====================================
Component Loader
====================================
*/

async function loadComponents() {

    const components = document.querySelectorAll(
        "[data-component]"
    );


    for (const element of components) {

        const componentName =
            element.dataset.component;


        try {

            const response = await fetch(
                `components/${componentName}.html`
            );


            if (!response.ok) {

                throw new Error(
                    "Component not found"
                );

            }


            element.innerHTML =
                await response.text();


        } catch (error) {

            console.error(
                `Failed loading component: ${componentName}`,
                error
            );

        }

    }

}



/*
====================================
Navigation
====================================
*/

function initializeNavigation() {

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

            menu.classList.toggle(
                "active"
            );

        }
    );

}



/*
====================================
Animations
====================================
*/

function initializeAnimations() {

    const animatedElements =
        document.querySelectorAll(
            ".animate"
        );


    animatedElements.forEach(
        (element) => {

            element.classList.add(
                "active"
            );

        }
    );

}



/*
====================================
Gallery
====================================
*/

function initializeGallery() {

    const galleryItems =
        document.querySelectorAll(
            ".gallery__item"
        );


    galleryItems.forEach(
        (item) => {

            item.addEventListener(
                "click",
                () => {

                    const image =
                        item.querySelector(
                            "img"
                        );


                    if (image) {

                        openImageModal(
                            image.src
                        );

                    }

                }
            );

        }
    );

}



/*
====================================
Modal
====================================
*/

function initializeModals() {

    const modal =
        document.querySelector(
            ".modal"
        );


    if (!modal) return;


    const closeButton =
        modal.querySelector(
            ".modal__close"
        );


    const overlay =
        modal.querySelector(
            ".modal__overlay"
        );


    closeButton?.addEventListener(
        "click",
        closeModal
    );


    overlay?.addEventListener(
        "click",
        closeModal
    );

}



function openModal() {

    const modal =
        document.querySelector(
            ".modal"
        );


    if (modal) {

        modal.classList.add(
            "active"
        );

        document.body.style.overflow =
            "hidden";

    }

}



function closeModal() {

    const modal =
        document.querySelector(
            ".modal"
        );


    if (modal) {

        modal.classList.remove(
            "active"
        );

        document.body.style.overflow =
            "";

    }

}



function openImageModal(src) {

    const modal =
        document.querySelector(
            ".modal"
        );


    if (!modal) return;


    const body =
        modal.querySelector(
            ".modal__body"
        );


    body.innerHTML = `

        <img 
            src="${src}" 
            alt="Gallery Image"
        >

    `;


    openModal();

}



/*
====================================
Theme
====================================
*/

function initializeTheme() {

    const savedTheme =
        localStorage.getItem(
            "theme"
        );


    if (savedTheme) {

        document.documentElement.dataset.theme =
            savedTheme;

    }

}



function setTheme(theme) {

    document.documentElement.dataset.theme =
        theme;


    localStorage.setItem(
        "theme",
        theme
    );

}
