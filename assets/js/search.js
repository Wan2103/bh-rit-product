/**
 * Search System
 * Beyond Horizon Technologies
 *
 * Handles:
 * - Product search
 * - Content filtering
 * - Dynamic search results
 */


(function () {


    function initializeSearch() {


        const searchInputs = document.querySelectorAll(
            "[data-search]"
        );


        if (!searchInputs.length) {

            return;

        }



        searchInputs.forEach(input => {


            input.addEventListener(
                "input",
                function () {


                    const keyword = this.value
                        .toLowerCase()
                        .trim();



                    const searchableItems =
                        document.querySelectorAll(
                            "[data-search-item]"
                        );



                    searchableItems.forEach(item => {


                        const content =
                            item.textContent
                                .toLowerCase();



                        if (
                            keyword === "" ||
                            content.includes(keyword)
                        ) {


                            item.style.display = "";


                        } else {


                            item.style.display = "none";


                        }


                    });



                }
            );


        });



    }




    function clearSearch() {


        const searchInputs =
            document.querySelectorAll(
                "[data-search]"
            );


        searchInputs.forEach(input => {


            input.value = "";


        });



        const items =
            document.querySelectorAll(
                "[data-search-item]"
            );


        items.forEach(item => {


            item.style.display = "";


        });


    }





    // Make functions available globally
    window.initializeSearch = initializeSearch;

    window.clearSearch = clearSearch;



})();
