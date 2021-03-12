caesar = (string, shift) => {
    // set variables 
    let ascii = [];
    let alpha = [];
    let newString = "";
    let x; let y;

    //set starting character codes to array
    for (i=0; i<string.length; i++){
        ascii.push(string.charCodeAt(i));
    };

    for (i = 0; i < ascii.length; i++) {
      // check if A-Z (65-90) or a-z (97-122)
    if (((ascii[i] >= 65) && (ascii[i] <= 90)) || 
    ((ascii[i] >= 97) && (ascii[i] <= 122))) {
        //set x and y variables to covert ascii to alpha and to new string
        if ((ascii[i] >= 65) && (ascii[i] <= 90)) {
            x = 10; y = 64;
        } else if ((ascii[i] >= 97) && (ascii[i] <= 122)) {
            x =15; y = 96;
        }
        let value = ((ascii[i] - x) % 27); 
        value = (value + shift) 
        // fix for negative value + shift values
        if (value < 1) {
          value = 26 + value;
        }
        value = (value % 27) + y;
        
        alpha.push(value);


    } else {
        alpha.push(ascii[i]);
    };
    }
    alpha.forEach(element => { 
        newString += String.fromCharCode(element);     
    });
 
return newString;
}