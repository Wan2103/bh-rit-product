document.addEventListener("DOMContentLoaded", () => {

    initializeGallery();

});


function initializeGallery() {

    const galleryItems = document.querySelectorAll(
        ".gallery__item"
    );


    if (!galleryItems.length) return;


    galleryItems.forEach((item) => {

        item.addEventListener(
            "click",
            () => {

                const image =
                    item.querySelector("img");


                if (image) {

                    openGalleryLightbox(
                        image.src,
                        image.alt
                    );

                }

            }
        );

    });


    createLightbox();

}



/*
====================================
Create Lightbox
====================================
*/

function createLightbox() {

    if (
        document.querySelector(
            ".gallery-lightbox"
        )
    ) return;


    const lightbox =
        document.createElement("div");


    lightbox.className =
        "gallery-lightbox";


    lightbox.innerHTML = `

        <button class="gallery-lightbox__close">
            &times;
        </button>

        <img 
            src="" 
            alt="Gallery Preview"
        >

    `;


    document.body.appendChild(
        lightbox
    );


    const close =
        lightbox.querySelector(
            ".gallery-lightbox__close"
        );


    close.addEventListener(
        "click",
        closeGalleryLightbox
    );


    lightbox.addEventListener(
        "click",
        (event) => {

            if (
                event.target === lightbox
            ) {

                closeGalleryLightbox();

            }

        }
    );

}



/*
====================================
Open Lightbox
====================================
*/

function openGalleryLightbox(
    imageSrc,
    imageAlt = ""
) {

    const lightbox =
        document.querySelector(
            ".gallery-lightbox"
        );


    if (!lightbox) return;


    const image =
        lightbox.querySelector("img");


    image.src = imageSrc;

    image.alt = imageAlt;


    lightbox.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}



/*
====================================
Close Lightbox
====================================
*/

function closeGalleryLightbox() {

    const lightbox =
        document.querySelector(
            ".gallery-lightbox"
        );


    if (!lightbox) return;


    lightbox.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}



/*
====================================
Gallery Filter
====================================
*/

function filterGallery(category) {

    const items =
        document.querySelectorAll(
            ".gallery__item"
        );


    items.forEach((item) => {

        const itemCategory =
            item.dataset.category;


        if (
            category === "all" ||
            itemCategory === category
        ) {

            item.style.display =
                "block";

        } else {

            item.style.display =
                "none";

        }

    });

}



/*
====================================
Gallery Slider
====================================
*/

function initializeGallerySlider() {

    const slider =
        document.querySelector(
            ".gallery-slider"
        );


    if (!slider) return;


    const items =
        slider.querySelectorAll(
            ".gallery-slider__item"
        );


    let current = 0;


    function showSlide(index) {

        items.forEach(
            (item, i) => {

                item.classList.toggle(
                    "active",
                    i === index
                );

            }
        );

    }


    setInterval(() => {

        current++;

        if (
            current >= items.length
        ) {

            current = 0;

        }


        showSlide(current);


    }, 5000);

}
