
//This function sums all numbers in a range and returns the total:
function sumRange(arr) {
    var arr2 = [];
    var maxN = Math.max(...arr);
    var minN = Math.min(...arr);
    //iterate through the input array starting at min and going until max:
    for (i=minN; i<=maxN; i++) {
        //push each number into a new array to get a range of numbers
        arr2.push(i);
    }
    
    /* reduce executes the callback function once for each element present in the array, 
      excluding holes in the array, receiving four arguments:
          accumulator
          currentValue
          currentIndex
          array 
      */
    var total = arr2.reduce(function(sum, value) {
        return sum + value;
  }, 0);
    //here the accumulator is sum, currentValue is same as index value
      //and return value is sum + currentValue
    //the second parameter 0 is the initial starting value
    //console.log(total);
    return total;
  }
  //sumRange([1, 4]);


  

//Compare two arrays and return a new array 
    //with any items only found in one of the two given arrays, 
    //but not both. 
function uniqueArray(arr1, arr2) {
  
  var newArr = [];
  var arrLength;
  //set the arrLength variable to the largest of the two input arrays
  if (arr2.length > arr1.length) {
    arrLength = arr2.length;
  }
  else {
    arrLength = arr1.length;
  }
  //loop i times based on the longest array:
  for (i = 0; i < arrLength; i++) {
    //check arr2 to verify if it doesn't contain current index element of arr1:
    var checkArr2 = arr2.indexOf(arr1[i]) === -1;
    //check arr2 to verify if it doesn't contain current index element of arr1:
    var checkArr1 = arr1.indexOf(arr2[i]) === -1;
    //if the element isnt in arr1:
    if(checkArr2 && arr1[i] !== undefined){
      //push the element to the new array
      newArr.push(arr1[i]);
    }
    //if the element isnt in arr2:
    if(checkArr1 && arr2[i] !== undefined){
      //push the element to the new array
      newArr.push(arr2[i]);
    }
  }
  //console.log(newArr);
  return newArr;
}
//uniqueArray([1, "calf", 3, "piglet"], [7, "filly"]);

//Convert a number to roman numeral
function convertToRoman(num) {
  var digits = [];
  var resultSymb = [
  ];
  var result;
  var symbolDict = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  };
  
  digits = ("" + num).split("");
  
  function loopDigits(times, symbol) {
    for (i=0; i<times; i++){
        resultSymb.push(symbolDict[symbol])  
    }
  }

  function getOnes(num, multiplier){
    console.log(num)
    if(num=="0"){
      return undefined;
    }
    if (num <= 3) {
      loopDigits(num, 1 * multiplier);
    }
    if (num == 4) {
      resultSymb.push(symbolDict[1 * multiplier]);
      resultSymb.push(symbolDict[5 * multiplier]);
    }
    if (num == 5){
      resultSymb.push(symbolDict[5 * multiplier]);
    }
    if (num == 9) {
      resultSymb.push(symbolDict[1 * multiplier], symbolDict[10 * multiplier]);
    }
    
    else if (num > 5) {
      resultSymb.push(symbolDict[5 * multiplier]);
      loopDigits(num-5, 1 * multiplier);
    }
  }
  
  function getTens(num){
    console.log(num);
    if(num == "0"){
      return undefined;
    }
    if (num <= 3) {
      loopDigits(num, 10);
    }
    if (num == 4) {
      resultSymb.push(symbolDict[10]);
      resultSymb.push(symbolDict[50]);
    }
    if (num == 5) {
      resultSymb.push(symbolDict[50]);
    }
    if (num == 9) {
      resultSymb.push(symbolDict[10]);
      resultSymb.push(symbolDict[100]);
    }
    else if (num > 5) {
      resultSymb.push(symbolDict[50]);
      loopDigits(num-5, 10);
    }
  }
  function getHunds(num){
    if (num < 5){
      if(num == "0"){
        return undefined;
      }
      if (num <= 3) {
        loopDigits(num, 100);
      }
      if (num == 4) {
        resultSymb.push(symbolDict[100]);
        resultSymb.push(symbolDict[500]);
      }  
    }
    else if (num > 5){
      if (num == 9) {
        resultSymb.push(symbolDict[100]);
        resultSymb.push(symbolDict[1000]);
      }
      else {
        resultSymb.push(symbolDict[500]);
        loopDigits(num-5, 100);
      }
    }
    else {
      resultSymb.push(symbolDict[500]);
    }
  }
  
  if(digits.length == 1){
    getOnes(digits[0], 1);
  }
  if(digits.length == 2){
    getOnes(digits[0], 10);
    getOnes(digits[1], 1);
  }
  if(digits.length == 3){
    getOnes(digits[0], 100);
    getOnes(digits[1], 10);
    getOnes(digits[2], 1);
  }
  if(digits.length == 4){
    getOnes(digits[0], 1000);
    getOnes(digits[1], 100);
    getOnes(digits[2], 10);
    getOnes(digits[3], 1);
  }
  else if(digits.length >=5) {
    alert("You may only enter numbers below ten-thousand!");
  }
  // if(digits.length == 2){
  //   getTens(digits[0], 1);
  //   getOnes(digits[1], 10);
    
  // }
  // if(digits.length == 3){
  //   getHunds(digits[0]);
  //   getTens(digits[1]);
  //   getOnes(digits[2]);
    
  // }
 
  
 
 
  result = resultSymb.join("");
 
  
  console.log(result);
  return result;
  
}
convertToRoman(12565);