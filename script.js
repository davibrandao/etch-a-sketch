const container = document.querySelector('.container');

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

createGrid(16);
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('click', () => {
        square.style.backgroundColor = '#000'; // Altere a cor ao passar o mouse
    });
});

