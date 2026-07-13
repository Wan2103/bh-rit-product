/**
 * theme.js
 *
 * Handles website theme settings:
 * - Dark/light mode
 * - Theme persistence
 * - Theme toggle button
 */


class ThemeManager {


    constructor() {

        this.storageKey = "bh-theme";

        this.defaultTheme = "light";

        this.currentTheme = this.getSavedTheme();

    }



    /**
     * Initialize theme
     */
    init() {


        this.applyTheme(
            this.currentTheme
        );


        this.attachToggle();


    }




    /**
     * Get saved theme
     */
    getSavedTheme() {


        const saved = localStorage.getItem(
            this.storageKey
        );


        if (saved) {

            return saved;

        }


        return this.defaultTheme;


    }




    /**
     * Apply theme
     */
    applyTheme(theme) {


        document.documentElement.setAttribute(
            "data-theme",
            theme
        );


        this.currentTheme = theme;


        localStorage.setItem(
            this.storageKey,
            theme
        );


        this.updateToggleIcon();


    }




    /**
     * Toggle theme
     */
    toggle() {


        const newTheme = 
            this.currentTheme === "dark"
            ? "light"
            : "dark";


        this.applyTheme(
            newTheme
        );


    }





    /**
     * Attach toggle button
     */
    attachToggle() {


        const buttons = document.querySelectorAll(
            "[data-theme-toggle]"
        );


        buttons.forEach(button => {


            button.addEventListener(
                "click",
                () => this.toggle()
            );


        });


    }




    /**
     * Update toggle icon
     */
    updateToggleIcon() {


        const buttons = document.querySelectorAll(
            "[data-theme-toggle]"
        );


        buttons.forEach(button => {


            if (
                this.currentTheme === "dark"
            ) {

                button.innerHTML = "☀️";

                button.setAttribute(
                    "aria-label",
                    "Switch to light mode"
                );


            } else {


                button.innerHTML = "🌙";


                button.setAttribute(
                    "aria-label",
                    "Switch to dark mode"
                );


            }


        });


    }




    /**
     * Detect system preference
     */
    detectSystemTheme() {


        if (
            window.matchMedia &&
            window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches
        ) {

            return "dark";

        }


        return "light";


    }



}




/**
 * Global theme instance
 */
window.themeManager = new ThemeManager();



document.addEventListener(
    "DOMContentLoaded",
    () => {

        window.themeManager.init();

    }
);
