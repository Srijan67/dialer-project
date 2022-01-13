const dialer = document.querySelector(".dialer");
const display = document.querySelector(".display");
const nums = document.querySelectorAll(".num");
const backspace = document.querySelector(".backspace");
let test = "";

for (const num of nums) {
  num.addEventListener("click", () => {
    if (display.innerText == "O") {
      display.innerText = "";
    }
    display.innerText = display.innerText + num.innerText;
  });
}
backspace.addEventListener("click", () => {
  var displayArr = [].slice.call(display.innerText);
  const arrLength = displayArr.length;
  for (let i = 0; i < arrLength; i++) {
    if (i == arrLength - 1) {
      test = test + "";
      if (i == 0) {
        test = "O";
      }
    } else {
      test = test + displayArr[i];
    }
  }
  display.innerText = test;

  test = "";

  displayArr = [];
});
