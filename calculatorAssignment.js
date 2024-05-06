//Elements Selection
let buttons = document.querySelectorAll(".button");
let equalTo = document.getElementById("equalTo");
let result = document.getElementById("output");

//press button
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.value += e.currentTarget.textContent;
  });
});

//evaluate result
equalTo.addEventListener("click", () => {
  let loopResult = "";
  let i = 0;
  let stringLength = result.value.length;
  let stringValue = result.value;

  for (i; i <= stringLength - 1; i++) {
    if (stringValue[i] === "÷") {
      loopResult += "/";
      continue;
    }

    if (stringValue[i] === "x") {
      loopResult += "*";
      continue;
    }
    loopResult += stringValue[i];
  }

  result.value = eval(loopResult);
});
