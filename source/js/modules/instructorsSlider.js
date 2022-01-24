const buttonLeft = document.querySelector(".instructors__button--prev");
const buttonRight = document.querySelector(".instructors__button--next");
const slidesContainer = document.querySelector(".instructors__list");

const state = {
  activeSlidesArr: [0, 1, 2, 3],
  instructors: [
    {
      title: "Анна Павлова",
      imagePath: "./img/content/instructors-pavlova-1x.png",
      descriptionTitle: "CrossFit",
      description: [
        "Certified Level 1 Trainer",
        "Победитель чемпионата Англии по CrossFit",
        "Опыт — 4 года",
      ],
    },
    {
      title: "Алексей Лавров",
      imagePath: "./img/content/instructors-lavrov-1x.png",
      descriptionTitle: "CrossFit",
      description: [
        "Certified Level 2 Trainer",
        "Победитель чемпионата Франции по CrossFit",
        "Опыт — 5 лет",
      ],
    },
    {
      title: "Александр Пашков",
      imagePath: "./img/content/instructors-pashkov-1x.png",
      descriptionTitle: "CrossFit",
      description: [
        "Certified Level 3 Trainer",
        "Победитель чемпионата России по CrossFit",
        "Опыт — 6 лет",
      ],
    },
    {
      title: "Мария Кетова",
      imagePath: "./img/content/instructors-ketova-1x.png",
      descriptionTitle: "CrossFit",
      description: [
        "Certified Level 4 Trainer",
        "Победитель чемпионата США по CrossFit",
        "Опыт — 7 лет",
      ],
    },
    {
      title: "Анна Павлова 2",
      imagePath: "./img/content/instructors-pavlova-1x.png",
      descriptionTitle: "CrossFit 2",
      description: [
        "Certified Level 1 Trainer",
        "Победитель чемпионата Англии по CrossFit",
        "Опыт — 4 года",
      ],
    },
    {
      title: "Алексей Лавров 2",
      imagePath: "./img/content/instructors-lavrov-1x.png",
      descriptionTitle: "CrossFit 2",
      description: [
        "Certified Level 2 Trainer",
        "Победитель чемпионата Франции по CrossFit",
        "Опыт — 5 лет",
      ],
    },
    {
      title: "Александр Пашков 2",
      imagePath: "./img/content/instructors-pashkov-1x.png",
      descriptionTitle: "CrossFit 2",
      description: [
        "Certified Level 3 Trainer",
        "Победитель чемпионата России по CrossFit",
        "Опыт — 6 лет",
      ],
    },
    {
      title: "Мария Кетова 2",
      imagePath: "./img/content/instructors-ketova-1x.png",
      descriptionTitle: "CrossFit 2",
      description: [
        "Certified Level 4 Trainer",
        "Победитель чемпионата США по CrossFit",
        "Опыт — 7 лет",
      ],
    },
  ],
};

if (window.matchMedia("(max-width: 1199px)").matches) {
  state.activeSlidesArr = [0, 1];
}

if (window.matchMedia("(max-width: 767px)").matches) {
  state.activeSlidesArr = [0];
}

const renderSliders = () => {
  state.activeSlidesArr.forEach((index) => {
    const { title, imagePath, descriptionTitle, description } =
      state.instructors[index];
    createSlide(title, imagePath, descriptionTitle, description);
  });
};

const instructorsSlider = () => {
  buttonRight.addEventListener("click", () => {
    slidesContainer.innerHTML = "";
    let active = [];

    for (let i = 0; i < state.activeSlidesArr.length; i += 1) {
      if (state.activeSlidesArr[i] + 1 > state.instructors.length - 1) {
        active.push(0);
      } else {
        active.push(state.activeSlidesArr[i] + 1);
      }
    }
    state.activeSlidesArr = active;

    renderSliders();
  });

  buttonLeft.addEventListener("click", () => {
    slidesContainer.innerHTML = "";
    let active = [];

    for (let i = 0; i < 4; i += 1) {
      if (state.activeSlidesArr[i] - 1 < 0) {
        active.push(state.instructors.length - 1);
      } else {
        active.push(state.activeSlidesArr[i] - 1);
      }
    }
    state.activeSlidesArr = active;

    renderSliders();
  });
};

const createSlide = (title, imagePath, descriptionTitle, description) => {
  const elementContainer = document.createElement("LI");
  elementContainer.classList.add("instructors__item");
  const elementLink = document.createElement("A");
  elementLink.classList.add("instructors__item-link");
  elementLink.href = "#";
  const elementTitle = document.createElement("H3");
  elementTitle.classList.add("instructors__item-title");
  elementTitle.textContent = title;
  elementLink.append(elementTitle);
  const elementImage = document.createElement("IMG");
  elementImage.classList.add("instructors__item-image");
  elementImage.src = imagePath;
  elementLink.append(elementImage);
  const elementDescriptionContainer = document.createElement("DIV");
  elementDescriptionContainer.classList.add("instructors__item-description");
  const elementDescriptionTitle = document.createElement("H4");
  elementDescriptionTitle.classList.add("instructors__item-description-title");
  elementDescriptionTitle.textContent = descriptionTitle;
  const elementDescriptionList = document.createElement("UL");
  elementDescriptionList.classList.add("instructors__item-description-list");

  description.forEach((item) => {
    const descriptionItem = document.createElement("LI");
    descriptionItem.classList.add("instructors__item-description-item");
    descriptionItem.textContent = item;
    elementDescriptionList.append(descriptionItem);
  });

  elementDescriptionContainer.append(elementDescriptionTitle);
  elementDescriptionContainer.append(elementDescriptionList);
  elementLink.append(elementDescriptionContainer);
  elementContainer.append(elementLink);
  slidesContainer.append(elementContainer);
};

renderSliders();

export default instructorsSlider;
