import vars from "../_vars";
import {
  removeClassInArray,
  addCustomClass,
  removeCustomClass,
} from "../functions/customFunctions";
const { activeClass } = vars;

const passForm = [...document.querySelectorAll(".main-form")];

passForm.map((item) => {
  const input = item.querySelector(".main-form__password");
  const showBtn = item.querySelector(".main-form__show");
  const formItems = item.querySelectorAll(".main-form__item");

  formItems.forEach(function (formItem) {
    const clearBtn = formItem.querySelector(".main-form__clear");
    const currentInput = formItem.querySelector(".main-form__input");
    
    if(clearBtn){
      currentInput.addEventListener("keydown", function () {
        currentInput.value != "" ? addCustomClass(clearBtn, activeClass) : "";
      });
      
      clearBtn.addEventListener("click", function (e) {
        e.preventDefault();
        currentInput.value = "";
        removeCustomClass(clearBtn, activeClass);
      });
    }
  });

  showBtn &&
    showBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (input.getAttribute("type") == "password") {
        this.classList.add("view");
        input.setAttribute("type", "text");
      } else {
        this.classList.remove("view");
        input.setAttribute("type", "password");
      }
    });
});
