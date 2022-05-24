document.getElementById('js-themeSwitcher').addEventListener("click", () => {
    // themeIcon has class 'bi', 'bi-sun'
    themeIcon = document.getElementById("themeIcon");

    if (themeIcon.classList.contains("bi-sun")) {
        themeIcon.classList.remove("bi-sun");
        themeIcon.classList.add("bi-moon-stars-fill");
        document.documentElement.style.setProperty("--body-background", "##FAFAFC");
        document.documentElement.style.setProperty("--font-color", "#303035");
        document.documentElement.style.setProperty("--body-background-lighter","#fff");
        document.documentElement.style.setProperty("--body-background-darker","#DADADC");
        setCookie('theme', 'light', 365);
    } else {
        themeIcon.classList.remove("bi-moon-stars-fill");
        themeIcon.classList.add("bi-sun");
        document.documentElement.style.setProperty("--body-background", "#303035");
        document.documentElement.style.setProperty("--font-color", "#fff");
        document.documentElement.style.setProperty("--body-background-lighter","#404045");
        document.documentElement.style.setProperty("--body-background-darker","#202025");
        setCookie('theme', 'dark', 365);
    }

    // change following values
    // --body-background : #303035;
    // --font-color : #fff;
    // --body-background-lighter: #404045;
    // --body-background-darker: #202025;
});

window.onload = () => {
    let r = document.querySelector(':root');
    let theme = getCookie('theme');
    switch(theme){
        case 'dark':
            r.style.setProperty('--body-background', '#303035');
            r.style.setProperty('--font-color', '#fff');
            r.style.setProperty('--body-background-lighter', '#404045');
            r.style.setProperty('--body-background-darker', '#202025');
            break;
        case 'light':
            document.getElementById('themeIcon').classList.remove('bi-sun');
            document.getElementById('themeIcon').classList.add('bi-moon-stars-fill');
            r.style.setProperty('--body-background', '#FAFAFC');
            r.style.setProperty('--font-color', '#303035');
            r.style.setProperty('--body-background-lighter', '#fff');
            r.style.setProperty('--body-background-darker', '#DADADC');
            break;
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}