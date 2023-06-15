import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";
import vars from "../_vars";

import {
  addCustomClass,
  toggleCustomClass,
  removeCustomClass,
  removeClassInArray,
} from "../functions/customFunctions";
const { sideMenus, overlay, burger, mobileMenu, items, catalogBtn, subMenus, desktopMenu, asideMenu, asideMenuBtn, asideMenuClose } = vars;

const asideMenuHandler = function (overlay, asideMenu, asideMenuBtn) {
  asideMenuBtn.addEventListener("click", function () {
    toggleCustomClass(asideMenu, "active");
    toggleCustomClass(asideMenuBtn, "active");
    toggleCustomClass(overlay, "active");
 
    if (asideMenuBtn.classList.contains("active")) {
      disableScroll();
    } else {
      enableScroll();
    }
  });
};

const mobileMenuHandler = function (overlay, mobileMenu, burger) {
  burger.addEventListener("click", function () {
    toggleCustomClass(mobileMenu, "active");
    toggleCustomClass(burger, "active");
    toggleCustomClass(overlay, "active");
    removeClassInArray(sideMenus, "active");

    if (burger.classList.contains("active")) {
      disableScroll();
    } else {
      enableScroll();
    }
  });
};

const hideMenuHandler = function (overlay, mobileMenu, burger) {
  removeCustomClass(mobileMenu, "active");
  removeCustomClass(burger, "active");
  removeCustomClass(overlay, "active");
  removeClassInArray(sideMenus, "active");
  removeCustomClass(desktopMenu, 'active');
  enableScroll();
};

const hideAsideHandler = function (overlay, asideMenu, asideMenuBtn) {
  removeCustomClass(asideMenu, "active");
  removeCustomClass(asideMenuBtn, "active");
  removeCustomClass(overlay, "active");
  enableScroll();
};


if (burger) {
  items.map(function (item) {
    const linkItem = item.querySelector(".mobile-nav__link");
    const sideMenu = item.querySelector(".side-menu");
    const hideSideMenu = item.querySelector(".side-menu__back");

    linkItem.addEventListener("click", function (e) {
      e.preventDefault();
      addCustomClass(sideMenu, "active");    
    });

    document.querySelectorAll('.side-menu__link').forEach(function(item){

      const parrentMenu = item.parentNode.querySelector('.sub-menu');
      item.addEventListener('click', function(e){
        e.preventDefault();
        addCustomClass(parrentMenu, 'active');
      })

      if(parrentMenu.querySelector('.sub-menu__back')){
        parrentMenu.querySelector('.sub-menu__back').addEventListener('click', function(e){
          e.preventDefault();
          removeCustomClass(parrentMenu, 'active');
        })
      }
    })

    if(hideSideMenu){
      hideSideMenu.addEventListener("click", function (e) {
        e.preventDefault();
        removeCustomClass(sideMenu, "active");
      });
    }
  });
}

 catalogBtn.addEventListener('click', function(e){
  e.preventDefault();
  toggleCustomClass(catalogBtn, 'active');
  toggleCustomClass(desktopMenu, 'active');
  toggleCustomClass(overlay, "active");
 })

if (overlay) {
  mobileMenuHandler(overlay, mobileMenu, burger);
  asideMenuHandler(overlay, asideMenu, asideMenuBtn);
  overlay.addEventListener("click", function (e) {
    if (e.target.classList.contains("overlay")) {
      hideMenuHandler(overlay, mobileMenu, burger);
      hideAsideHandler(overlay, asideMenu, asideMenuBtn);
    }
  });
}

if(asideMenuClose){

  asideMenuClose.addEventListener('click', function(e){
    e.preventDefault();
    hideAsideHandler(overlay, asideMenu, asideMenuBtn);
  })
}