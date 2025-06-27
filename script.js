const container = document.querySelector('#grid-container');
const newGridButton = document.querySelector('#button-change-size');
const newColorButton = document.querySelector('#button-change-color');
const resetBackgroundButton = document.querySelector('#button-reset-background');
let drawColor='grey';

function generateGrid(size) {

    container.innerHTML='';
    const totalSquare=size**2;

    for (let i=0;i<totalSquare;i++) {

        const cell = document.createElement('div');
        cell.classList.add('grid-cell');

        const cellSize=100/size;
        cell.style.width = `${cellSize}%`;
        cell.style.height = `${cellSize}%`;

        cell.addEventListener('mouseenter', () => {cell.style.backgroundColor=drawColor});

        container.appendChild(cell);
        console.log('Creating cell:', i);

    }
}

newGridButton.addEventListener('click', ()=>{
    let input=prompt('Enter new grid size (must be less than or equal to 100):')

    const size = Number(input);

    if (size>=1 && size<=100) {
        generateGrid(size);
    }
    else {
        alert('Please try again.');
    }

});

resetBackgroundButton.addEventListener('click', ()=>{
    document.querySelectorAll('.grid-cell').forEach(cell=>{
        cell.style.backgroundColor='white';
    });
});


newColorButton.addEventListener('click', ()=>{
    r=Math.floor(Math.random()*256);
    b=Math.floor(Math.random()*256);
    g=Math.floor(Math.random()*256);

    drawColor=`rgb(${r},${b},${g})`;

});




