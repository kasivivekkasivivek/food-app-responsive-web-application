/*show menu and toggle between cross mark and hamburger menu*/
let navToggle = document.getElementById("navToggle");
let navItems = document.getElementById("navItems");
let closeMenu = document.getElementById("closeMenu");
let burgerMenu = document.getElementById('burgerMenu');
let headerContainerEle = document.getElementById("headerContainerEle");
navToggle.addEventListener('click', () => {
    navItems.classList.toggle('show_menu');
    burgerMenu.classList.toggle("d-none");
    closeMenu.classList.toggle("d-none");
    headerContainerEle.classList.remove("header-box");
})

// when on mobile view Tasty is clicked then drop down menu should close 
let navLogoEle = document.getElementById("navLogoEle");
navLogoEle.addEventListener('click', () => {
    navItems.classList.remove('show_menu');
    closeMenu.classList.add("d-none");
    burgerMenu.classList.remove("d-none");
})

// when on mobile view on clicking any of the menu item drop doen list should close.
let navLinkAbout = document.getElementById("navLinkAbout");
let navLinkHome = document.getElementById("navLinkHome");
let navLinkServices = document.getElementById("navLinkServices");
let navLinkMenu = document.getElementById("navLinkMenu");
let navLinkContact = document.getElementById("navLinkContact");
navLinkAbout.addEventListener('click', () => {
    navItems.classList.remove('show_menu');
    closeMenu.classList.add("d-none");
    burgerMenu.classList.remove("d-none");
})
navLinkHome.addEventListener('click', () => {
    navItems.classList.remove('show_menu');
    closeMenu.classList.add("d-none");
    burgerMenu.classList.remove("d-none");
})
navLinkServices.addEventListener('click', () => {
    navItems.classList.remove('show_menu');
    closeMenu.classList.add("d-none");
    burgerMenu.classList.remove("d-none");
})
navLinkMenu.addEventListener('click', () => {
    navItems.classList.remove('show_menu');
    closeMenu.classList.add("d-none");
    burgerMenu.classList.remove("d-none");
})
navLinkContact.addEventListener('click', () => {
    navItems.classList.remove('show_menu');
    closeMenu.classList.add("d-none");
    burgerMenu.classList.remove("d-none");
})

//color of the active link is different 
navLinkHome.addEventListener('click', () => {
    navLinkHome.classList.add('active-link');
    navLinkAbout.classList.remove('active-link');
    navLinkServices.classList.remove('active-link');
    navLinkMenu.classList.remove('active-link');
    navLinkContact.classList.remove('active-link');
})
navLinkAbout.addEventListener('click', () => {
    navLinkHome.classList.remove('active-link');
    navLinkAbout.classList.add('active-link');
    navLinkServices.classList.remove('active-link');
    navLinkMenu.classList.remove('active-link');
    navLinkContact.classList.remove('active-link');
})
navLinkServices.addEventListener('click', () => {
    navLinkHome.classList.remove('active-link');
    navLinkAbout.classList.remove('active-link');
    navLinkServices.classList.add('active-link');
    navLinkMenu.classList.remove('active-link');
    navLinkContact.classList.remove('active-link');
})
navLinkMenu.addEventListener('click', () => {
    navLinkHome.classList.remove('active-link');
    navLinkAbout.classList.remove('active-link');
    navLinkServices.classList.remove('active-link');
    navLinkMenu.classList.add('active-link');
    navLinkContact.classList.remove('active-link');
})
navLinkContact.addEventListener('click', () => {
    navLinkHome.classList.remove('active-link');
    navLinkAbout.classList.remove('active-link');
    navLinkServices.classList.remove('active-link');
    navLinkMenu.classList.remove('active-link');
    navLinkContact.classList.add('active-link');
})
// on click logo change select menu to Home
navLogoEle.addEventListener('click', () => {
    navLinkHome.classList.add('active-link');
    navLinkAbout.classList.remove('active-link');
    navLinkServices.classList.remove('active-link');
    navLinkMenu.classList.remove('active-link');
    navLinkContact.classList.remove('active-link');
})


scrollHeader = () => {
    let headerContainerEle = document.getElementById("headerContainerEle");
    if (this.scrollY >= 200) {
        headerContainerEle.classList.add("header-box");
    } else {
        headerContainerEle.classList.remove("header-box");
    }
}

window.addEventListener('scroll', scrollHeader);
//console.log(window.scrollY)

// show scroll to navigate to top 
scrollToTop = () => {
    let scrollTopEle = document.getElementById("scrollTopEle");
    if (this.scrollY >= 200) {
        scrollTopEle.classList.add('show_scroll');
    } else {
        scrollTopEle.classList.remove('show_scroll');
    }
}
window.addEventListener('scroll', scrollToTop);

// functionalities of theme changes 
let changeThemeEle = document.getElementById("changeThemeEle");
changeThemeEle.addEventListener('click', () => {
    navItems.classList.remove('show_menu');
    closeMenu.classList.add("d-none");
    burgerMenu.classList.remove("d-none");
})
