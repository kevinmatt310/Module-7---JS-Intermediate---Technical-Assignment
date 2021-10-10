//Soal nomor 1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse () {
        const newArr = [];
    for (let index = arr.length-1; index >= 0; index--) {
        const element = arr[index];
        newArr.push(element);
    }
    return newArr;
    }

    

const hasil = reverse(arr);
const hasil2 = reverse(arr2);
console.log(arr, hasil);
console.log(arr2, hasil2);

//Soal nomor 2

const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  
  function getGreaterThanAverage(arr) {
    let avg = getAverage(arr);
    let numbers = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > avg) {
        numbers.push(arr[i]);
      }
    }
  
    return numbers;
  }

  const overAverageArr1 = getGreaterThanAverage (arr1);
  const overAverageArr2 = getGreaterThanAverage (arr2);
  const length1 = overAverageArr1.length;
  const length2 = overAverageArr2.length;
  
  console.log(length1);
  console.log(length2);

  //Soal nomor 3
  const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];

  
function multi (arr, num) {
  const arr1d = [].concat.apply([], arr);

 if (arr1d.indexOf(num) !== -1) {
    return arr1d.indexOf(num);

 } else {
    return null;
 }
}
console.log (multi(arr, 3));