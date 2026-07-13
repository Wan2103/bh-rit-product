/**
 * search.js
 * Handles website search functionality
 */

(function () {

    "use strict";


    const SEARCH_SELECTOR = "[data-search]";
    const SEARCH_INPUT_SELECTOR = "[data-search-input]";
    const SEARCH_RESULT_SELECTOR = "[data-search-results]";


    let searchData = [];


    /**
     * Initialize search
     */
    async function initializeSearch() {

        const searchElements = document.querySelectorAll(SEARCH_SELECTOR);

        if (!searchElements.length) return;


        await loadSearchData();


        searchElements.forEach(search => {

            const input = search.querySelector(SEARCH_INPUT_SELECTOR);
            const results = search.querySelector(SEARCH_RESULT_SELECTOR);


            if (!input) return;


            input.addEventListener("input", function () {

                const keyword = this.value.trim().toLowerCase();


                if (!keyword) {

                    clearResults(results);
                    return;

                }


                const matches = performSearch(keyword);


                renderResults(results, matches);

            });


        });


    }



    /**
     * Load searchable content
     */
    async function loadSearchData() {

        try {

            const sources = [

                "data/products.json",
                "data/services.json",
                "data/industries.json"

            ];


            let combined = [];


            for (const source of sources) {

                const response = await fetch(source);


                if (!response.ok) continue;


                const data = await response.json();


                if (Array.isArray(data)) {

                    combined = combined.concat(data);

                }

            }


            searchData = combined;


        } catch (error) {

            console.error(
                "Failed to load search data:",
                error
            );

        }

    }



    /**
     * Search content
     */
    function performSearch(keyword) {

        return searchData.filter(item => {


            const searchableText = [

                item.name,
                item.title,
                item.description,
                item.category

            ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();



            return searchableText.includes(keyword);


        })
        .slice(0, 10);

    }



    /**
     * Display search results
     */
    function renderResults(container, results) {

        if (!container) return;


        container.innerHTML = "";


        if (!results.length) {

            container.innerHTML = `

                <div class="search-empty">

                    No results found

                </div>

            `;

            return;

        }



        results.forEach(item => {


            const result = document.createElement("a");


            result.className = "search-result";


            result.href = item.link || "#";


            result.innerHTML = `

                <h4>

                    ${item.name || item.title || "Untitled"}

                </h4>


                <p>

                    ${item.description || ""}

                </p>

            `;


            container.appendChild(result);


        });


    }



    /**
     * Clear results
     */
    function clearResults(container) {

        if (!container) return;


        container.innerHTML = "";

    }



    /**
     * Start search
     */
    document.addEventListener(
        "DOMContentLoaded",
        initializeSearch
    );


})();
