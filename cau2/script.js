const checkForm = document.getElementById("check-form");
const numberInput = document.getElementById("number-input");
const resultElement = document.getElementById("result");
const errorElement = document.getElementById("error");

// Số hoàn hảo là số có tổng các ước (không kể chính nó) bằng chính nó
function isPerfectNumber(number) {
  let sumOfDivisors = 0;

  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sumOfDivisors += i;
    }
  }

  return sumOfDivisors === number;
}

function isPositiveInteger(number) {
  return Number.isInteger(number) && number > 0;
}

function handleCheck(event) {
  event.preventDefault();
  resultElement.textContent = "";
  errorElement.textContent = "";

  const value = numberInput.value.trim();
  const number = Number(value);

  if (value === "" || !isPositiveInteger(number)) {
    errorElement.textContent = "Vui lòng nhập một số nguyên dương.";
    return;
  }

  resultElement.textContent = number + " -> " + isPerfectNumber(number);
}

checkForm.addEventListener("submit", handleCheck);
