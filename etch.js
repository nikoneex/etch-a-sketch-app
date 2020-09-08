const gridContainer = document.querySelector('#etch-container');
const grid = document.querySelector('#etch-controller');
const resetBtn = document.querySelector('#reset');
const changeBtn = document.querySelector('#size');


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


function changeSize(gridSize) {
    //get new length
    newLength = 500 / gridSize;
}

function removeBox() {
    const box = document.getElementById('etch-controller').children;
    for(var i = 0; i <= box.length; i--){
        grid.removeChild(box[i]);
}


function changeGridSize(gridSize) {
    //delete grid

    //create new grid
    gridSize = prompt('Set the grid length to a # between 1 & 64');
    gridContainer.appendChild(grid);
    changeSize(gridSize);
    createGrid(gridSize);
}



changeSize(gridSize);
createGrid(gridSize);


//button events
