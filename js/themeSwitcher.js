document.getElementById('js-themeSwitcher').onclick = function () {
    // themeIcon has class 'bi', 'bi-sun'
    themeIcon = document.getElementById("themeIcon");

    if (themeIcon.classList.contains("bi-sun")) {
        themeIcon.classList.remove("bi-sun");
        themeIcon.classList.add("bi-moon-stars-fill");
        document.documentElement.style.setProperty("--body-background", "##FAFAFC");
        document.documentElement.style.setProperty("--font-color", "#303035");
        document.documentElement.style.setProperty(
            "--body-background-lighter",
            "#fff"
        );
        document.documentElement.style.setProperty(
            "--body-background-darker",
            "#DADADC"
        );
    } else {
        themeIcon.classList.remove("bi-moon-stars-fill");
        themeIcon.classList.add("bi-sun");
        document.documentElement.style.setProperty("--body-background", "#303035");
        document.documentElement.style.setProperty("--font-color", "#fff");
        document.documentElement.style.setProperty(
            "--body-background-lighter",
            "#404045"
        );
        document.documentElement.style.setProperty(
            "--body-background-darker",
            "#202025"
        );
    }

    // change following values
    // --body-background : #303035;
    // --font-color : #fff;
    // --body-background-lighter: #404045;
    // --body-background-darker: #202025;
}