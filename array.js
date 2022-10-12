const arrNumb = [1, 3, 5, 7, 9];

let result = {};

function minArr(arrNumb) {
  return Math.min(arrNumb)
}

function maxArr(arrNumb) {
  return Math.max(arrNumb);
}

function avg(arrNumb) {
  return Math.avg(arrNumb);
}

function leng(arrNumb) {
  return arrNumb.length;
}

module.exports = { minArr, maxArr, avg, leng };
