let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
let gameMode = '2p';

const statusDisplay = document.getElementById('status');
const cells = document.querySelectorAll('.cell');
const btn2p = document.getElementById('btn-2p');
const btnBot = document.getElementById('btn-bot');
const strikeLine = document.getElementById('strike-line');
const modal = document.getElementById('game-over-modal');
const modalMsg = document.getElementById('modal-msg');

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function handleCellClick(e) {
    const clickedCell = e.target.closest('.cell');
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (board[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    if (gameMode === 'bot' && currentPlayer === 'O') {
        return;
    }

    processMove(clickedCell, clickedCellIndex);
}

function processMove(cellElement, index) {
    board[index] = currentPlayer;
    cellElement.classList.add('filled', currentPlayer.toLowerCase());
    
    const randomRotation = Math.floor(Math.random() * 20) - 10;
    cellElement.style.setProperty('--rot', randomRotation);
    
    const mark = currentPlayer === 'X' ? '✗' : '○';
    cellElement.innerHTML = `<span>${mark}</span>`;

    checkResult();
}

function checkResult() {
    let roundWon = false;
    let winningCombo = null;

    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = board[winCondition[0]];
        let b = board[winCondition[1]];
        let c = board[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            winningCombo = winCondition;
            break;
        }
    }

    if (roundWon) {
        drawStrikeThrough(winningCombo);
        handleGameOver(currentPlayer === 'X' ? 'Player X Wins!' : 'Player O Wins!');
        return;
    }

    let roundDraw = !board.includes('');
    if (roundDraw) {
        handleGameOver('Draw!');
        return;
    }

    switchPlayer();
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.innerHTML = `Player ${currentPlayer}'s Turn`;

    if (gameMode === 'bot' && currentPlayer === 'O' && gameActive) {
        statusDisplay.innerHTML = `Bot is thinking...`;
        setTimeout(makeBotMove, 600);
    }
}

function makeBotMove() {
    if (!gameActive) return;

    let moveIndex = findBestMove('O');
    
    if (moveIndex === -1) {
        moveIndex = findBestMove('X');
    }

    if (moveIndex === -1 && board[4] === '') {
        moveIndex = 4;
    }

    if (moveIndex === -1) {
        let emptyIndices = [];
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') emptyIndices.push(i);
        }
        
        if (emptyIndices.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyIndices.length);
            moveIndex = emptyIndices[randomIndex];
        }
    }

    if (moveIndex !== -1) {
        const cellElement = document.querySelector(`.cell[data-index="${moveIndex}"]`);
        processMove(cellElement, moveIndex);
    }
}

function findBestMove(player) {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        
        if (board[a] === player && board[b] === player && board[c] === '') return c;
        if (board[a] === player && board[c] === player && board[b] === '') return b;
        if (board[b] === player && board[c] === player && board[a] === '') return a;
    }
    return -1;
}

function handleGameOver(message) {
    gameActive = false;
    statusDisplay.innerHTML = message;
    
    setTimeout(() => {
        modalMsg.innerText = message;
        modal.classList.add('show');
    }, 800);
}

function drawStrikeThrough(combo) {
    const boardElement = document.getElementById('board');
    const boardRect = boardElement.getBoundingClientRect();
    const cellWidth = boardRect.width / 3;
    const cellHeight = boardRect.height / 3;

    let startX, startY, width, angle;
    const comboString = combo.join(',');

    switch (comboString) {
        case '0,1,2': startX = 0; startY = cellHeight * 0.5; width = boardRect.width; angle = 0; break;
        case '3,4,5': startX = 0; startY = cellHeight * 1.5; width = boardRect.width; angle = 0; break;
        case '6,7,8': startX = 0; startY = cellHeight * 2.5; width = boardRect.width; angle = 0; break;
        case '0,3,6': startX = cellWidth * 0.5; startY = 0; width = boardRect.height; angle = 90; break;
        case '1,4,7': startX = cellWidth * 1.5; startY = 0; width = boardRect.height; angle = 90; break;
        case '2,5,8': startX = cellWidth * 2.5; startY = 0; width = boardRect.height; angle = 90; break;
        case '0,4,8': 
            startX = 0; 
            startY = 0; 
            width = Math.sqrt(Math.pow(boardRect.width, 2) + Math.pow(boardRect.height, 2)); 
            angle = 45; 
            break;
        case '2,4,6': 
            startX = boardRect.width; 
            startY = 0; 
            width = Math.sqrt(Math.pow(boardRect.width, 2) + Math.pow(boardRect.height, 2)); 
            angle = 135; 
            break;
    }

    strikeLine.style.top = `${startY}px`;
    strikeLine.style.left = `${startX}px`;
    strikeLine.style.transform = `rotate(${angle}deg)`;
    
    const wobble = (Math.random() * 2 - 1);
    strikeLine.style.transform = `rotate(${angle + wobble}deg)`;

    setTimeout(() => {
        strikeLine.style.width = `95%`; 
    }, 50);
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    
    statusDisplay.innerHTML = `Player X's Turn`;
    
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('filled', 'x', 'o');
    });

    strikeLine.style.width = '0';
    strikeLine.style.transition = 'none';
    
    setTimeout(() => {
        strikeLine.style.transition = 'width 0.4s ease-out';
    }, 50);
}

function closeModalAndReset() {
    modal.classList.remove('show');
    setTimeout(resetGame, 300);
}

function setMode(mode) {
    gameMode = mode;
    
    if (mode === '2p') {
        btn2p.classList.add('active');
        btnBot.classList.remove('active');
    } else {
        btnBot.classList.add('active');
        btn2p.classList.remove('active');
    }
    
    resetGame();
}

window.addEventListener('resize', () => {
    if (!gameActive && modal.classList.contains('show') === false) {
        strikeLine.style.width = '0';
    }
});
