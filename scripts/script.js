console.log('Etch-a-Sketch');

let container = document.querySelector('.container');
containerWidth = container.clientWidth;
containerHeight = container.clientHeight;

function randomColor () {
    return Math.floor(Math.random() * 256);
}

function drawCanvas(noOfGrid) {
    for (let i = 0; i < (noOfGrid * noOfGrid); i++) {
        let gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell')
        gridCell.style.width = `${containerWidth / noOfGrid}px`;
        gridCell.style.height = `${containerWidth / noOfGrid}px`;
        container.appendChild(gridCell);
    }
}

function hover(color) {
    let gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach(gridCell => {
        gridCell.addEventListener('mouseover', () => {
            if (color == 'random') {
                gridCell.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            } else {
                gridCell.style.backgroundColor = color;
            }
        })
    });
}

function cleanGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }
}

function selectColor() {
    let colorBtns = document.querySelectorAll('.color');
    colorBtns.forEach(colorBtn => {
        colorBtn.addEventListener('click', () => {
            let result = colorBtn.value;
            hover(result);
        })
    })
}

drawCanvas(16);
hover('black');
let color = selectColor();
hover(color);

let askSize = document.querySelector('.prompt');
askSize.addEventListener('click', () => {
    let gridSize = 0;
    do {
        gridSize = parseInt(prompt("Enter the size of Gird", 16));
    } while (gridSize > 100 || gridSize < 1);
    cleanGrid();
    drawCanvas(gridSize);
    hover('black');
    selectColor()
});

