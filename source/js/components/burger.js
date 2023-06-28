import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";
import vars from "../_vars";

import {
  addCustomClass,
  toggleCustomClass,
  removeCustomClass,
  removeClassInArray,
} from "../functions/customFunctions";
const { sideMenus, overlay, burger, mobileMenu, items, navItems, catalogBtn, subMenus, desktopMenu, navMenu,
  navMenuBtn, asideMenu, asideMenuBtn, asideMenuClose, headerInner, mobileNavMenus } = vars;

  

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
    removeCustomClass(asideMenu);
    toggleCustomClass(mobileMenu, "active");
    toggleCustomClass(headerInner, "active");
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
  removeCustomClass(mobileMenu);
  removeCustomClass(headerInner);
  removeCustomClass(burger);
  removeCustomClass(overlay);
  removeClassInArray(sideMenus, 'active');
  removeClassInArray(mobileNavMenus, 'active');
  removeCustomClass(desktopMenu);
  removeCustomClass(catalogBtn);
  removeCustomClass(navMenu);
  removeCustomClass(navMenuBtn);
  enableScroll();
};

const hideAsideHandler = function (overlay, asideMenu, asideMenuBtn) {
  removeCustomClass(asideMenu);
  removeCustomClass(asideMenuBtn);
  removeCustomClass(overlay);
  enableScroll();
};

function mouseHover (item, link){
  item.addEventListener('mouseover', function(){
    addCustomClass(link, 'active');
   })
   item.addEventListener('mouseout', function(){
    removeCustomClass(link, 'active');
   })
}

function hiddenMenu (btn, menu, overlay, secondMenu, secondBtn){
  btn.addEventListener('click', function(e){
    e.preventDefault();
    if(secondMenu.classList.contains('active')){
      removeCustomClass(secondMenu, 'active');
      removeCustomClass(secondBtn, 'active');
      removeCustomClass(overlay, 'active');
    }
    toggleCustomClass(btn, 'active');
    toggleCustomClass(menu, 'active');
    toggleCustomClass(overlay, "active");
   })
 }

if (burger) {
  navItems.map(function(navItem){
    const navLink = navItem.querySelector(".nav-list__link");
    const mobileNavMenu = navItem.querySelector(".mobile-nav__wrapp");
    const hideNavMenu = navItem.querySelector(".mobile-nav__back");

    if(mobileNavMenu){
      navLink.addEventListener('click', function(e){
        e.preventDefault();
        addCustomClass(mobileNavMenu, 'active');
      })

          hideNavMenu.addEventListener("click", function (e) {
          e.preventDefault();
          removeCustomClass(mobileNavMenu, "active");
        });
    
    }
  })

  items.map(function (item) {
    const linkItem = item.querySelector(".mobile-nav__link");
    const sideMenu = item.querySelector(".side-menu");
    const hideSideMenu = item.querySelector(".side-menu__back");
    if(sideMenu){
      linkItem.addEventListener("click", function (e) {
        e.preventDefault();
        addCustomClass(sideMenu, "active");    
      });
    }
   

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

    const dekstopItems = document.querySelectorAll('.desktop-menu__item');
    dekstopItems.forEach(function(item){
     const link = item.querySelector('.desktop-menu__link');
     const menu = item.querySelector('.side-menu');
     if(menu){
      mouseHover(menu, link);

     document.querySelectorAll('.side-menu__link').forEach(function(item){
      const parrentMenu = item.parentNode.querySelector('.sub-menu');

      mouseHover(parrentMenu, item);
     });
     }
     
    });

   

    if(hideSideMenu){
      hideSideMenu.addEventListener("click", function (e) {
        e.preventDefault();
        removeCustomClass(sideMenu, "active");
      });
    }
  });
}

 

 hiddenMenu(catalogBtn, desktopMenu, overlay, navMenu, navMenuBtn);
 hiddenMenu(navMenuBtn, navMenu, overlay, desktopMenu, catalogBtn);

if (overlay) {
  mobileMenuHandler(overlay, mobileMenu, burger);
  overlay.addEventListener("click", function (e) {
    if (e.target.classList.contains("overlay")) {
      hideMenuHandler(overlay, mobileMenu, burger);
    }
  });
}

if(overlay && asideMenu){
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