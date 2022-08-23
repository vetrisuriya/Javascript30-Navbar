let productMenu = document.getElementById("product-menu");

productMenu.addEventListener("click", function() {
    let subMenu = this.parentElement.getElementsByTagName("ul");
    
    if(subMenu[0].hasAttribute("class")) {
        subMenu[0].removeAttribute("class");
    } else {
        subMenu[0].setAttribute("class", "displayNone");
    }
})

// mobile script
let mobileNavBtn = document.getElementById("mobile-nav-btn");
mobileNavBtn.addEventListener("click", function() {
    let mobileNav = document.getElementById("mobile-nav");
    
    if(mobileNav.hasAttribute("class")) {
        mobileNav.removeAttribute("class");
    } else {
        mobileNav.setAttribute("class", "displayNone");
    }
})

let mobileProductMenu = document.getElementById("mobile-product-menu");
mobileProductMenu.addEventListener("click", function() {
    let subMenu = this.parentElement.getElementsByTagName("ul");
    
    if(subMenu[0].hasAttribute("class")) {
        subMenu[0].removeAttribute("class");
    } else {
        subMenu[0].setAttribute("class", "displayNone");
    }
})

let closeProductMenu = document.getElementById("close-product-menu");
closeProductMenu.addEventListener("click", function() {
    let subMenu = this.closest("ul");
    
    if(subMenu.hasAttribute("class")) {
        subMenu.removeAttribute("class");
    } else {
        subMenu.setAttribute("class", "displayNone");
    }
})