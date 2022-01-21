class Marker {
  constructor ( size, color, remainingInk ) {
    this.size = size;
    this.color = color;
    this.remainingInk = remainingInk;
  }
  write (str) {
        let output = ''
        for (let i = 0; i < str.length; i++) {
            if ((this.remainingInk > 0) && (str.charAt(i) !== ' ')) {
                output += str[i];
                this.remainingInk-=1;
            } else if ((this.remainingInk === 0) && (str.charAt(i) === ' ')) {
                output += str[i];
            } else if ((this.remainingInk > 0) && (str.charAt(i) === ' ')) {
                output += str[i];
            } 
        }
        return output;
    }
}

module.exports = Marker
