const buttonEl = document.querySelectorAll('button');
const inputFieldEl = document.getElementById('result');
const equals_btn = document.querySelector('.equals');
const imgToasty = document.querySelector('.calc_toasty');
const clear_btn = document.querySelector('clear');

equals_btn.addEventListener('click', () => {
  imgToasty.classList.add('is-active');
});

buttonEl.forEach((btn) => {
  btn.addEventListener('click', () => {
    const buttonValue = btn.textContent;
    if (buttonValue === 'C') {
      clearResult();
      imgToasty.classList.remove('is-active');
    } else if (buttonValue === '=') {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
});

function calculateResult() {
  if (inputFieldEl.value) {
    inputFieldEl.value = eval(inputFieldEl.value);
  }
}

function clearResult() {
  inputFieldEl.value = '';
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}
