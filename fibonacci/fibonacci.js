const fibonacci = (sequence) => {
    if (sequence < 0) {
        return "OOPS";
    }
    sequence = Number(sequence);
    let sequenceArray = [0, ];

    for (let i = 1; i <= sequence; i++) {
        if (i == 1) {
          sequenceArray.push(i)
        } else {
        sequenceArray.push(sequenceArray[i - 2] + sequenceArray[i - 1])
        }
    }

    //console.log(sequenceArray);
    return sequenceArray.pop();
}

module.exports = fibonacci
