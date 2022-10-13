const arrNumb = [1, 3, 5, 7, 9];

function Analyze(arrayOfNum){
  
    let result = {}

    result.minimum = Math.min(...arrayOfNum)
    result.maximum = Math.max(...arrayOfNum)
    result.leng = arrayOfNum.length
    result.avg = arrayOfNum.reduce((a, b) => a + b, 0) / arrayOfNum.length;
  return result 
}

// function minArr(arrNumb) {
//   return Math.min(arrNumb)
// }

// function maxArr(arrNumb) {
//   return Math.max(arrNumb);
// }

// function avg(arrNumb) {
//   return Math.avg(arrNumb);
// }

// function leng(arrNumb) {
//   return arrNumb.length;
// }

// function resultt(){
//   return result = minArr()
// }

module.exports = {Analyze};

// minArr, maxArr, avg, leng,resultt,