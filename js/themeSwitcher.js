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

const themeIcon = document.getElementById("themeIcon");
function setDark()
{
    themeIcon.classList.remove("bi-moon-stars-fill");
    themeIcon.classList.add("bi-sun");

    document.documentElement.style.setProperty("--body-background", "#303035");
    document.documentElement.style.setProperty("--font-color", "#fff");
    document.documentElement.style.setProperty("--body-background-lighter","#404045");
    document.documentElement.style.setProperty("--body-background-darker", "#202025");
    document.documentElement.style.setProperty("--theme-color", "#add8e6"); 
    
    setCookie('theme', 'dark', 365);
}

function setLight()
{
    themeIcon.classList.remove("bi-sun");
    themeIcon.classList.add("bi-moon-stars-fill");

    document.documentElement.style.setProperty("--body-background", "##FAFAFC");
    document.documentElement.style.setProperty("--font-color", "#303035");
    document.documentElement.style.setProperty("--body-background-lighter","#fff");
    document.documentElement.style.setProperty("--body-background-darker", "#DADADC");
    document.documentElement.style.setProperty("--theme-color", "#3b6e80");

    setCookie('theme', 'light', 365);
}

function setSavedTheme() {
    let theme = getCookie('theme');
    switch(theme){
        case 'dark':
            setDark();
            break;
        case 'light':
            setLight();
            break;
    }
}

function toggleTheme() {
    if (themeIcon.classList.contains("bi-sun")) {
        setLight();
    } else {
        setDark();
    }
}

export {toggleTheme, setSavedTheme};

