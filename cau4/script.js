// Lớp Công nhân
class Worker {
  constructor(order, fullName, birthDate, address, salary, position) {
    this.order = order;
    this.fullName = fullName;
    this.birthDate = birthDate;
    this.address = address;
    this.salary = salary;
    this.position = position;
  }
}

const workers = [
  new Worker(1, "Trương Tấn C", "11-11-1999", "Huế", 2000, "Công nhân"),
  new Worker(2, "Nguyễn Văn An", "05-03-1995", "Quảng Nam", 2500, "Tổ trưởng"),
  new Worker(3, "Trương Tấn A", "11-11-1997", "Quảng Nam", 2000, "Công nhân"),
  new Worker(4, "Đặng Minh Đức", "21-07-1992", "Đà Nẵng", 3000, "Quản đốc"),
  new Worker(5, "Trương Tấn B", "11-11-1998", "Đà Nẵng", 2000, "Công nhân"),
  new Worker(6, "Lê Thị Bình", "30-12-1996", "Quảng Ngãi", 2200, "Kỹ thuật viên")
];

const workerListElement = document.getElementById("worker-list");

// Sắp xếp theo họ và tên (A -> Z, theo thứ tự bảng chữ cái tiếng Việt), không làm thay đổi mảng gốc
function sortByFullName(workerList) {
  return [...workerList].sort((a, b) => a.fullName.localeCompare(b.fullName, "vi"));
}

// STT là số thứ tự trong danh sách hiển thị nên cần đánh lại sau khi sắp xếp
function renumberOrder(workerList) {
  workerList.forEach((worker, index) => {
    worker.order = index + 1;
  });
}

function renderWorkerRow(worker) {
  return `<tr>
    <td>${worker.order}</td>
    <td>${worker.fullName}</td>
    <td>${worker.birthDate}</td>
    <td>${worker.address}</td>
    <td>${worker.salary}</td>
    <td>${worker.position}</td>
  </tr>`;
}

function displayWorkers(workerList) {
  workerListElement.innerHTML = workerList.map(renderWorkerRow).join("");
}

const sortedWorkers = sortByFullName(workers);
renumberOrder(sortedWorkers);
displayWorkers(sortedWorkers);
