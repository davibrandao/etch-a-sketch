const container = document.querySelector('.container');
const colorPicker = document.getElementById('color-picker');
const newGridButton = document.getElementById('new-grid-button');
const eraserButton = document.getElementById('eraser-button');
const clearButton = document.getElementById('clear-button')
const rainbowButton = document.getElementById('rainbow-button');


//Gerar quadro
function createGrid(size) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

//Limpar quadro (grid)
function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = '';
    });
}

// Função para gerar uma cor aleatória em formato hexadecimal
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Função para pintar os squares
function paintGrid(color) {
    const squares = document.querySelectorAll('.square');
    let isPainting = false; // Variável para controlar se estamos pintando
    let currentColor = color; // Cor atual para pintura

    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            isPainting = true;
            square.style.backgroundColor = currentColor;
        });

        square.addEventListener('mouseup', () => {
            isPainting = false;
        });

        square.addEventListener('mouseenter', () => {
            if (isPainting) {
                square.style.backgroundColor = currentColor;
            }
        });
    });

}

function paintGridRainbow() {
    const squares = document.querySelectorAll('.square');
    let isPainting = false; // Variável para controlar se estamos pintando
    let currentColor = '#000'; // Cor atual para pintura
    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            isPainting = true;
            currentColor = getRandomColor(); // Atualiza a cor atual para uma cor aleatória
            square.style.backgroundColor = currentColor; // Define a cor de fundo do quadrado
        });

        square.addEventListener('mouseup', () => {
            isPainting = false;

        });

        square.addEventListener('mouseenter', () => {
            if (isPainting) {
                currentColor = getRandomColor(); // Atualiza a cor atual para uma cor aleatória
                square.style.backgroundColor = currentColor; // Define a cor de fundo do quadrado
            }
        });
    });
}

createGrid(16); // Tamanho inicial da grade || Initial grid
paintGrid('#000'); // Initial color picker

// Color picker event
colorPicker.addEventListener('input', () => {
    const selectedColor = colorPicker.value;
    paintGrid(selectedColor);
});

//New grid button event
newGridButton.addEventListener('click', () => {
    const gridSize = prompt('Enter the number of squares per side for the new grid:');
    if (gridSize <= 64) { //verify user input
        createGrid(parseInt(gridSize))
    } else {
        alert("Please, type a number between 1 and 64");
    }
    paintGrid('#000');

});

//Event - Erase
eraserButton.addEventListener('click', () => {
    paintGrid('#fff');
})

//Event - clear grid button
clearButton.addEventListener('click', () => {
    clearGrid();
    createGrid(16);
    paintGrid('#000');
})

//Event - random color picker
rainbowButton.addEventListener('click', () => {
    paintGridRainbow();
});




