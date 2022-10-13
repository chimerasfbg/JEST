const {Analyze} =require('./array')

// test("MIN Array test", () => {
//     expect(minArr(2,4,6,7)).toBe(2);
//   });
  
let grr = Analyze([1,2,3,4]) 

test("test min Array [1,2,3,4]", () => {
  expect(grr.minimum).toBe(1);
});

test("test max Array [1,2,3,4]", () => {
  expect(grr.maximum).toBe(4);
});

test("test leng Array [1,2,3,4]", () => {
  expect(grr.leng).toBe(4);
});
test("test avg Array 1,2,3,4", () => {
  expect(grr.avg).toBe(2.5);
});
