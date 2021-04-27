const body = document.querySelector('body');
body.style.display = 'flex';
body.style.justifyContent = 'center';

const header = document.querySelector('header');
header.style.display = 'flex';
header.style.flexDirection = 'column';
header.style.marginTop = '70px';
header.style.fontSize = '1.3rem'
header.style.fontFamily ='Helvetica, sans serif';

let gridSize;
const gridButton = document.querySelector('#gridButton');
gridButton.style.fontSize = '1.3rem';
gridButton.addEventListener('click', () => {
    do {
        gridSize = prompt('Enter a Grid Size');
        gridSize = parseInt(gridSize);
    } while (isNaN(gridSize));
    clear();
    changeGridSize(gridSize);
    hover();
});

const container = document.querySelector('.container');
let grid;
container.style.height = '500px';
container.style.width = '500px';
container.style.display = 'grid';
container.style.border = '2px solid black';
container.style.position = 'absolute';
container.style.top = '60%';
container.style.left = '50%';
container.style.transform = 'translate(-50%, -60%)';

function changeGridSize (gridSize) {
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        grid = document.createElement('div');
        grid.classList.add(`${i}`);
        grid.style.border = '1px solid black';
        container.appendChild(grid);
        container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    }
}
}

function hover() {
    let grids = document.querySelectorAll('div');
    grids.forEach(div => {
    div.addEventListener('mouseover', () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    div.style.background = `#${randomColor}`;
    });
});
}

function clear () {
    document.querySelectorAll('div').forEach(div => div.remove());
}
