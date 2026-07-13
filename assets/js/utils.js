const Utils = {


    /*
    ====================================
    DOM Helpers
    ====================================
    */

    select(selector, parent = document) {

        return parent.querySelector(selector);

    },


    selectAll(selector, parent = document) {

        return [
            ...parent.querySelectorAll(selector)
        ];

    },



    /*
    ====================================
    Class Helpers
    ====================================
    */

    addClass(element, className) {

        if (element) {

            element.classList.add(
                className
            );

        }

    },


    removeClass(element, className) {

        if (element) {

            element.classList.remove(
                className
            );

        }

    },


    toggleClass(element, className) {

        if (element) {

            element.classList.toggle(
                className
            );

        }

    },


    hasClass(element, className) {

        return element?.classList.contains(
            className
        );

    },



    /*
    ====================================
    Event Helpers
    ====================================
    */

    on(element, event, callback) {

        if (element) {

            element.addEventListener(
                event,
                callback
            );

        }

    },


    off(element, event, callback) {

        if (element) {

            element.removeEventListener(
                event,
                callback
            );

        }

    },



    /*
    ====================================
    Fetch Helpers
    ====================================
    */

    async fetchJSON(url) {

        try {

            const response =
                await fetch(url);


            if (!response.ok) {

                throw new Error(
                    `Failed loading ${url}`
                );

            }


            return await response.json();


        } catch (error) {

            console.error(
                error
            );


            return null;

        }

    },



    /*
    ====================================
    Format Helpers
    ====================================
    */

    capitalize(text) {

        if (!text) return "";


        return (
            text.charAt(0).toUpperCase() +
            text.slice(1)
        );

    },


    truncate(text, length = 100) {

        if (
            text.length <= length
        ) {

            return text;

        }


        return (
            text.substring(0, length) +
            "..."
        );

    },



    /*
    ====================================
    Number Helpers
    ====================================
    */

    formatNumber(number) {

        return new Intl.NumberFormat()
            .format(number);

    },


    formatCurrency(
        value,
        currency = "MYR"
    ) {

        return new Intl.NumberFormat(
            "en-MY",
            {
                style: "currency",
                currency: currency
            }
        ).format(value);

    },



    /*
    ====================================
    URL Helpers
    ====================================
    */

    getQueryParam(name) {

        const params =
            new URLSearchParams(
                window.location.search
            );


        return params.get(name);

    },


    redirect(url) {

        window.location.href =
            url;

    },



    /*
    ====================================
    Storage Helpers
    ====================================
    */

    saveStorage(
        key,
        value
    ) {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    },


    getStorage(key) {

        const data =
            localStorage.getItem(
                key
            );


        return data
            ? JSON.parse(data)
            : null;

    },


    removeStorage(key) {

        localStorage.removeItem(
            key
        );

    },



    /*
    ====================================
    Debounce
    ====================================
    */

    debounce(
        func,
        delay = 300
    ) {

        let timer;


        return (...args) => {

            clearTimeout(
                timer
            );


            timer =
                setTimeout(
                    () => {

                        func.apply(
                            this,
                            args
                        );

                    },
                    delay
                );

        };

    },



    /*
    ====================================
    Device Helpers
    ====================================
    */

    isMobile() {

        return window.innerWidth <= 768;

    },


    isTablet() {

        return (
            window.innerWidth > 768 &&
            window.innerWidth <= 992
        );

    },


    isDesktop() {

        return window.innerWidth > 992;

    },


    /*
    ====================================
    Scroll Helpers
    ====================================
    */

    scrollTo(
        target,
        offset = 0
    ) {

        const element =
            typeof target === "string"
                ? document.querySelector(target)
                : target;


        if (!element) return;


        window.scrollTo({

            top:
                element.offsetTop -
                offset,

            behavior:
                "smooth"

        });

    }

};



window.Utils = Utils;
