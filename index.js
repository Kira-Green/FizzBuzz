function fizzbuzz(input) {
	let output = "";
	for (i = 0; i < input; i++) {
		if ((i + 1) % 15 == 0) {
			output = output + "FizzBuzz ";
		} else if ((i + 1) % 3 == 0) {
			output = output + "Fizz ";
		} else if ((i + 1) % 5 == 0) {
			output = output + "Buzz ";
		} else {
			output = output + (i + 1) + " ";
		}
	}
	return output;
}

module.exports = fizzbuzz;
