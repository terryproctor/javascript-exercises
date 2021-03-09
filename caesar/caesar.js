caesar = (string, shift) => {
    let lettersArray = [];
    let newString = "";
    for (i=0; i<string.length; i++){
        lettersArray.push((string.charCodeAt(i)+shift));
    };
    for (i=0; i<string.length; i++){
        newString += String.fromCharCode(lettersArray[i]);
    };
    return newString;
};

console.log(caesar('a', 1));


module.exports = caesar
