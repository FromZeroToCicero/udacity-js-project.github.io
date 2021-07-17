const gridWidth = document.getElementById("pam-grid-width");
const gridHeight = document.getElementById("pam-grid-height");
const selectedColor = document.getElementById("pam-color-picker");
const table = document.getElementById("pam-pixel-table");
const generateBtn = document.getElementById("pam-grid-btn");

const generateGrid = (width, height) => {
  const tbody = table.getElementsByTagName("tbody")[0];

  for (let r = 0; r < height; r++) {
    const row = tbody.insertRow(r);
    row.classList.add("pam-pixel-table-tr");

    for (let c = 0; c < width; c++) {
      const col = row.insertCell(c);
      col.classList.add("pam-pixel-table-td");
    }
  }

  // Coloring functionality
  document.querySelectorAll("#pam-pixel-table td").forEach((td) => {
    td.addEventListener("mousedown", () => {
      td.style["background-color"] = selectedColor.value;
    });
    td.addEventListener("dragover", () => {
      td.style["background-color"] = selectedColor.value;
    });
    td.addEventListener("mouseup", () => {
      td.style["background-color"] = selectedColor.value;
    });
  });
};

const updateHeight = (value) => {
  document.getElementById("grid-height-value").innerText = value;
};

const updateWidth = (value) => {
  document.getElementById("grid-width-value").innerText = value;
};

// Setting default values
gridWidth.value = 30;
gridHeight.value = 20;
selectedColor.value = "#00b5e9";

// Generate initial grid
generateGrid(gridWidth.value, gridHeight.value);

// Generate new grid when user clicks 'Generate' button
generateBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const oldTableBody = table.getElementsByTagName("tbody")[0];
  const newTableBody = document.createElement("tbody");
  oldTableBody.parentNode.replaceChild(newTableBody, oldTableBody);

  generateGrid(gridWidth.value, gridHeight.value);
});
