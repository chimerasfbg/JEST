const {addCalculator,devCalculator,multiCalculator,subCalculator} = require("./cal");

test("Muliplication of 10 and 5 to equal 2", () => {
    expect(devCalculator(10,0)).toThrow("Number is zero");
  });
