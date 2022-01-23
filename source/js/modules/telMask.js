const telInput = document.querySelector('.free-lesson__input-tel');

const state = {
  prevLength: 0,
};

const telMaskHandler = () => {
  telInput.addEventListener('input', (e) => {
    console.log(e.target.value.length);
    if (e.target.value === '+7' || e.target.value.length === 3) {
      return (e.target.value = '+7(');
    }

    let regex = /[^0-9]+/g;

    if (
      e.target.value.length === 6 &&
      state.prevLength < e.target.value.length
    ) {
      e.target.value =
        e.target.value.slice(0, e.target.value.length - 1) +
        e.target.value[e.target.value.length - 1].replace(regex, '') +
        ')';
      state.prevLength = e.target.value.length;
      return;
    }

    if (
      e.target.value.length === 7 &&
      state.prevLength < e.target.value.length
    ) {
      e.target.value =
        e.target.value.slice(0, e.target.value.length - 1) +
        ')' +
        e.target.value[e.target.value.length - 1].replace(regex, '');
      state.prevLength = e.target.value.length;
      return;
    }

    if (
      (e.target.value.length === 10 &&
        state.prevLength < e.target.value.length) ||
      (e.target.value.length === 13 && state.prevLength < e.target.value.length)
    ) {
      e.target.value =
        e.target.value.slice(0, e.target.value.length - 1) +
        e.target.value[e.target.value.length - 1].replace(regex, '') +
        '-';
      state.prevLength = e.target.value.length;
      return;
    }

    if (
      (e.target.value.length === 11 &&
        state.prevLength < e.target.value.length) ||
      (e.target.value.length === 14 && state.prevLength < e.target.value.length)
    ) {
      e.target.value =
        e.target.value.slice(0, e.target.value.length - 1) +
        '-' +
        e.target.value[e.target.value.length - 1].replace(regex, '');
      state.prevLength = e.target.value.length;
      return;
    }

    e.target.value =
      e.target.value.slice(0, e.target.value.length - 1) +
      e.target.value[e.target.value.length - 1].replace(regex, '');
    state.prevLength = e.target.value.length;
  });

  telInput.addEventListener('focus', (e) => {
    if (e.target.value.length <= 3) {
      e.target.value = '+7(';
    }
  });

  telInput.addEventListener('focusout', (e) => {
    if (e.target.value === '+7(') {
      e.target.value = '';
    }
  });
};

export default telMaskHandler;

parseInt;
