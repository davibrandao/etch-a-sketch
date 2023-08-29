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
let isPainting = false; // Variável para controlar se estamos pintando

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        isPainting = true; // Começar a pintura quando o botão é pressionado
        square.style.backgroundColor = '#000'; // Pinte o quadrado imediatamente
    });

    square.addEventListener('mouseup', () => {
        isPainting = false; // Parar a pintura quando o botão é liberado
    });

    square.addEventListener('mouseenter', () => {
        if (isPainting) {
            square.style.backgroundColor = '#000'; // Pintar enquanto o mouse estiver pressionado
        }
    });
});

