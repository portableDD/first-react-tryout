let toggleMenu= document.querySelector(".toggle-menu");
let hideToggleMenu= document.querySelector(".hide-toggle-menu");
let navMenu = document.querySelector(".site-menu");
let sideMenu = document.querySelector(".side-menu")

toggleMenu.addEventListener("click", function() {
    if (sideMenu.style.visibility == 'visible') {
        navMenu.style.opacity = "0";
        navMenu.style.zIndex = "-1";
        sideMenu.style.visibility = 'hidden';
    } else {
        navMenu.style.opacity = "1";
        navMenu.style.zIndex = "9999";
        sideMenu.style.visibility = 'visible';
    }
    
});

hideToggleMenu.addEventListener("click", function() {
    if (sideMenu.style.visibility == 'visible') {
        navMenu.style.opacity = "0";
        navMenu.style.zIndex = "-1";
        sideMenu.style.visibility = 'hidden';
    }
    
});

navMenu.addEventListener("click",function() {
    navMenu.style.opacity = "0";
    navMenu.style.zIndex = "-2000"
});



