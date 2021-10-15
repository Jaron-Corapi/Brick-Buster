export default class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;
   
    this.width = 150;
    this.height = 20;

    this.maxSpeed = 7;
    this.speed = 0;

    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 10,
    };
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0
  }

  draw(ctx) {
    ctx.fillStyle = '#D51443'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  

  update(deltaTime) {
    this.position.x += this.speed;

    if(this.position.x < 0) 
      this.position.x = 0;
    if(this.position.x + this.width > this.gameWidth)
      {this.position.x = this.gameWidth - this.width;}
  }
}



// The y postion of the paddle is calculated with the top left corner of the paddle in mind. 
// Take the game box height which is 800px and would represent the bottom of the game box on
// Y axis. this.height is the height of the paddle which is 30 px which needs to be 
// subtracted from the gameHeight. Then subtract an additional 10 px to give the paddle some
// buffer.

/* The x position of the paddle is calculated by taking the gameWidth which is 600 and
dividing that in 2 to get the center. However, that would place the paddle right of center
since it is going off the top left corner of the paddle. To place the paddle in the 
middle of the game box, you can take the width of the paddle and divide that in 2 as well
then subtract the result from the gameWidth/2. */