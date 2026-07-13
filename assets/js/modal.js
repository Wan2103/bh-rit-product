/*
=========================================
Modal Controller
Beyond Horizon Technologies
=========================================
*/


document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeModals();

    }
);



/*
=========================================
Initialize Modals
=========================================
*/


function initializeModals() {


    const modalTriggers =
        document.querySelectorAll(
            "[data-modal]"
        );



    modalTriggers.forEach(
        (trigger) => {


            trigger.addEventListener(
                "click",
                (event) => {


                    event.preventDefault();



                    const modalId =
                        trigger.dataset.modal;



                    openModal(
                        modalId
                    );


                }
            );


        }
    );



    document.addEventListener(
        "click",
        (event) => {


            if (
                event.target.matches(
                    "[data-modal-close]"
                )
            ) {


                closeModal(
                    event.target.closest(
                        ".modal"
                    )
                );


            }



            if (
                event.target.classList.contains(
                    "modal__overlay"
                )
            ) {


                closeModal(
                    event.target.closest(
                        ".modal"
                    )
                );


            }


        }
    );



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


}



/*
=========================================
Open Modal
=========================================
*/


function openModal(
    modalId
) {


    const modal =
        document.getElementById(
            modalId
        );



    if (!modal) {


        console.warn(
            `Modal not found: ${modalId}`
        );


        return;

    }



    modal.classList.add(
        "active"
    );



    document.body.classList.add(
        "no-scroll"
    );



}



/*
=========================================
Close Modal
=========================================
*/


function closeModal(
    modal
) {


    if (!modal) {

        return;

    }



    modal.classList.remove(
        "active"
    );



    if (
        !document.querySelector(
            ".modal.active"
        )
    ) {


        document.body.classList.remove(
            "no-scroll"
        );


    }


}



/*
=========================================
Close All Modals
=========================================
*/


function closeAllModals() {


    const modals =
        document.querySelectorAll(
            ".modal.active"
        );



    modals.forEach(
        (modal) => {


            closeModal(
                modal
            );


        }
    );


}



/*
=========================================
Create Dynamic Modal
=========================================
*/


function createModal(
    options = {}
) {


    const {

        id =
            "dynamic-modal",

        title =
            "",

        content =
            ""

    } = options;



    const modal =
        document.createElement(
            "div"
        );



    modal.id =
        id;



    modal.className =
        "modal";



    modal.innerHTML = `

        <div class="modal__overlay"></div>


        <div class="modal__container">


            <button 
                class="modal__close"
                data-modal-close
            >
                &times;
            </button>


            ${
                title
                ?
                `<h2 class="modal__title">${title}</h2>`
                :
                ""
            }


            <div class="modal__content">

                ${content}

            </div>


        </div>

    `;



    document.body.appendChild(
        modal
    );



    return modal;

}



/*
=========================================
Product Detail Modal
=========================================
*/


function openProductModal(
    product
) {


    const modal =
        createModal({

            id:
                "product-modal",

            title:
                product.name,


            content:

            `

            <img 
                src="${product.image}"
                alt="${product.name}"
            >


            <p>
                ${product.description}
            </p>


            `

        });



    openModal(
        modal.id
    );


}



/*
=========================================
Export
=========================================
*/


window.Modal = {


    open:
        openModal,


    close:
        closeModal,


    closeAll:
        closeAllModals,


    create:
        createModal,


    product:
        openProductModal

};
