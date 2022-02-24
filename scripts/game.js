let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ['button1', 'button2', 'button3', 'button4'],
}

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
    addTurn();
}


function addTurn() {
    game.playerMoves = []; // start of the new turn
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]); // random selection of available choices and push to the computer sequence array
    // showTurns(); // display the sequence
}


function showScore() {
    document.getElementById('score').innerText = game.score;
}

function lightsOn(circ) {
    document.getElementById(circ).classList.add('light');
    setTimeout(() => {
        document.getElementById(circ).classList.remove('light');
    }, 400);
}


module.exports = { game, newGame, showScore, addTurn, lightsOn };