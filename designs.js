// Select color input
// Select size input

const inputWidth = $("#input_width");
const inputHeight = $("#input_height");
const colorPicker = $("#colorPicker");

// When size is submitted by the user, call makeGrid()

function makeGrid(width, height) {

// Your code goes here!

for (let r = 0; r < height; r++) {
    $("#pixel_canvas").append("<tr></tr>");
  }
  for (let c = 0; c < width; c++) {
    $("tr").append("<td></td>");
  }

}

// set default values
inputWidth.val(20);
inputHeight.val(20);
colorPicker.val("#00b5e9");

// make default grid
makeGrid(inputWidth.val(), inputHeight.val());

//makeGrid() function call

const submit = $("#sizePicker input:last");
submit.click(function (event) {
  event.preventDefault();
  $("#pixel_canvas").empty();
  makeGrid(inputWidth.val(), inputHeight.val());
});

// td click event
$("#pixel_canvas").on("click", "td", function () {
  $(this).css("background-color", colorPicker.val());
});
