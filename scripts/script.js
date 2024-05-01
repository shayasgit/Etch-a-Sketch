console.log('Etch-a-Sketch');

let container = document.querySelector('.container');
containerWidth = container.clientWidth;
containerHeight = container.clientHeight;

function canvas(noOfGrid, color) {
    for (let i = 0; i < (noOfGrid * noOfGrid); i++) {
        let gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell')
        gridCell.style.width = `${containerWidth / noOfGrid}px`;
        gridCell.style.height = `${containerWidth / noOfGrid}px`;
        container.appendChild(gridCell);
    }
    
    let gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach(gridCell => {
        gridCell.addEventListener('mouseover', () => {
            gridCell.style.backgroundColor = color;
        })
    });
}

function cleanGrid() {
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }
}

canvas(16, 'black');

let askSize = document.querySelector('.prompt');
askSize.addEventListener('click', () => {
    let gridSize = 0;
    do {
        gridSize = parseInt(prompt("Enter the size of Gird", 16));
    } while (gridSize > 100 || gridSize < 1);
    cleanGrid();
    canvas(gridSize, 'black');
})