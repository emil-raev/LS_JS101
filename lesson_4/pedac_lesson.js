function rowSum(row) {
  let rowArray = [];

  for (let number = 2, currentRow = 1; currentRow <= row; number += 2) {
    if (rowArray.push(number) === currentRow) {
      if (currentRow !== row) {
        rowArray.length = 0;
      }
      currentRow++;
    }
  }
  return rowArray.reduce((acc, nxt) => acc + nxt);
}

console.log(rowSum(4), rowSum(5), rowSum(3));