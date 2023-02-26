// triangle dom
document.getElementById("triangle-btn").addEventListener("click", function () {
  const triangleFirstValue = getInputValue("triangle-first-input");
  if (isNaN(triangleFirstValue)) {
    alert("please Provide a number");
    return;
  }
  const triangleSecondValue = getInputValue("triangle-second-input");
  if (isNaN(triangleSecondValue)) {
    alert("please Provide a number");
    return;
  }

  const sum = triangleFirstValue * triangleSecondValue;
  const total = sum * 0.5;
  const triangleHeading = getInnerText("triangle-heading");
  sam += 1;
  tableBody(sam, triangleHeading, total);
});
// rectangle dom
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const rectangleFirstValue = getInputValue("rectangle-first-input");
  if (isNaN(rectangleFirstValue)) {
    alert("please Provide a number");
    return;
  }
  const rectangleSecondValue = getInputValue("rectangle-second-input");
  if (isNaN(rectangleSecondValue)) {
    alert("please Provide a number");
    return;
  }
  const total = rectangleFirstValue * rectangleSecondValue;
  sam += 1;

  const rectangleHeading = getInnerText("rectangle-heading");

  tableBody(sam, rectangleHeading, total);
});

// Parallelogram dom
document
  .getElementById("Parallelogram-btn")
  .addEventListener("click", function () {
    const rectangleFirstValue = getInputValue("Parallelogram-first-input");
    const rectangleSecondValue = getInputValue("Parallelogram-second-input");
    const total = rectangleFirstValue * rectangleSecondValue;
    sam += 1;

    const rectangleHeading = getInnerText("Parallelogram-heading");

    tableBody(sam, rectangleHeading, total);
  });

// Rhombus dom
document.getElementById("Rhombus-btn").addEventListener("click", function () {
  const triangleFirstValue = getInputValue("Rhombus-first-input");
  const triangleSecondValue = getInputValue("Rhombus-second-input");
  const sum = triangleFirstValue * triangleSecondValue;
  const total = sum * 0.5;
  const triangleHeading = getInnerText("Rhombus-heading");
  sam += 1;
  tableBody(sam, triangleHeading, total);
});

// Pentagon dom
document.getElementById("Pentagon-btn").addEventListener("click", function () {
  const triangleFirstValue = getInputValue("Pentagon-first-input");
  const triangleSecondValue = getInputValue("Pentagon-second-input");
  const sum = triangleFirstValue * triangleSecondValue;
  const total = sum * 0.5;
  const triangleHeading = getInnerText("Pentagon-heading");
  sam += 1;
  tableBody(sam, triangleHeading, total);
});

// Ellipse dom
document.getElementById("Ellipse-btn").addEventListener("click", function () {
  const triangleFirstValue = getInputValue("Ellipse-first-input");
  const triangleSecondValue = getInputValue("Ellipse-second-input");
  const sum = triangleFirstValue * triangleSecondValue;
  const total = sum * 3.14;
  const triangleHeading = getInnerText("Ellipse-heading");
  sam += 1;
  tableBody(sam, triangleHeading, total);
});

// common sam
let sam = 0;

// common function no 1
function getInputValue(id) {
  const inputTypeValu = document.getElementById(id);
  const inputTypeInnerElement = inputTypeValu.value;
  const inputTypeOfNumber = parseInt(inputTypeInnerElement);
  inputTypeValu.value = "";
  return inputTypeOfNumber;
}

// common function no 2
function getInnerText(id) {
  const heading = document.getElementById(id);
  const headingInnerText = heading.innerText;
  return headingInnerText;
}
// common function no3
function tableBody(sam, heading, total) {
  const tableBody = document.getElementById("table-body");
  const tableData = document.createElement("tr");
  tableData.innerHTML = `
  <td>${sam}</td>
  <td>${heading}</td>
  <td>$${total.toFixed(2)}<span>cm<sup>2</sup></span></td>
  <td><button class="btn btn-primary">convert to m<sup>2</sup></button></td>
  `;
  tableBody.appendChild(tableData);
}

// background change
const container = document.querySelectorAll(".card");
container.forEach((f, index) => {
  f.addEventListener("mouseenter", (e) => {
    e.target.classList.remove("bg-base-100");
    e.target.style.backgroundColor = rc();
  });
  f.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "";
    e.target.classList.add("bg-base-100");
  });
});

const rc = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};
