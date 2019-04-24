"use strict";

const fizzbuzz = require("./index");

describe("fizzbuzz", () => {
	it(`should print the numbers from 1 to 2`, () => {
		expect(fizzbuzz(2)).toEqual("1 2 ");
	});
	it(`substitute multiples of 3 for Fizz`, () => {
		expect(fizzbuzz(3)).toEqual("1 2 Fizz ");
	});
	it(`substitute multiples of 5 for Buzz`, () => {
		expect(fizzbuzz(6)).toEqual("1 2 Fizz 4 Buzz Fizz ");
	});
	it(`substitute multiples of 15 for FizzBuzz`, () => {
		expect(fizzbuzz(15)).toEqual(
			"1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz "
		);
	});
});
