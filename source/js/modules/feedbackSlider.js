const buttonLeft = document.querySelector('.feedback__button-prev');
const buttonRight = document.querySelector('.feedback__button-next');
const slidesContainer = document.querySelector('.feedback__list');

const state = {
  activeSliderIndex: 0,
  commentSlides: [
    {
      images: {
        png1: './img/content/orlova.png',
      },
      title: 'Анна Орлова',
      description:
        '«Хожу в SuperClub уже больше года. Нравится, что в клубе всегда чисто, тренажеры обновляют, персонал дружелюбный. Зал просторный, даже в вечернее время нет очередей»',
    },
    {
      images: {
        png1: './img/content/orlova.png',
      },
      title: 'Елена Ежова',
      description:
        '«Бегаю в SuperClub уже больше двух лет. Очень нравится, что в клубе всегда  очень чисто, тренажеры обновляют, персонал крайне дружелюбный. Зал просторный, даже в вечернее время нет очередей и толпучки»',
    },
    {
      images: {
        png1: './img/content/orlova.png',
      },
      title: 'Ирина Рыбкина',
      description:
        '«Приезжаю в SuperClub уже больше десяти лет. Не нравится, что в клубе не всегда чисто, тренажеры не обновляют, персонал не дружелюбный. Зал не просторный, даже в вечернее время много очередей и толпучки»',
    }
  ],
};

const renderSlider = () => {
  const {activeSliderIndex, commentSlides} = state;
  createCommentSlider(commentSlides[activeSliderIndex]);
};

const createCommentSlider = ({images, title, description}) => {
  const itemContainer = document.createElement('LI');
  itemContainer.classList.add('feedback__comment');
  const imgContainer = document.createElement('PICTURE');
  const image = document.createElement('IMG');
  image.classList.add('feedback__comment-image');
  image.src = images.png1;
  imgContainer.append(image);
  const commentContainer = document.createElement('DIV');
  commentContainer.classList.add('feedback__comment-wrapper');
  const itemTitle = document.createElement('P');
  itemTitle.classList.add('feedback__comment-title');
  itemTitle.textContent = title;
  commentContainer.append(itemTitle);
  const itemDescription = document.createElement('P');
  itemDescription.classList.add('feedback__comment-description');
  itemDescription.textContent = description;
  commentContainer.append(itemDescription);
  itemContainer.append(imgContainer);
  itemContainer.append(commentContainer);
  slidesContainer.append(itemContainer);
};

const feedBackSlider = () => {
  buttonLeft.addEventListener('click', () => {
    slidesContainer.innerHTML = '';
    const newActiveSliderIndex =
      state.activeSliderIndex - 1 < 0
        ? state.commentSlides.length - 1
        : state.activeSliderIndex - 1;
    state.activeSliderIndex = newActiveSliderIndex;
    renderSlider();
  });

  buttonRight.addEventListener('click', () => {
    slidesContainer.innerHTML = '';
    const newActiveSliderIndex =
      state.activeSliderIndex + 1 > state.commentSlides.length - 1
        ? 0
        : state.activeSliderIndex + 1;
    state.activeSliderIndex = newActiveSliderIndex;
    renderSlider();
  });
};

renderSlider();

export default feedBackSlider;
