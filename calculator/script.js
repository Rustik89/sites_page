const buttonEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

buttonEl.forEach((btn) => {
  btn.addEventListener("click", () => {
    const buttonValue = btn.textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
});

function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}

function clearResult() {
  inputFieldEl.value = "";
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}
