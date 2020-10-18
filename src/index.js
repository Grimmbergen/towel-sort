
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return !matrix ? [] : matrix.map((elArr, index) => elArr = index % 2 !== 0 ? elArr.reverse() : elArr).flat(Infinity);
}
