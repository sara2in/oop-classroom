class Desk {
  constructor ( length, width, height, isWhiteboard ) {
    this.length = length;
    this.width = width;
    this.height = height;
    this.isWhiteboard = isWhiteboard;
    this.content = "";
  }
  write (string) {   
        return this.content += string;
  }
  wipe () {
    if (this.isWhiteboard === true) {
        return this.content = "";
    } else {
        return;
    }
  }
}

module.exports = Desk
