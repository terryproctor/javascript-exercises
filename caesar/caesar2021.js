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
        //change each to 1-26 values for a-z
        let value = ((ascii[i] - x) % 27);
        //add shift and shift back to ascii values 
        value = ((value + shift) % 27) + y;        
        //put values in alpha
        alpha.push(value);


    } else {
        //none alphabetical values do not change and modify
        alpha.push(ascii[i]);
    };
    }
    //change values back to string values
    alpha.forEach(element => { 
        newString += String.fromCharCode(element);     
    });
 
return newString;
}

    // console.log(ascii);

//need to work on negative values for shift