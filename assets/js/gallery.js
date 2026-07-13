/*
=========================================
Gallery Controller
Beyond Horizon Technologies
=========================================
*/


document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeGallery();

    }
);



/*
=========================================
Initialize Gallery
=========================================
*/


function initializeGallery() {


    const galleries =
        document.querySelectorAll(
            "[data-gallery]"
        );



    if (!galleries.length) {

        return;

    }



    galleries.forEach(
        (gallery) => {


            setupGallery(
                gallery
            );


        }
    );


}



/*
=========================================
Setup Gallery
=========================================
*/


function setupGallery(
    gallery
) {


    const images =
        gallery.querySelectorAll(
            "img"
        );



    images.forEach(
        (image) => {


            image.addEventListener(
                "click",
                () => {


                    openGalleryViewer(
                        image.src,
                        image.alt
                    );


                }
            );


        }
    );


}



/*
=========================================
Gallery Viewer
=========================================
*/


function openGalleryViewer(
    image,
    title = ""
) {


    let viewer =
        document.querySelector(
            ".gallery-viewer"
        );



    if (!viewer) {


        viewer =
            document.createElement(
                "div"
            );


        viewer.className =
            "gallery-viewer";



        viewer.innerHTML = `

            <div class="gallery-viewer__overlay"></div>

            <div class="gallery-viewer__content">

                <button 
                    class="gallery-viewer__close"
                    aria-label="Close gallery"
                >
                    &times;
                </button>


                <img 
                    class="gallery-viewer__image"
                    src=""
                    alt=""
                >


                <p class="gallery-viewer__title"></p>

            </div>

        `;



        document.body.appendChild(
            viewer
        );


        setupViewerEvents(
            viewer
        );


    }



    const viewerImage =
        viewer.querySelector(
            ".gallery-viewer__image"
        );


    const viewerTitle =
        viewer.querySelector(
            ".gallery-viewer__title"
        );



    viewerImage.src =
        image;



    viewerImage.alt =
        title;



    viewerTitle.textContent =
        title;



    viewer.classList.add(
        "active"
    );



    document.body.classList.add(
        "no-scroll"
    );


}



/*
=========================================
Viewer Events
=========================================
*/


function setupViewerEvents(
    viewer
) {


    const closeButton =
        viewer.querySelector(
            ".gallery-viewer__close"
        );


    const overlay =
        viewer.querySelector(
            ".gallery-viewer__overlay"
        );



    closeButton.addEventListener(
        "click",
        closeGalleryViewer
    );



    overlay.addEventListener(
        "click",
        closeGalleryViewer
    );



    document.addEventListener(
        "keydown",
        (event) => {


            if (
                event.key === "Escape"
            ) {


                closeGalleryViewer();


            }


        }
    );


}



/*
=========================================
Close Viewer
=========================================
*/


function closeGalleryViewer() {


    const viewer =
        document.querySelector(
            ".gallery-viewer"
        );



    if (!viewer) {

        return;

    }



    viewer.classList.remove(
        "active"
    );



    document.body.classList.remove(
        "no-scroll"
    );


}



/*
=========================================
Dynamic Gallery Builder
=========================================
*/


function buildGallery(
    container,
    images = []
) {


    if (!container) {

        return;

    }



    container.innerHTML = "";



    images.forEach(
        (
            image,
            index
        ) => {


            const item =
                document.createElement(
                    "div"
                );



            item.className =
                "gallery__item";



            item.innerHTML = `

                <img
                    src="${image}"
                    alt="Gallery image ${index + 1}"
                    loading="lazy"
                >

            `;



            container.appendChild(
                item
            );


        }
    );



    setupGallery(
        container
    );


}
