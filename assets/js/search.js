document.addEventListener("DOMContentLoaded", () => {

    initializeSearch();

});



function initializeSearch() {

    const searchInput =
        document.querySelector(
            ".search__input"
        );


    const searchButton =
        document.querySelector(
            ".search__button"
        );


    if (!searchInput) return;


    searchInput.addEventListener(
        "input",
        () => {

            performSearch(
                searchInput.value
            );

        }
    );


    searchButton?.addEventListener(
        "click",
        () => {

            performSearch(
                searchInput.value
            );

        }
    );

}



/*
====================================
Search Products
====================================
*/

function performSearch(
    keyword
) {

    const searchTerm =
        keyword
            .toLowerCase()
            .trim();


    const items =
        document.querySelectorAll(
            "[data-search-item]"
        );


    if (!items.length) return;


    items.forEach(
        (item) => {

            const content =
                item.textContent
                    .toLowerCase();


            if (
                content.includes(searchTerm)
                ||
                searchTerm === ""
            ) {

                item.style.display =
                    "";

            } else {

                item.style.display =
                    "none";

            }

        }
    );

}



/*
====================================
Data Search
====================================
*/

async function searchData(
    keyword
) {

    try {

        const response =
            await fetch(
                "data/products.json"
            );


        const data =
            await response.json();


        const results =
            data.filter(
                (item) => {

                    return (

                        item.name
                            .toLowerCase()
                            .includes(
                                keyword.toLowerCase()
                            )

                        ||

                        item.category
                            ?.toLowerCase()
                            .includes(
                                keyword.toLowerCase()
                            )

                    );

                }
            );


        return results;


    } catch (error) {

        console.error(
            "Search error:",
            error
        );


        return [];

    }

}



/*
====================================
Search Suggestions
====================================
*/

function showSearchSuggestions(
    results
) {

    const container =
        document.querySelector(
            ".search__suggestions"
        );


    if (!container) return;


    container.innerHTML = "";


    results.forEach(
        (item) => {

            const suggestion =
                document.createElement(
                    "a"
                );


            suggestion.href =
                item.url || "#";


            suggestion.className =
                "search__suggestion";


            suggestion.textContent =
                item.name;


            container.appendChild(
                suggestion
            );

        }
    );


    if (results.length) {

        container.classList.add(
            "active"
        );

    } else {

        container.classList.remove(
            "active"
        );

    }

}



/*
====================================
Advanced Search
====================================
*/

function advancedSearch(
    filters
) {

    const items =
        document.querySelectorAll(
            "[data-search-item]"
        );


    items.forEach(
        (item) => {

            let visible = true;


            Object.keys(filters)
                .forEach(
                    (key) => {

                        const value =
                            item.dataset[key];


                        if (
                            filters[key] &&
                            value !== filters[key]
                        ) {

                            visible = false;

                        }

                    }
                );


            item.style.display =
                visible
                    ? ""
                    : "none";

        }
    );

}



/*
====================================
Clear Search
====================================
*/

function clearSearch() {

    const input =
        document.querySelector(
            ".search__input"
        );


    if (input) {

        input.value = "";

        performSearch("");

    }


    const suggestions =
        document.querySelector(
            ".search__suggestions"
        );


    suggestions?.classList.remove(
        "active"
    );

}
