
function mobileNavMenu() {
    var menu = document.getElementById("nav__mobile")

    if(menu.style.display == "block") {
        menu.style.display =="none"
    } else {
        menu.style.display = "block"
    };
}

function mobileNavClose() {
    var menu = document.getElementById("nav__mobile")

    if(menu.style.display == "none") {
        menu.style.display =="block"
    } else {
        menu.style.display = "none"
    };
}