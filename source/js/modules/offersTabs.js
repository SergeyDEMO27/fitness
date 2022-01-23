const buttonsList = document.querySelector(".offers__time");
const buttonsContainers = document.querySelectorAll(".offers__time-item");
const buttonsContainersArray = [...buttonsContainers];
const buttons = document.querySelectorAll(".offers__time-item>button");
const tabs = document.querySelectorAll(".offers__price-list-item");

const tabsSwitcher = () => {
  buttonsList.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") {
      return;
    }
    const activesButtonIndex = [...buttons].indexOf(event.target);
    tabs.forEach((tab, index) => {
      if (index === activesButtonIndex) {
        tab.className = "offers__price-list-item offers__price-item--active";
        buttonsContainersArray[index].className =
          "offers__time-item offers__time-item-active";
      } else {
        tab.className = "offers__price-list-item";
        buttonsContainersArray[index].className = "offers__time-item";
      }
    });
  });
};

export default tabsSwitcher;
