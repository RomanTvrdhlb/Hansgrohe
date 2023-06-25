import vars from "../_vars";

import {
  addCustomClass,
  removeCustomClass,
} from "../functions/customFunctions";

const { orderBox, order, orderBtns, backBtn } = vars;

if (orderBox && order) {
  orderBtns.forEach(function (orderBtn) {
    orderBtn.addEventListener("click", function (e) {
      e.preventDefault();
      blocksHandler(order, orderBox);
    });
  });

  backBtn.addEventListener("click", function (e) {
    e.preventDefault();

    blocksHandler(orderBox, order);
  });
}

function blocksHandler(hideBlock, showBlock) {
  removeCustomClass(hideBlock, "hide");
  addCustomClass(hideBlock, "show");
  removeCustomClass(showBlock, "show");
  addCustomClass(showBlock, "hide");
}
