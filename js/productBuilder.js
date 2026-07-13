document.addEventListener("DOMContentLoaded", () => {

    initializeProductBuilder();

});



async function initializeProductBuilder() {

    const productContainers =
        document.querySelectorAll(
            "[data-products]"
        );


    if (!productContainers.length) return;


    try {

        const products =
            await loadProducts();


        productContainers.forEach(
            (container) => {

                renderProducts(
                    container,
                    products
                );

            }
        );


    } catch (error) {

        console.error(
            "Failed to load products:",
            error
        );

    }

}



/*
====================================
Load Product Data
====================================
*/

async function loadProducts() {

    const response =
        await fetch(
            "data/products.json"
        );


    if (!response.ok) {

        throw new Error(
            "Unable to fetch products"
        );

    }


    return await response.json();

}



/*
====================================
Render Products
====================================
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
====================================
Create Product Card
====================================
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

            <span class="product-card__category">

                ${product.category || ""}

            </span>


            <h3 class="product-card__title">

                ${product.name}

            </h3>


            <p class="product-card__description">

                ${product.description}

            </p>


            <a
                href="${product.url || "#"}"
                class="btn btn--primary"
            >

                View Product

            </a>

        </div>

    `;


    return card;

}



/*
====================================
Product Filter
====================================
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

            const cardCategory =
                card.dataset.category;


            if (
                category === "all" ||
                category === cardCategory
            ) {

                card.style.display =
                    "block";

            } else {

                card.style.display =
                    "none";

            }

        }
    );

}



/*
====================================
Search Products
====================================
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


            if (
                text.includes(search)
            ) {

                card.style.display =
                    "block";

            } else {

                card.style.display =
                    "none";

            }

        }
    );

}



/*
====================================
Product Modal Preview
====================================
*/

function previewProduct(
    product
) {

    if (
        typeof openProductModal ===
        "function"
    ) {

        openProductModal(
            product
        );

    }

}
