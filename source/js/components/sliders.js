import Swiper from "../vendor/swiper";
import vars from "../_vars";
import { throttle } from "../functions/throttle";
import { even } from "../functions/customFunctions";

import {
  addCustomClass
} from "../functions/customFunctions";

const { noveltiesSlider, examplesSlider, defaultSliders, singleSliders, defaultPaginations } = vars;

if(noveltiesSlider){
  const pagination = noveltiesSlider.querySelector('.novelties-slider__pagination');
  const noveltiesSlides = noveltiesSlider.querySelectorAll('.swiper-slide');
  const noveltiesContainer = noveltiesSlider.querySelector('.swiper-container');
  
  pagination.setAttribute('data-slides', noveltiesSlides.length);
  pagination.setAttribute('data-active', '1');

  const noveltiesSwiper = new Swiper(noveltiesContainer, {
  slidesPerView: 1,
  spaceBetween: 0,
  observer: true,
  observeParents: true,
  direction: 'vertical',

  navigation: {
    nextEl: '.novelties-slider__next',
    prevEl: '.novelties-slider__prev',
  },

  pagination: {
    el: '.novelties-slider__pagination',
    type: "bullets",
    clickable: true,
  },

  on: {
    slideChange: () => {
      pagination.setAttribute('data-active', noveltiesSwiper.realIndex+1);
    } 
  }

});
}

if(examplesSlider){
  const pagination = examplesSlider.querySelector('.examples-slider__pagination');
  const examlesSlides = examplesSlider.querySelectorAll('.swiper-slide');
  const examlesContainer = examplesSlider.querySelector('.swiper-container');
  
  pagination.setAttribute('data-slides', examlesSlides.length);
  pagination.setAttribute('data-active', '1');

  const examlesSwiper = new Swiper(examlesContainer, {
    slidesPerView: 1,
    spaceBetween: 10,
    observer: true,
    observeParents: true,
  
    navigation: {
      nextEl: '.examples-slider__next',
      prevEl: '.examples-slider__prev',
    },
  
    pagination: {
      el: '.examples-slider__pagination',
      type: "bullets",
      clickable: true,
    },

    on: {
      slideChange: () => {
        pagination.setAttribute('data-active', examlesSwiper.realIndex+1);
      } 
    }
  });
  }

if(defaultSliders){

   defaultSliders.map(function(defaultSlider){
      const pagination = defaultSlider.querySelector('.default-slider__pagination');
      const defaultSlides = defaultSlider.querySelectorAll('.swiper-slide');
      const defaultContainer = defaultSlider.querySelector('.swiper-container');
      const defaultNext = defaultSlider.querySelector('.default-slider__next');
      const defaultPrev = defaultSlider.querySelector('.default-slider__prev');
      pagination.setAttribute('data-slides', defaultSlides.length);
      pagination.setAttribute('data-active', '1');

      const defaultSwiper = new Swiper(defaultContainer, {
        slidesPerView: 1,
        spaceBetween: 10,
        observer: true,
        observeParents: true,
      
        navigation: {
          nextEl: defaultNext,
          prevEl: defaultPrev,
        },
      
        pagination: {
          el: pagination,
          type: "bullets",
        },
    
        on: {
          slideChange: () => {
            pagination.setAttribute('data-active', defaultSwiper.realIndex+1);
          } 
        }
      });
   })
}

if(singleSliders){

  singleSliders.map(function(singleSlider){
    
    const pagination = singleSlider.querySelector('.single-slider__pagination');
    const singleSlides = singleSlider.querySelectorAll('.swiper-slide');
    const singleContainer = singleSlider.querySelector('.swiper-container');

    pagination.setAttribute('data-slides', singleSlides.length);
    pagination.setAttribute('data-active', '1');

    const singleSwiper = new Swiper(singleContainer, {
      slidesPerView: 'auto',
      spaceBetween: 10,
      observer: true,
      observeParents: true,
    
      navigation: {
        nextEl: '.single-slider__next',
        prevEl: '.single-slider__prev',
      },
    
      pagination: {
        el: '.single-slider__pagination',
        type: "bullets",
      },

      // breakpoints: {
      //   // mobile - 320-576px
      //   300: {
      //     spaceBetween:10,
      //   },
      //   576: {
      //     spaceBetween:20,
      //   },
      //   // tablet - 576-2560px
      //   768: {
      //     spaceBetween: 10,
      //   },
      // },
  
      on: {
        slideChange: () => {
          pagination.setAttribute('data-active', singleSwiper.realIndex+1);
        } 
      }
    });
  })
}


defaultPaginations.forEach(function(pagination){
  if(pagination.querySelectorAll('.swiper-pagination-bullet').length > 3){
    addCustomClass(pagination, 'mode');
  }
})




