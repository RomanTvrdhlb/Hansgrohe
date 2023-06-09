import {
  removeClassInArray,
  addCustomClass,
} from "../functions/customFunctions";
import vars from "../_vars";

const { tabsParrents } = vars;

// --------------- tabs custom function --------------- //
const tabsFunction = function (
  tabsDataInitArray,
  tabsNavAttr,
  tabsContentAttr,
  active = "active"
) {
  tabsDataInitArray &&
    tabsDataInitArray.map((tabParent) => {
      if (tabParent) {
        const tabNav = [...tabParent.querySelectorAll(`[${tabsNavAttr}]`)];
        const tabContent = [
          ...tabParent.querySelectorAll(`[${tabsContentAttr}]`),
        ];

        tabNav.map((nav) => {
          nav.addEventListener("click", (e) => {
            e.preventDefault();
            const activeTabAttr = e.target.getAttribute(`${tabsNavAttr}`);
            removeClassInArray(tabNav, active);
            removeClassInArray(tabContent, active);
            addCustomClass(
              tabParent.querySelector(`[${tabsNavAttr}="${activeTabAttr}"]`),
              active
            );
            addCustomClass(
              tabParent.querySelector(
                `[${tabsContentAttr}="${activeTabAttr}"]`
              ),
              active
            );
          });
        });
      }
    });
};


tabsFunction(tabsParrents, "data-tab", "data-tab-content");
tabsFunction(tabsParrents, "data-info-tab", "data-info-content");
tabsFunction(tabsParrents, "data-pay-tab", "data-pay-content");
tabsFunction(tabsParrents, "data-blog-tab", "data-blog-content");
tabsFunction(tabsParrents, "data-personal-tab", "data-personal-content");
tabsFunction(tabsParrents, "data-comparison-tab", "data-comparison-content");
tabsFunction(tabsParrents, "data-techno-tab", "data-techno-content");
tabsFunction(tabsParrents, "data-jet-tab", "data-jet-content");
