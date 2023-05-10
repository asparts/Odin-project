let gridContainer;
let selectedColor = 'red';
let gridSize = 32;
window.onload = function (){
    gridContainer = document.getElementById('grid-container');
    
    createGrid(gridSize,gridSize);
}


function createGrid(rows, cols)
{
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        //cell.innerText = (c + 1);
        cell.addEventListener('mouseover', function handleMouseOver(e) {
            if(e.buttons == 1 || e.buttons == 3)
            {
                cell.style.backgroundColor = selectedColor;
                cell.style.borderColor = selectedColor;
            }
            cell.onclick
        });
        cell.addEventListener('click', function handleMouseClick(){
            cell.style.backgroundColor = selectedColor;
            cell.style.borderColor = selectedColor;
        });
        gridContainer.appendChild(cell).className = "grid-item";
    }
}
function resetGrid(){
    gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = "";
    createGrid(gridSize,gridSize);
}
function newGrid(){

    var sizeString = prompt("Please give size for the new grid. Minimum is 16, maximum is 100.");
    var size = parseInt(sizeString);
    if(!isNaN(size.value))
    {
        alert('Given size is not a number');
        return;
    }
    else if(size < 16){
        alert('Given size too small. Creating 16x16 grid');
        size = 16;
    }
    else if(size > 100)
    {
        alert('Given size too small. Creating 100x100 grid');
        size = 100;
    }
    gridSize = size;
    gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = "";
    resetGrid();

}
function changeSelectedColor(){

   var colorSpan = document.getElementById('color-span');
   var colorSelect = document.getElementById('color-button');

   colorSelect.click();
   colorSelect.addEventListener('input', function(){
    selectedColor = colorSelect.value;
    colorSpan.style.backgroundColor = selectedColor;
   });
}