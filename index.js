import Game from './game.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);

let game = new Game(GAME_WIDTH, GAME_HEIGHT)


let lastTime = 0;


function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  
  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop)
}
window.requestAnimationFrame(gameLoop);


//14:30 explanation on the game loop which is key to the animation. Also recap at 15:40.