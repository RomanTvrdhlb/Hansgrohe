import vars from "../_vars";
import { throttle } from "../functions/throttle";

const {
 viewBtn, viewBtnParrent, viewBtnParrentMobile, blogBtn, blogBtnParrent, blogBtnParrentMobile,
 singleTitle, singleTitleParrent, singleTitleParrentMobile, favoritesParrents, downloadBtn, downloadBtnParrentMobile, downloadBtnParrent,
 orderBtn, orderBtnParrent, orderSum, numberCounter, numberCounterParrent, numberCounterParrentMob
} = vars;

const replaceElementsFunction = (
  element,
  parentDesktop,
  parentMobile,
  breakpoint,
  firstRule,
  lastRule
) => {
  let containerWidth = document.documentElement.clientWidth;

  if (element) {
    if (containerWidth <= `${breakpoint}`) {
      parentMobile.insertAdjacentElement(`${firstRule}`, element);
    }
    if (containerWidth > `${breakpoint}`) {
      parentDesktop.insertAdjacentElement(`${lastRule}`, element);
    }
  }
};

window.addEventListener("resize", () => {
  throttle(
    replaceElementsFunction(
      viewBtn,
      viewBtnParrent,
      viewBtnParrentMobile,
      576,
      "beforeend",
      "beforeend"
    )
  );
   throttle(
    replaceElementsFunction(
      blogBtn,
      blogBtnParrent,
      blogBtnParrentMobile,
      576,
      "beforeend",
      "beforeend"
    )
  );
  throttle(
    replaceElementsFunction(
      downloadBtn,
      downloadBtnParrent,
      downloadBtnParrentMobile,
      1024,
      "beforeend",
      "beforeend"
    )
  );
  throttle(
    replaceElementsFunction(
      orderBtn,
      orderBtnParrent,
      downloadBtnParrentMobile,
      1024,
      "beforeend",
      "beforeend"
    )
  );
  throttle(
    replaceElementsFunction(
      singleTitle,
      singleTitleParrent,
      singleTitleParrentMobile,
      767,
      "afterbegin",
      "afterbegin"
    )
  );
  // throttle(
  //   replaceElementsFunction(
  //     numberCounter,
  //     numberCounterParrent,
  //     numberCounterParrentMob,
  //     576,
  //   "beforeend",
  //   "beforeend"
  //   )
  // );
  // throttle(
  //   replaceElementsFunction(
  //     orderSum,
  //     numberCounterParrent,
  //     numberCounterParrentMob,
  //     576,
  //   "beforeend",
  //   "beforeend"
  //   )
  // );
});
window.addEventListener("DOMContentLoaded", () => {
  throttle(
    replaceElementsFunction(
      viewBtn,
      viewBtnParrent,
      viewBtnParrentMobile,
      576,
    "beforeend",
    "beforeend"
    )
  );
  // throttle(
  //   replaceElementsFunction(
  //     numberCounter,
  //     numberCounterParrent,
  //     numberCounterParrentMob,
  //     576,
  //   "beforeend",
  //   "beforeend"
  //   )
  // );
  // throttle(
  //   replaceElementsFunction(
  //     orderSum,
  //     numberCounterParrent,
  //     numberCounterParrentMob,
  //     576,
  //   "beforeend",
  //   "beforeend"
  //   )
  // );
  throttle(
    replaceElementsFunction(
      orderBtn,
      orderBtnParrent,
      downloadBtnParrentMobile,
      1024,
      "beforeend",
      "beforeend"
    )
  );
  throttle(
    replaceElementsFunction(
      downloadBtn,
      downloadBtnParrent,
      downloadBtnParrentMobile,
      1024,
      "beforeend",
      "beforeend"
    )
  );
  throttle(
    replaceElementsFunction(
      blogBtn,
      blogBtnParrent,
      blogBtnParrentMobile,
      576,
    "beforeend",
    "beforeend"
    )
  );
  throttle(
    replaceElementsFunction(
      singleTitle,
      singleTitleParrent,
      singleTitleParrentMobile,
      767,
    "afterbegin",
    "afterbegin"
    )
  );
});


favoritesParrents.map(function(parrent){
  const favoritesBoxs = [...parrent.querySelectorAll('.favorites-row__box')];

  favoritesBoxs.map(function(favoritesBox){
    const  favoritesSum = favoritesBox.querySelector('.favorites-row__sum');
     const favoritesSumMobile = favoritesBox.querySelector('.favorites-row__inner');

     window.addEventListener("resize", () => {
      throttle(
        replaceElementsFunction(
          favoritesSum,
          favoritesBox,
          favoritesSumMobile,
          768,
          "beforeend",
          "beforeend"
        )
      );
    });

    window.addEventListener("DOMContentLoaded", () => {
      throttle(
        replaceElementsFunction(
          favoritesSum,
          favoritesBox,
          favoritesSumMobile,
          768,
          "beforeend",
          "beforeend"
        )
      );
    });
  })
})


// 'beforebegin': перед самим элементом targetElement.
// 'afterbegin': внутри элемента targetElement, перед его первым потомком.
// 'beforeend': внутри элемента targetElement, после его последнего потомка.
// 'afterend': после самого элемента targetElement.
