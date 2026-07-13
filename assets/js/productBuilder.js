/*
=========================================
Product Builder Controller
Beyond Horizon Technologies
=========================================
*/


document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeProductBuilder();

    }
);



/*
=========================================
Initialize Product Builder
=========================================
*/


async function initializeProductBuilder() {


    const containers =
        document.querySelectorAll(
            "[data-products]"
        );



    if (!containers.length) {

        return;

    }



    try {


        const products =
            await loadProducts();



        containers.forEach(
            (container) => {


                renderProducts(
                    container,
                    products
                );


            }
        );


    }

    catch(error) {


        console.error(
            "Failed to load products:",
            error
        );


    }


}



/*
=========================================
Load Products JSON
=========================================
*/


async function loadProducts() {


    const response =
        await fetch(
            "data/products.json"
        );



    if (!response.ok) {


        throw new Error(
            "Unable to load products data"
        );


    }



    const data =
        await response.json();



    return data.products || data;


}



/*
=========================================
Render Products
=========================================
*/


function renderProducts(
    container,
    products
) {


    container.innerHTML = "";



    products.forEach(
        (product) => {


            const card =
                createProductCard(
                    product
                );



            container.appendChild(
                card
            );


        }
    );


}



/*
=========================================
Create Product Card
=========================================
*/


function createProductCard(
    product
) {


    const card =
        document.createElement(
            "article"
        );



    card.className =
        "product-card";



    card.innerHTML = `

        <div class="product-card__image">


            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >


        </div>



        <div class="product-card__content">


            <h3>

                ${product.name}

            </h3>



            <p>

                ${product.shortDescription || product.description}

            </p>



            <a
                href="${product.link || '#'}"
                class="btn btn--primary"
            >

                View Details

            </a>


        </div>

    `;



    return card;

}



/*
=========================================
Product Filter
=========================================
*/


function filterProducts(
    category
) {


    const cards =
        document.querySelectorAll(
            ".product-card"
        );



    cards.forEach(
        (card) => {


            const productCategory =
                card.dataset.category;



            if (
                category === "all" ||
                productCategory === category
            ) {


                card.style.display =
                    "";


            }

            else {


                card.style.display =
                    "none";


            }


        }
    );


}



/*
=========================================
Product Search
=========================================
*/


function searchProducts(
    keyword
) {


    const cards =
        document.querySelectorAll(
            ".product-card"
        );



    const search =
        keyword.toLowerCase();



    cards.forEach(
        (card) => {


            const text =
                card.textContent
                    .toLowerCase();



            card.style.display =
                text.includes(search)
                ?
                ""
                :
                "none";


        }
    );


}



/*
=========================================
Product Detail Builder
=========================================
*/


function buildProductDetail(
    product
) {


    const container =
        document.querySelector(
            "[data-product-detail]"
        );



    if (!container) {

        return;

    }



    container.innerHTML = `


        <section class="product-detail">


            <img
                src="${product.image}"
                alt="${product.name}"
            >



            <div>


                <h1>
                    ${product.name}
                </h1>



                <p>
                    ${product.description}
                </p>



                ${
                    product.brochure
                    ?
                    `
                    <a 
                        href="${product.brochure}"
                        class="btn btn--outline"
                        target="_blank"
                    >
                        Download Brochure
                    </a>
                    `
                    :
                    ""
                }


            </div>


        </section>


    `;


}



/*
=========================================
Export
=========================================
*/


window.ProductBuilder = {


    initialize:
        initializeProductBuilder,


    load:
        loadProducts,


    render:
        renderProducts,


    filter:
        filterProducts,


    search:
        searchProducts,


    detail:
        buildProductDetail

};
