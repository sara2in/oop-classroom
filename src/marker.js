class Marker {
  constructor ( size, color, remainingInk ) {
    this.size = size;
    this.color = color;
    this.remainingInk = remainingInk;
  }
  write (string) {
        if (string.length < this.remainingInk) {
            for (let i = 0; i < string.length; i++) {
                if (string[i] !== " ") {
                    this.remainingInk--;
                } 
            }
            return string;
        } else if (string.length > this.remainingInk) {
            let incompleteString = "";            
            while (this.remainingInk > 0) {                
                for (let letter of string) {              
                    if (letter !== ' ') {  
                        this.remainingInk--   
                    }
                    incompleteString += letter;
                }                                       
            }
            return incompleteString;
        }
        

    
    // if (string.length < this.remainingInk) {
    //     for (let i = 0; i < string.length; i++) {
    //         if (string[i] !== " ") {
    //             this.remainingInk--;
    //         } 
    //     }
    //     return string;
    // } else if (string.length > this.remainingInk) {
    //     let incompleteString = "";
    //     for (let i = 0; i < string.length; i++) {
    //         if (string[i] !== ' ') {
    //             for (let j = 0; j < this.remainingInk; j++) {
    //                 incompleteString += string[j];
    //             }
    //         }
    //     }
    //     return incompleteString;
    // } else if (this.remainingInk === 0 ) {
    //     let incompleteString = "";
    //     for (let i = 0; i < this.remainingInk+1; i++) {
    //         if (string[i] === ' ') {
    //         incompleteString += string[i];
    //         }
    //     }
    //     return incompleteString;
    // }
  }
}

module.exports = Marker
