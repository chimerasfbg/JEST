const {addCalculator,devCalculator,multiCalculator,subCalculator} = require("./cal");

test("addition of 2 and 3 to equal 5", () => {
  expect(addCalculator(2, 3)).toBe(5);
});

test("Muliplication of 10 and 5 to equal 2", () => {
  expect(devCalculator(10,5)).toBe(2
      );
});

test("Muliplication of 5 and 3 to equal 15", () => {
  expect(multiCalculator(5, 3)).toBe(15
      );
});

test("Substitution of 5 and 3 to equal 2", () => {
  expect(subCalculator(5, 3)).toBe(2
      );
});