const gridContainer = document.querySelector('#etch-container');
const grid = document.querySelector('#etch-controller');
const drawBtn = document.querySelector('#pencil');
const rgbBtn = document.querySelector('#rgb');
const resetBtn = document.querySelector('#reset');
const changeBtn = document.querySelector('#size');


//buttons
changeBtn.addEventListener('click', changeGridSize);
drawBtn.addEventListener('click', draw);
rgbBtn.addEventListener('click', drawRGB);
resetBtn.addEventListener('click', resetGrid);


let newLength = 0;
let gridSize = 16;

function createGrid(gridSize) {
  let newWidth = "width:" + newLength + "px;";
  let newHeight = "height:" + newLength + "px;";
  gridSize = gridSize * gridSize;
  for (let i = 0; i < gridSize; i++) {
    grid.innerHTML += "<div class='box' style='" + newWidth + newHeight + "'></div>";
  }
}
var down = false;
$(document).mousedown(function () {
  down = true;
}).mouseup(function () {
  down = false;
});

function drawRGB() {
  $('.box').mouseover(
    function random_rgba() {
      if (!down) {
        return
      }
      var o = Math.round, r = Math.random, s = 255;
      $(this).css("background-color", 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')')
    }
  );
  $('#rgb').addClass('btn-select');
  $('#pencil').removeClass('btn-select');
}

function draw() {
  $('.box').mouseover(
    function () {
      if (!down) {
        return
      }
      $(this).addClass('hover')
    }
  );
  $('#pencil').addClass('btn-select');
  $('#rgb').removeClass('btn-select');
}

function resetGrid() {
  removeGrid();
  createGrid(gridSize);
}

function changeSize(gridSize) {
  //get new length
  newLength = 500 / gridSize;
}

function removeGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function changeGridSize() {
  //create new grid
  gridSize = prompt('Set the grid length to a # between 1 & 64');
  if (gridSize <= 64) {
    //delete old grid
    removeGrid();
    changeSize(gridSize);
    createGrid(gridSize);
  } else {
    alert('Try Again')
  }
}

changeSize(gridSize);
createGrid(gridSize);