import Swiper from "../vendor/swiper";
import vars from "../_vars";
import { throttle } from "../functions/throttle";
import { even } from "../functions/customFunctions";

const { noveltiesSlider, examplesSlider, defaultSliders } = vars;

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

      pagination.setAttribute('data-slides', defaultSlides.length);
      pagination.setAttribute('data-active', '1');

      const defaultSwiper = new Swiper(defaultContainer, {
        slidesPerView: 1,
        spaceBetween: 10,
        observer: true,
        observeParents: true,
      
        navigation: {
          nextEl: '.default-slider__next',
          prevEl: '.default-slider__prev',
        },
      
        pagination: {
          el: '.default-slider__pagination',
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

// if (newsInner) {
//   const newsSlider = newsInner.querySelector('.swiper-container');
//   const newsSliderPrev = newsInner.querySelector('.news-prev');
//   const newsSliderNext = newsInner.querySelector('.news-next');

//   new Swiper(newsSlider, {
//     slidesPerView: 3,
//     slidesPerColumn: 2,
//     slidesPerColumnFill: 'row',
//     spaceBetween: 20,
//     observer: true,
//     watchOverflow: true,
//     observeParents: true,

//     navigation: {
//       nextEl: newsSliderNext,
//       prevEl: newsSliderPrev,
//     }
//   });
// }

// new Swiper(mainSlider, {
//   slidesPerView: 'auto',
//   spaceBetween: 30,
//   loop: true,
//   observer: true,
//   initialSlide: 2,
//   watchOverflow: true,
//   centeredSlides: true,
//   observeParents: true,
//   allowTouchMove: false,
//   speed: 2000,
//   parallax: true,
//   autoplay: {
//     delay: 2000,
//   },
// });


// const navigationContent = [
//   {
//     name: 'Bonus 1',
//     descr: 'Connect Wallet',
//     class:'orange',
//     iconSrc: 'img/program-slider/icon.svg'
//   },
//   {
//     name: 'level 1',
//     descr: 'Bring your friends',
//     class:'purpure',
//     iconSrc: 'img/program-slider/icon2.svg'
//   },
//   {
//     name: 'level 2',
//     descr: "Get 5% from your friend's referral",
//     class:'red',
//     iconSrc: 'img/program-slider/icon3.svg'
//   },

// ]

// if (programBox) {
//   const mySwiper = new Swiper(programBox.querySelector('.program-slider'), {
//     slidesPerView: 'auto',
//     spaceBetween: 40,
//     loop: true,
//     observer: true,
//     watchOverflow: true,
//     observeParents: true,
//     allowTouchMove: true,
//     speed: 2500,
//     autoplay: {
//       delay: 3000,
//     },

//     pagination: {
//       el: '.program-slider__nav',
//       clickable: 'true',
//       type: 'bullets',
//       renderBullet: function (index, className) {
//           return `
//             <li class="${className}">
//               <button class="program-button ${navigationContent[index].class}">
//                 ${navigationContent[index].name}
//                 <img class="program-button__icon" src="${navigationContent[index].iconSrc}" alt="icon">
//                 <span class="program-button__descr">
//                   ${navigationContent[index].descr}
//                 </span>
//                 <i class="custom-icon custom-icon--nav program-button__stars"></i>
//               </button>
//             </li>
//           `;
//         },

//     },

//   });
// }




