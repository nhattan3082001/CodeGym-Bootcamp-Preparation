const MAX_ARRAY_SIZE = 50;
const DIVISOR = 3;

const numbers = [];

const addForm = document.getElementById("add-form");
const numberInput = document.getElementById("number-input");
const arraySizeElement = document.getElementById("array-size");
const arrayDisplayElement = document.getElementById("array-display");
const calculateButton = document.getElementById("calculate-button");
const resultElement = document.getElementById("result");
const errorElement = document.getElementById("error");

// Tính trung bình cộng các số chia hết cho 3, trả về null nếu không có số nào
function calculateAverageDivisibleBy3(array) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % DIVISOR === 0) {
      sum += array[i];
      count++;
    }
  }

  if (count === 0) {
    return null;
  }
  return sum / count;
}

function showArray() {
  arraySizeElement.textContent = numbers.length;
  arrayDisplayElement.textContent = numbers.length === 0 ? "[ ]" : "[ " + numbers.join(", ") + " ]";
}

function showError(message) {
  errorElement.textContent = message;
}

function addNumber(event) {
  event.preventDefault();
  showError("");
  resultElement.textContent = "";

  const value = numberInput.value.trim();
  const number = Number(value);

  if (value === "" || !Number.isInteger(number)) {
    showError("Vui lòng nhập một số nguyên hợp lệ.");
    return;
  }
  if (numbers.length >= MAX_ARRAY_SIZE) {
    showError("Mảng đã đủ " + MAX_ARRAY_SIZE + " phần tử, không thể thêm nữa.");
    return;
  }

  numbers.push(number);
  showArray();
  numberInput.value = "";
  numberInput.focus();
}

function showAverage() {
  showError("");

  if (numbers.length === 0) {
    showError("Mảng đang rỗng, hãy thêm phần tử trước.");
    resultElement.textContent = "";
    return;
  }

  const average = calculateAverageDivisibleBy3(numbers);
  if (average === null) {
    resultElement.textContent = "Trong mảng không có số nào chia hết cho " + DIVISOR + ".";
    return;
  }
  resultElement.textContent = "Trung bình cộng các số chia hết cho " + DIVISOR + ": " + parseFloat(average.toFixed(2));
}

addForm.addEventListener("submit", addNumber);
calculateButton.addEventListener("click", showAverage);
