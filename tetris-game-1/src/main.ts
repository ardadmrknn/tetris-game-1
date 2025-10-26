// This file is the entry point of the Tetris game. It initializes the game, sets up the game loop, and handles the overall game state.

import { Game } from './game';

const canvas = document.getElementById('tetris') as HTMLCanvasElement;
const context = canvas.getContext('2d');

const game = new Game(context);

function gameLoop() {
    game.update();
    game.render();
    requestAnimationFrame(gameLoop);
}

game.start();
gameLoop();