let result = [];

function refreshDisplay() {
  document.getElementById("res").innerText = result.join("");
}

function customClick(x) {
  result.push(x);
  refreshDisplay();
}

function customClear() {
  result = [];
  refreshDisplay();
}

function getAns() {
  let a = "";
  let b = "";
  let ans = 0;
  let seperatorIndex = 0;
  let operator;
  for (let i = 0; i < result.length; i++) {
    if (["+", "-", "*", "/"].includes(result[i])) {
      seperatorIndex = i;
      break;
    }
  }

  for (let i = 0; i < seperatorIndex; i++) {
    a += result[i];
  }

  for (let i = seperatorIndex + 1; i < result.length; i++) {
    b += result[i];
  }

  operator = result[seperatorIndex];

  if (operator === "+") ans = (parseInt(a, 2) + parseInt(b, 2)).toString(2);
  else if (operator === "-") ans = (parseInt(a, 2) - parseInt(b, 2)).toString(2);
  else if (operator === "*") ans = (parseInt(a, 2) * parseInt(b, 2)).toString(2);
  else if (operator === "/") ans = (parseInt(a, 2) / parseInt(b, 2)).toString(2);

  customClear();
  document.getElementById("res").innerText = ans;
}
