//variáveis

let getColor = 'black';
let rowAmount = 0;
let pixelAmount = 0;
const boardPixel = document.querySelector('#pixel-board');
const btnGenerateBoard = document.querySelector('#btn-board-generator');
const inputBoardSize = document.querySelector('#sizeOfBoard');
const btnClearBoard = document.querySelector('#btn-clear-board');


//função para criar linhas do quadro
function createRows() {
    for (let i = 0; i < rowAmount; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        boardPixel.appendChild(row);
    }
}

//função para criar os pixels e adicioná-los em uma única linha
function fillingTheRow(divRow) {
    for (let i = 0; i < pixelAmount; i++) {
        const pixelElement = document.createElement('div');
        pixelElement.classList.add('pixel');
        divRow.appendChild(pixelElement);
    }
}

//função para adicionar os pixels criados em todas as linhas
function fillingTheRows() {
    const numberOfRows = document.querySelectorAll('.row');
    for (let i = 0; i < numberOfRows.length; i++) {
        fillingTheRow(numberOfRows[i]);
    }
}

//função para criar o quadro
function boardCreationRowsAndPixels() {
    createRows();
    fillingTheRows();
}


//adicionar ou remover a classe selected da cor selecionada

const selectedClass = document.querySelectorAll('.color');
for (i = 0; i < selectedClass.length; i++) {
    selectedClass[i].addEventListener('click', function (event) {
        const divs = event.target;
        const checkSelected = document.querySelector('.selected');
        if (checkSelected) {
            checkSelected.classList.remove('selected');
        }
        divs.classList.add('selected');
    });
}


//2 funções para atualizar a cor da let getColor de acordo com a cor selecionada da paleta de cores

function toGetColor(event) {
    const divs = event.target;
    getColor = divs.style.backgroundColor;
}


function toGetColor2() {
    const colorSelected = document.querySelectorAll('.color');
    for (let i = 0; i < colorSelected.length; i++) {
        colorSelected[i].addEventListener('click', toGetColor);
    }
}
toGetColor2();


//2 funções para pintar os pixels com a cor selecionada da paleta de cores

function paintColor(event) {
    const selectedPixel = event.target;
    selectedPixel.style.backgroundColor = getColor;
}

function paintColor2() {
    const selectedPixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < selectedPixels.length; i++) {
        selectedPixels[i].addEventListener('click', paintColor);
    }
}
paintColor2();

//função para apagar o que foi colorido no Pixel Board

function resetPixelBoard() {
    const selectedPixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < selectedPixels.length; i++) {
        selectedPixels[i].style.backgroundColor = 'white';
    }
}

document.getElementById("btn-clear-board").onclick = resetPixelBoard;

//função para exibir ou não o botão de Limpar o Pixel Board

function clearBtnDisplay() {
    if (rowAmount === 0) {
        btnClearBoard.style.display = 'none';
    } else {
        btnClearBoard.style.display = 'block';
    }
}
clearBtnDisplay();

//removendo os pixels (supondo que o usuário criou o board de um determinado tamanho e em seguida deseja criar outro board de outro tamanho)

function removingRowsAndPixels() {
    const removeRow = document.querySelectorAll('.row');
    const removePixel = document.querySelectorAll('.pixel');

        if (removeRow.length > 0 && removePixel.length > 0) {
            boardPixel.innerHTML=''
        }
}

//função para criar o quadro

function gettingValuesFromInput() {
    btnGenerateBoard.addEventListener('click', function () {
        if (inputBoardSize.value === '') {
            alert('Erro! É necessário inserir um tamanho do quadro válido.');
        } else if (inputBoardSize.value <= 5) {
            rowAmount = 5;
            pixelAmount = 5;
            getColor = 'black';
            executeAll();
        } else if (inputBoardSize.value >= 50) {
            rowAmount = 50
            pixelAmount = 5;
            getColor = 'black';
            executeAll();
        } else {
            rowAmount = inputBoardSize.value;
            pixelAmount = inputBoardSize.value;
            getColor = 'black';
            executeAll();
        }
    })
}

//função para executar várias funções criadas anteriormente

function executeAll(){
    removingRowsAndPixels();
    boardCreationRowsAndPixels();
    clearBtnDisplay();
    toGetColor2();
    paintColor2();
}

btnGenerateBoard.onclick = function () {
    gettingValuesFromInput();
}
