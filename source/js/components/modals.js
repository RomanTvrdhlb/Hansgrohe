import vars from "../_vars";
import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";
import {
  removeClassInArray,
  addCustomClass,
  removeCustomClass,
  toggleCustomClass,
} from "../functions/customFunctions";
import { data } from "autoprefixer";

export function modalClickHandler(attribute, activeClass) {
  const curentModal = overlay.querySelector(`[data-popup="${attribute}"]`);
  removeClassInArray(modals, activeClass);
  addCustomClass(overlay, activeMode);
  addCustomClass(curentModal, activeClass);
  disableScroll();
  innerButton = overlay.querySelector(
    `${"[data-popup]"}.${activeClass} .close`
  );
}

const {
  overlay,
  activeClass,
  modalsButton,
  modalsButtonMode,
  modals,
  innerButtonModal,
  activeMode,
  mainContacts,
  mainContactsBtns,
  hiddenBtns,
  hiddenWrapper,
  hiddenModal
} = vars;
let innerButton;
const commonFunction = function () {
  removeCustomClass(overlay, activeMode);
  removeCustomClass(overlay, activeClass);
  removeClassInArray(modals, activeClass);
  enableScroll();
};

function buttonClickHandler(e, buttonAttribute, activeClass) {
  e.preventDefault();
  const currentModalId = e.target.getAttribute(`${buttonAttribute}`);
  const curentModal = overlay.querySelector(`[data-popup="${currentModalId}"]`);

  removeClassInArray(modals, activeClass);
  addCustomClass(overlay, activeClass);
  addCustomClass(curentModal, activeClass);
  disableScroll();
  innerButton = overlay.querySelector(
    `${"[data-popup]"}.${activeClass} .close`
  );
}

function overlayClickHandler(e, activeClass) {
  if (e.target === overlay || e.target === innerButton) commonFunction();
}

function modalInit(buttonsArray, buttonAttribute, activeClass) {
  buttonsArray.map(function (btn) {
    btn.addEventListener("click", (e) =>
      buttonClickHandler(e, buttonAttribute, activeClass)
    );
  });
}

overlay &&
  overlay.addEventListener("click", function (e) {
    overlayClickHandler(e, activeClass);
  });
modalInit(modalsButton, "data-btn-modal", activeClass);

innerButtonModal &&
  innerButtonModal.map(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const currentModalId = e.target.getAttribute("data-btn-inner");
      const curentModal = overlay.querySelector(
        `[data-popup="${currentModalId}"]`
      );
      removeClassInArray(modals, activeClass);
      addCustomClass(overlay, activeClass);
      addCustomClass(overlay, activeMode);
      addCustomClass(curentModal, activeClass);
      disableScroll();
      innerButton = overlay.querySelector(
        `${"[data-popup]"}.${activeClass} .close`
      );
    });
  });

modalsButtonMode &&
  modalsButtonMode.map(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const currentModalId = e.target.getAttribute("data-mode-modal");
      const curentModal = overlay.querySelector(
        `[data-popup="${currentModalId}"]`
      );
      removeClassInArray(modals, activeClass);
      addCustomClass(overlay, activeClass);
      addCustomClass(overlay, activeMode);
      addCustomClass(curentModal, activeClass);
      innerButton = overlay.querySelector(
        `${"[data-popup]"}.${activeClass} .close`
      );
      disableScroll();
    });
  });


  mainContacts.map(function(mainContact){
    mainContactsBtns.map(function(btn){
      btn.addEventListener('click', function(e){
        e.preventDefault();
        toggleCustomClass(mainContact, activeClass);
      })
    })
  })

 
  function hiddenInit() {
    hiddenBtns.map(function(btn){
      btn.addEventListener('click', function(e){
        e.preventDefault();
        addCustomClass(hiddenWrapper, activeClass);
        addCustomClass(hiddenModal, activeClass);

        const closeBtn = hiddenModal.querySelector('.modal__close');

        closeBtn.addEventListener('click', function(){
          removeCustomClass(hiddenWrapper, activeClass);
          removeCustomClass(hiddenModal, activeClass);
        })
        setTimeout(() => {
          removeCustomClass(hiddenWrapper, activeClass);
          removeCustomClass(hiddenModal, activeClass);
        }, 30000);
      })
    })
  }

  if(hiddenWrapper){
    hiddenInit();
  }


// function hiddenInit() {
//   hiddenBtn.addEventListener("click", function (e) {
//     e.preventDefault;
//     addCustomClass(hiddenWrapper, activeClass);

//     setTimeout(() => {
//       removeCustomClass(hiddenWrapper, activeClass);
//     }, 4000);

//     const modals = [...hiddenWrapper.querySelectorAll(".modal-status")];

//     modals.map(function (modal) {
//       modal.querySelector(".close").addEventListener("click", function () {
//         removeCustomClass(hiddenWrapper, activeClass);
//       });
//     });
//   });
// }

// if (hiddenWrapper) {
//   hiddenInit("active");
// }