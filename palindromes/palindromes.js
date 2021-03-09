palindromes = (string) => {
    //remove spaces and special chars
    let pattern = /\W/ig;
    let removedString = string.toLowerCase().replace(pattern, '');
    
    //reverse removedstring
    reverseString = removedString.split('').reverse().join('');
    
    //check removed and revers equal
    if (removedString === reverseString) {
        return true;
    }
    else {
        return false;
    }

}

module.exports = palindromes
