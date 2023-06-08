export default {
  activeMode: 'active--mode',
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  overlay: document.querySelector('[data-overlay]'),
  noveltiesSlider: document.querySelector('.novelties-slider'),
  examplesSlider: document.querySelector('.examples-slider'),
  defaultSliders: [...document.querySelectorAll('.default-slider')],
  videos: [...document.querySelectorAll("[data-video]")],



  accParrent: [...document.querySelectorAll("[data-accordion-init]")],
  // selectParrent: [...document.querySelectorAll("[data-select]")],
  tabsParrents: [...document.querySelectorAll("[data-tabs-parrent]")],
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsButton: [...document.querySelectorAll("[data-btn-modal]")],
  modalsButtonMode: [...document.querySelectorAll("[data-mode-modal]")],
  innerButtonModal: [...document.querySelectorAll("[data-btn-inner]")],
  // customSelect: [...document.querySelectorAll("[data-select]")],
  burger: document.querySelector('.header .burger'),
  mobileBurger: document.querySelector('.mobile-menu .burger'),
  // mobileMenu: document.querySelector('.header-box__nav'),
  select: document.querySelectorAll('.select'),
  // passForm: [...document.querySelector('.main-form')],

  header: document.querySelector("header"),
  game: document.getElementById('game'),
 
  programBox: document.querySelector('.program-section__sliders'),
  triggerSocial: document.querySelector('.trigger-social'),
  closeSocial: document.querySelector('.header-social__close'),
  headerSocial: document.querySelector('.header-social'),
  newsInner: document.querySelector('.news-section__inner'),
  mainLinks: [...document.querySelectorAll('.main-nav__link')],
  observerSectons: [...document.querySelectorAll('.observer-sec')],




  // default variables
  passForm: [...document.querySelectorAll('.password-form__label')],
  footerLabel: document.querySelector('.footer__label'),
  footer: document.querySelector('.footer'),
  parrentBuffer: [...document.querySelectorAll('.buffer')],
  hiddenList: document.querySelector('.hidden-list'),
  mobileMenu: document.querySelector('.mobile-menu'),





  // logoSlider: [...document.querySelectorAll('.payment-slider .swiper-container')],
  // mainLinks: [...document.querySelectorAll('.main-nav__link')],
  // observSections: [...document.querySelectorAll('.section-observe')],
  // formsSecond: '.contacts-section__form',
  // formsFirst: '.contact-section__form',
}





