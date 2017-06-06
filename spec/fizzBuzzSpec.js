describe("FizzBuzz", function() {
	it("should print 'fizz' for 3", function() {
		expect(FizzBuzz(3)).toEqual("fizz");
	});

	it("should print 'fizz' for 39", function() {
		expect(FizzBuzz(39)).toEqual("fizz");
	});

	it("should print 'fizz' for 93", function() {
		expect(FizzBuzz(93)).toEqual("fizz");
	});

	it("should print 'buzz' for 5", function() {
		expect(FizzBuzz(5)).toEqual("buzz");
	});

	it("should print 'buzz' for 35", function() {
		expect(FizzBuzz(35)).toEqual("buzz");
	});

	it("should print 'buzz' for 95", function() {
		expect(FizzBuzz(95)).toEqual("buzz");
	});
});

// describe("FizzBuzz", function() {
// 	var fizzBuzz;

// 	beforeEach(function() {
// 		fizzBuzz = new FizzBuzz();
// 	});

// 	describe("multiple of 3", function() {
// 		it("should print 'fizz' for 3", function() {
// 			expect(fizzBuzz(3)).toEqual("fizz");
// 		});
// 	});
// });

// describe('FizzBuzz', function() {

//   var fizzBuzz;

//   beforeEach(function() {
//     fizzBuzz = new FizzBuzz();
//   });

//   describe('multiples of 3', function() {
//     it('fizzes for 3', function() {
//       expect(fizzBuzz.play(3)).toEqual('Fizz');
//     });

//     it('fizzes for 6', function() {
//       expect(fizzBuzz.play(6)).toEqual('Fizz');
// 	});
//   });
// });