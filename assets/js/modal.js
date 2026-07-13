document.addEventListener("DOMContentLoaded", () => {

    initializeModals();

});


function initializeModals() {

    const modals =
        document.querySelectorAll(
            ".modal"
        );


    modals.forEach((modal) => {

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
            () => {

                closeModal(
                    modal
                );

            }
        );


        overlay?.addEventListener(
            "click",
            () => {

                closeModal(
                    modal
                );

            }
        );

    });


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                closeAllModals();

            }

        }
    );


    initializeModalTriggers();

}



/*
====================================
Modal Triggers
====================================
*/

function initializeModalTriggers() {

    const triggers =
        document.querySelectorAll(
            "[data-modal]"
        );


    triggers.forEach((trigger) => {

        trigger.addEventListener(
            "click",
            () => {

                const modalId =
                    trigger.dataset.modal;


                const modal =
                    document.getElementById(
                        modalId
                    );


                if (modal) {

                    openModal(
                        modal
                    );

                }

            }
        );

    });

}



/*
====================================
Open Modal
====================================
*/

function openModal(modal) {

    modal.classList.add(
        "active"
    );


    document.body.classList.add(
        "modal-open"
    );


    document.body.style.overflow =
        "hidden";

}



/*
====================================
Close Modal
====================================
*/

function closeModal(modal) {

    modal.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "modal-open"
    );


    document.body.style.overflow =
        "";

}



/*
====================================
Close All Modals
====================================
*/

function closeAllModals() {

    const modals =
        document.querySelectorAll(
            ".modal.active"
        );


    modals.forEach((modal) => {

        closeModal(
            modal
        );

    });

}



/*
====================================
Dynamic Modal Content
====================================
*/

function openDynamicModal(
    title,
    content,
    buttonText = "",
    buttonUrl = "#"
) {

    const modal =
        document.querySelector(
            ".modal"
        );


    if (!modal) return;


    const modalTitle =
        modal.querySelector(
            ".modal__title"
        );


    const modalBody =
        modal.querySelector(
            ".modal__body"
        );


    const modalButton =
        modal.querySelector(
            ".modal__actions .btn"
        );


    if (modalTitle) {

        modalTitle.textContent =
            title;

    }


    if (modalBody) {

        modalBody.innerHTML =
            content;

    }


    if (modalButton) {

        modalButton.textContent =
            buttonText;

        modalButton.href =
            buttonUrl;

    }


    openModal(
        modal
    );

}



/*
====================================
Product Modal
====================================
*/

function openProductModal(product) {

    openDynamicModal(

        product.name,

        `

        <div class="product-modal__image">

            <img 
                src="${product.image}" 
                alt="${product.name}"
            >

        </div>


        <p>
            ${product.description}
        </p>

        `,

        "View Product",

        product.url

    );

}
