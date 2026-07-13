document.addEventListener("DOMContentLoaded", () => {

    initializeTheme();

});



function initializeTheme() {

    const savedTheme =
        localStorage.getItem(
            "theme"
        );


    if (savedTheme) {

        applyTheme(
            savedTheme
        );

    } else {

        applyTheme(
            "light"
        );

    }


    initializeThemeToggle();

}



/*
====================================
Theme Toggle
====================================
*/

function initializeThemeToggle() {

    const toggle =
        document.querySelector(
            ".theme-toggle"
        );


    if (!toggle) return;


    toggle.addEventListener(
        "click",
        () => {

            const currentTheme =
                document.documentElement.dataset.theme;


            const newTheme =
                currentTheme === "dark"
                    ? "light"
                    : "dark";


            applyTheme(
                newTheme
            );

        }
    );

}



/*
====================================
Apply Theme
====================================
*/

function applyTheme(
    theme
) {

    document.documentElement.dataset.theme =
        theme;


    localStorage.setItem(
        "theme",
        theme
    );


    updateThemeIcon(
        theme
    );

}



/*
====================================
Update Icon
====================================
*/

function updateThemeIcon(
    theme
) {

    const icon =
        document.querySelector(
            ".theme-toggle i"
        );


    if (!icon) return;


    if (
        theme === "dark"
    ) {

        icon.className =
            "icon-sun";

    } else {

        icon.className =
            "icon-moon";

    }

}



/*
====================================
System Theme Detection
====================================
*/

function detectSystemTheme() {

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



/*
====================================
Auto Theme
====================================
*/

function enableAutoTheme() {

    const systemTheme =
        detectSystemTheme();


    applyTheme(
        systemTheme
    );


    window
        .matchMedia(
            "(prefers-color-scheme: dark)"
        )
        .addEventListener(
            "change",
            (event) => {

                applyTheme(
                    event.matches
                        ? "dark"
                        : "light"
                );

            }
        );

}



/*
====================================
Reset Theme
====================================
*/

function resetTheme() {

    localStorage.removeItem(
        "theme"
    );


    applyTheme(
        "light"
    );

}
