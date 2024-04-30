console.log('Etch-a-Sketch');

let container = document.querySelector('.container');
containerWidth = container.clientWidth;
containerHeight = container.clientHeight;

for (let i = 0; i < (16 * 16); i++) {
    let gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell')
    gridCell.style.width = `${containerWidth / 16}px`;
    gridCell.style.height = `${containerWidth / 16}px`;
    container.appendChild(gridCell);
}

let gridCells = document.querySelectorAll('.grid-cell');
gridCells.forEach(gridCell => {
    gridCell.addEventListener('mouseover', () => {
        gridCell.style.backgroundColor = 'black';
    })
})