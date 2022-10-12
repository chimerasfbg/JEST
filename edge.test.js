const {addCalculator,devCalculator,multiCalculator,subCalculator} = require("./cal");

test("Division of 10 and 5 to equal 2", () => {
    expect(() =>devCalculator(10,0)).toThrow(Error);
  });

  test("addition of 2 and 3 to equal 5", () => {
    expect(() => addCalculator(2)).toThrow(Error);
  });
  
  test("Muliplication of 5 and 3 to equal 15", () => {
    expect(() => multiCalculator(5, "s")).toThrow(Error)
  });