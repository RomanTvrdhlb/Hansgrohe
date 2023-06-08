import vars from "../_vars";
import { throttle } from "../functions/throttle";

const {
 viewBtn, viewBtnParrent, viewBtnParrentMobile, blogBtn, blogBtnParrent, blogBtnParrentMobile
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
});

// 'beforebegin': перед самим элементом targetElement.
// 'afterbegin': внутри элемента targetElement, перед его первым потомком.
// 'beforeend': внутри элемента targetElement, после его последнего потомка.
// 'afterend': после самого элемента targetElement.
