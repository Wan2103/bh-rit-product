/*
=========================================
Application Controller
Beyond Horizon Technologies
=========================================
*/


document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeApplication();

    }
);



/*
=========================================
Initialize Application
=========================================
*/


function initializeApplication() {


    initializeComponents();

    initializeRouter();

    initializePageFeatures();

}



/*
=========================================
Load Components
=========================================
*/


async function initializeComponents() {


    const components =
        document.querySelectorAll(
            "[data-component]"
        );



    for (
        const component of components
    ) {


        const name =
            component.dataset.component;



        try {


            const response =
                await fetch(
                    `components/${name}.html`
                );



            if (
                !response.ok
            ) {

                throw new Error(
                    `Component not found: ${name}`
                );

            }



            component.innerHTML =
                await response.text();



        }

        catch(error) {


            console.error(
                "Component loading failed:",
                error
            );


        }


    }


}



/*
=========================================
Page Features
=========================================
*/


function initializePageFeatures() {


    initializeNavigation();

    initializeAnimations();

    initializeScrollEffects();

    initializeProductBuilder();

    initializeSearch();

}



/*
=========================================
Global Helpers
=========================================
*/


window.BHApp = {


    version:
        "1.0.0",



    company:
        "Beyond Horizon Technologies",



    reload() {


        window.location.reload();


    },


    scrollToTop() {


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


    }


};



/*
=========================================
Console Branding
=========================================
*/


console.log(
    "%cBeyond Horizon Technologies",
    `
    color:#00A8E8;
    font-size:20px;
    font-weight:bold;
    `
);


console.log(
    "%cDigital Asset Intelligence Solutions",
    `
    color:#64748b;
    font-size:14px;
    `
);
