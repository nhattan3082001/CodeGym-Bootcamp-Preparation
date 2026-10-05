const MONTH_YEAR_PATTERN = /^(0[1-9]|1[0-2])\/(\d{4})$/;

const daysForm = document.getElementById("days-form");
const monthYearInput = document.getElementById("month-year-input");
const resultElement = document.getElementById("result");
const errorElement = document.getElementById("error");

// Năm nhuận: chia hết cho 4 mà không chia hết cho 100, hoặc chia hết cho 400
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDaysInMonth(month, year) {
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return isLeapYear(year) ? 29 : 28;
    default:
      return 31;
  }
}

// Kiểm tra chuỗi đúng định dạng MM/yyyy (tháng 01-12, năm 4 chữ số lớn hơn 0)
function isValidMonthYear(text) {
  const match = MONTH_YEAR_PATTERN.exec(text);
  return match !== null && Number(match[2]) > 0;
}

function handleCalculate(event) {
  event.preventDefault();
  resultElement.textContent = "";
  errorElement.textContent = "";

  const text = monthYearInput.value.trim();
  if (!isValidMonthYear(text)) {
    errorElement.textContent = "Định dạng không hợp lệ, vui lòng nhập theo dạng MM/yyyy (ví dụ: 02/2020).";
    return;
  }

  const [monthText, yearText] = text.split("/");
  const days = getDaysInMonth(Number(monthText), Number(yearText));
  resultElement.textContent = "Tháng " + text + " có " + days + " ngày.";
}

daysForm.addEventListener("submit", handleCalculate);
