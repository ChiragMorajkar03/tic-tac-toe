let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function handleMove(index) {
    if (board[index] === "" && !checkWinner()) {
        board[index] = currentPlayer;
        render();
        if (!checkWinner()) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById("message").innerText = `Player ${currentPlayer} wins!`;
            return true;
        }
    }

    if (!board.includes("")) {
        document.getElementById("message").innerText = "It's a draw!";
        return true;
    }

    return false;
}

function render() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
        cell.innerText = board[index];
    });
}

function resetGame() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    document.getElementById("message").innerText = "";
    render();
}

render();
