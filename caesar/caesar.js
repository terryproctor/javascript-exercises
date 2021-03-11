function caesar(string, shift) {
    // set variables 
    let startChar = [];
    let newString = "";

    //set starting character codes to array
    for (i=0; i<string.length; i++){
        startChar.push(string.charCodeAt(i));
    };

    for (i=0; i<startChar.length; i++) {
        // A to Z
        if ((startChar[i] >= 65) && (startChar[i] <= 90)) {
            // wrap for chars
            if (((startChar[i] + shift) > 90) || 
            ((startChar[i] + shift) > 122)) {
                newString += String.fromCharCode((startChar[i]) + shift - 26);
            } else {
            // regular caesar for chars that don't need wrapping
                newString += String.fromCharCode((startChar[i]) + shift);
            }
        }
    

       if ((startChar[i] >= 97) && (startChar[i] <= 122)) {
            // wrap for uppercase chars
            if ((startChar[i] + shift) > 122) {
                newString += String.fromCharCode((startChar[i]) + shift - 26);
            } else {
            // regular caesar for chars that don't need wrapping
                newString += String.fromCharCode((startChar[i]) + shift);
            }
        } 

    }
return newString;
}