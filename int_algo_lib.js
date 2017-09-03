
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

//Convert a number to roman numeral:
function convertToRoman(num) {
  //create an array to hold the digits and another to hold the symbols
  var digits = [];
  var resultSymb = [];
  var result;
  //create a dictionary that matches digit values to symbols:
  var symbolDict = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  };
  //split the number into separate digits and store in digits array:
  digits = ("" + num).split("");
  
  //A function for adding multiples of the same symbol:
  function loopDigits(times, symbol) {
    //loop for the length of times
    for (i=0; i<times; i++){
      //push each symbol into the result symbol array  
      resultSymb.push(symbolDict[symbol]);  
    }
  }
  //The main function for converting numbers to symbols
  //It takes a number and multiplier and converts them into symbols
  //then saves the symbols in the resultsymb array
  function getSymbols(num, multiplier){
    //console.log(num);
    //if the number is zero pass:
    if(num=="0"){
      return undefined;
    }
    if (num <= 3) {
      //loop num times and place a single symbol for each iteration
      //multiplier is used to select the magnitude of the base symbol
      //ex: 1, 10, 100, 1000
      loopDigits(num, 1 * multiplier);
    }
    if (num == 4) {
      //add a 1 symbol 
      resultSymb.push(symbolDict[1 * multiplier]);
      //add a 5 symbol to the resultSymb array
      resultSymb.push(symbolDict[5 * multiplier]);
    }
    if (num == 5){
      resultSymb.push(symbolDict[5 * multiplier]);
    }
    if (num == 9) {
      //add a 1 symbol and a 10 symbol to the result array
      resultSymb.push(symbolDict[1 * multiplier], symbolDict[10 * multiplier]);
    }
    
    else if (num > 5) {
      //add a 5 symbol
      resultSymb.push(symbolDict[5 * multiplier]);
      //loop num times and add a 1 symbol each time
      loopDigits(num-5, 1 * multiplier);
    }
  }
 
  //If the length of the digits array is 1
  //then the number is one digit long
  if(digits.length == 1){
    //Call get symbols function with 
      //digits[0] as the number and 1 as the multiplier
    getSymbols(digits[0], 1);
  }
  if(digits.length == 2){
    //digits[0] as the number and 10 as the multiplier
    getSymbols(digits[0], 10);
    getSymbols(digits[1], 1);
  }
  if(digits.length == 3){
    //digits[0] as the number and 100 as the multiplier
    getSymbols(digits[0], 100);
    getSymbols(digits[1], 10);
    getSymbols(digits[2], 1);
  }
  //If the length of the digits array is 4
  //then the number is 4 digits long
  if(digits.length == 4){
    //digits[0] as the number and 100 as the multiplier
    getSymbols(digits[0], 1000);
    getSymbols(digits[1], 100);
    getSymbols(digits[2], 10);
    getSymbols(digits[3], 1);
  }
  //If the input number is 5 or greater
  //alert the user and do nothing:
  else if(digits.length >=5) {
    alert("You may only enter numbers below ten-thousand!");
  }
  
  result = resultSymb.join("");
  //console.log(result);
  return result;
  
}
//Example call:
//convertToRoman(125);


function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  
  var sourceProps=Object.values(source);
  var sourceKeys=Object.keys(source);
  var sourceKey0 = sourceKeys[0];
  var sourceKey1 = sourceKeys[1];
  var sourceProp0 = sourceProps[0]
  //console.log(sourceProp0)
  var sourceProp1 = sourceProps[1]
  
  
  //iterate through the collections objects:
  for(object in collection) {
    //console.log(object);
    //iterate through the collections keys:
    for(key in collection[object]) {
      //console.log(key);
      if(key == sourceKey0){
        //console.log("true");
        
        if(collection[object][key] == sourceProp0){
          if(sourceProps.length > 1) {
            checkSource2();
          }
          else {
            arr.push(collection[object]);
            //console.log(sourceProp0);
          }
        }
      }  
    }
  }
  function checkSource2() {
    for(object in collection) {
      console.log(object);
      //iterate through the collections keys:
      for(key in collection[object]) {
        console.log(key);
        if(key == sourceKey1){
         
          if(collection[object][key] == sourceProp1){
            //console.log(sourceProp1);
            if(arr[object] != collection[object]){
              arr.push(collection[object]);
            }
            
          }
        }
      }
    }
  }
  console.log(arr);
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
