// Soal nomor 1

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray (array) {
  if(array.length === 0){
      return 0;
  }
  function add(array, i){
     
      if(i === array.length-1){
          return array[i];
      }
      return array[i] + add(array, i+1);
  }

  return add(array, 0);

};

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// Soal nomor 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfAvg (array) {
  if(array.length === 0){
      return 0;
  }
  function add(array, i){
     
      if(i === array.length-1){
          return array[i];
      }
      return array[i] + add(array, i+1);
  }

  return add(array, 0)/array.length;

};

const avg1 = sumOfAvg(arr1);
const avg2 = sumOfAvg(arr2);

function countAboveAvg(arr, avg) {

  let numbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= avg) {
      numbers.push(arr[i]);
    }
  }
  return numbers;
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1.length);
console.log(totalAboveAvg2.length);

// Soal nomor 3

const arr = [1, 2, 3, 4, 5];

function searchInArray (array,num) {
   var arr = [];
  if(array.length === 0){
      return 0;
  }
  function add(array, i){
      arr.push(array[i])

      if(i === array.length-1){
          return array[i];
      }
      return add(array, i+1);
  }

   add(array, 0);
  if (arr.indexOf(num) == -1) {
      console.log("angka tidak ditemukan")
  }
  else{
    console.log("Angka ditemukan pada index: "+arr.indexOf(num))
  }

};

searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);



