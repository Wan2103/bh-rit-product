/*
=========================================
Loading Screen Controller
Beyond Horizon Technologies
=========================================
*/


document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeLoader();

    }
);



/*
=========================================
Initialize Loader
=========================================
*/


function initializeLoader() {


    const loader =
        document.querySelector(
            "[data-component='loading']"
        );



    if (!loader) {

        return;

    }



    window.addEventListener(
        "load",
        () => {


            hideLoader(
                loader
            );


        }
    );



    // Safety fallback
    setTimeout(
        () => {

            hideLoader(
                loader
            );

        },
        5000
    );


}



/*
=========================================
Hide Loader
=========================================
*/


function hideLoader(
    loader
) {


    if (
        loader.classList.contains(
            "loaded"
        )
    ) {

        return;

    }



    loader.classList.add(
        "loaded"
    );



    document.body.classList.remove(
        "loading"
    );



    setTimeout(
        () => {


            loader.remove();


        },
        600
    );


}



/*
=========================================
Show Loader
=========================================
*/


function showLoader() {


    let loader =
        document.querySelector(
            ".loading"
        );



    if (!loader) {


        loader =
            document.createElement(
                "div"
            );


        loader.className =
            "loading";



        loader.innerHTML = `

            <div class="loading__spinner">

            </div>

        `;



        document.body.appendChild(
            loader
        );


    }



    loader.classList.remove(
        "loaded"
    );



    document.body.classList.add(
        "loading"
    );


}



/*
=========================================
Page Transition Loader
=========================================
*/


function navigateWithLoader(
    url
) {


    showLoader();



    setTimeout(
        () => {


            window.location.href =
                url;



        },
        300
    );


}



/*
=========================================
Export
=========================================
*/


window.Loader = {


    show:
        showLoader,


    hide:
        () => {


            const loader =
                document.querySelector(
                    ".loading"
                );


            if (loader) {

                hideLoader(
                    loader
                );

            }


        },


    navigate:
        navigateWithLoader

};
