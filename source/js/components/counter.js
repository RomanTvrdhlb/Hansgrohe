import vars from "../_vars";

const { btnMinus, btnPlus } = vars;

for (const btn of btnPlus) {
  btn.onclick = function () {
    const myForm = this.parentElement
    const myInput = myForm.querySelector('input');
    myInput.stepUp();
  };
}

for (const btn of btnMinus) {
  btn.onclick = function () {
    const myForm = this.parentElement
    const myInput = myForm.querySelector('input');
    myInput.stepDown();
  };
}
