var Block = require('./Block.js');

class Log extends Block {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
    this.collision = false;
    this.speed = 1;
  }

  moveLeft(speed) {
    this.x -= speed;
    if (this.x < -200) {
      this.x = 1000
    }
  }

  checkForFrog(frog, speed) {
    let frogLeftOfLog = frog.x + frog.width < this.x;
    let frogRightOfLog = frog.x > this.x + this.width;
    let frogAboveLog = frog.y + frog.height < this.y;
    let frogBelowLog = frog.y > this.y + this.height;

    if (
      frogLeftOfLog ||
      frogRightOfLog ||
      frogAboveLog ||
      frogBelowLog
    ) {
      this.collision = false;
    } else {
      this.collision = true;
      if (frog.x > 0) {
        frog.x -= speed;
      }
    }
  }
}

module.exports = Log;