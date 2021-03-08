add = (a,b) => a + b;

subtract = (a,b) => a - b;

sum = (a) => {
let total = 0;
a.forEach(value => {total += value;});
return total;
};

multiply = (a) => {
if (a.length) {
let total = 1;
a.forEach(value => {total *= value;});
return total;
};
};

power = (a,b) => a**b; 

function factorial(a) {
	if (a === 0) {return 1;};
	let factorialArray = [];
	if (a > 0) {
		for (let i = 1; i <= a; i++) {
			factorialArray.push(i);
		}
		return total = multiply(factorialArray);
	}	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}