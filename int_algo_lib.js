
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
    //add the current element in the array
    //to an accumulating sum of previous values.
    var total = arr2.reduce((sum, value) =>{return sum + value;}, 0);
    console.log(total);
    return total;
  }
  //Example Call:
  //Should output 6
  //sumRange([1, 3]);


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
  console.log(newArr);
  return newArr;
}
//Example Call:
//Should output: ["piglet", 4]
//uniqueArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);

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
  console.log(result);
  return result;
  
}
//Example call:
//convertToRoman(125);

//search an array of objects for specific key and value pairs
//if the object matches the input object's keys and values 
//save the object in a new array
function whatIsInAName(collection, source) {
  //create empty array to hold result objects:
  var arr = [];
  //create variable to hold the source object's property values
  var sourceProps=Object.values(source);
  //create variable to hold the source object's keys
  var sourceKeys=Object.keys(source);
  //create variable that holds the first key
  var sourceKey0 = sourceKeys[0];
  //create variable that holds the 2nd key
  var sourceKey1 = sourceKeys[1];
  //create variable that holds the first property value
  var sourceProp0 = sourceProps[0]
  //create variable that holds the 2nd property value
  var sourceProp1 = sourceProps[1]
  //create flag variable for when a match is found
  var match = false;
  
  //Loop through the collection objects:
  for(object in collection) {
    //iterate through the collections keys:
    for(key in collection[object]) {
      //if the current collection key equals the first source key:
      if(key == sourceKey0){
        //if the current key's property equals 
        //the first source key's property:
        if(collection[object][key] == sourceProp0){
          //if there are more than one source properties:
          if(sourceProps.length > 1) {
            //the first key/property pair matches
            match = true;
          }
          else {
            //push the matching collection object to the result array
            arr.push(collection[object]);
            //console.log(sourceProp0);
          }
        }
      }
      //if the current collection key matches the second source key:
      if(key == sourceKey1){
        //if this key's property matches the second source property: 
        if(collection[object][key] == sourceProp1){
          //if the first key was also a match:
          if(match = true) {
              //reset the match flag
              match = false;
              //send the current collection object to the result array:
              arr.push(collection[object]);
          }
        }
      }
    }
  }      
      
  console.log(arr);
  return arr;
}
//Example call:
//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
function myReplace(str, before, after) {
  //break the string and arguments into separate strings:
  var sentence = String(arguments[0]);
  var replaceArg =  String(arguments[1]);
  var replaceWArg =  String(arguments[2]);
  //create a regular expression search string:
  var re = new RegExp(replaceArg);

  //loop through each letter in the to replace string:
  for (letterI in replaceArg) {
    //create variable that holds each character in the string
    var character = replaceArg[letterI];
    //if the character is uppercase:
    if(character == character.toUpperCase()){
      //Make the character in the replace with string uppercase:
      replaceWArg = replaceWArg.charAt(letterI).toUpperCase() + replaceWArg.substring(1);
    }
  }
  //Replace each instance of the re search string, in the sentence, with the replaceWArg:
  //Save to new result string:
  var replacedStr = sentence.replace(re, replaceWArg);
  
  console.log(replacedStr);
  return replacedStr;
}
//Example call:
//myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

function translatePigLatin(str) {
  //set flag variables for whether a character is a vowel:
  var isVowel = false;
  var isVowel2 = false;
  //save the first/second letter as vars:
  var firstL = str[0];
  var secondL = str[1];
  
  //create an array of vowels
  var vowels = ["a", "e", "i", "o", "u",];
  //loop through each vowel
  for (vowel in vowels) {
    //check saved first letter against a vowel to verify if consonant or vowel:
    if(vowels[vowel] == firstL) {
      //if vowel: set vowel to true
      isVowel = true;
    }
    //check second letter of the string against a vowel
    if(vowels[vowel] == secondL) {
      //if vowel: set vowel2 to true
      isVowel2 = true;
      
    }
  }
  //if first character is a vowel:
  if (isVowel == true){
    //add "way" to the end of the string  
    str = str + "way";
  } 
  //else if first and second characters are not vowels (they are consonants):
  else if (isVowel2 == false && isVowel == false){
    //remove first 2 characters from the string 
    str = str.substr(2);
    //append the first and second letter to the end of the string
    //add "ay" at the end:
    str = str + firstL + secondL + "ay";
  }   

  else {
    //remove first letter of string
    str = str.substr(1);
    //move first letter + "ay" to end:
    str = str + firstL + "ay";
  }

  console.log(str);  
  return str;
}
//Example call:
//translatePigLatin("tree");


//Match a dna character string to its pairs and encapsulate the pair in an array.
//Can be done on a sequence of characters
function dnaPair(str) {
  //Create encapsulating array:
  var finalArr = [];
  
  
  //split the input chars to their own arrays:
  var baseArr = str.split("");
  
  //loop through the base array 
  for (i=0; i<baseArr.length; i++){
    //if the character is G:
    switch(baseArr[i]) {
      case "G":
        //add in the character and it's opposite dna pair:
        finalArr.push(["G", "C"]);
        break;
      //repeat the same process for each character
      //adding in the base it's opposite dna pair:
      case "C":
      finalArr.push(["C", "G"]);
        break;
      case "A":
      finalArr.push(["A", "T"]);
        break;
      case "T":
      finalArr.push(["T", "A"]);
        break;
    }  
  }
  console.log(finalArr);
  return finalArr;
}
//example call:
//dnaPair("ATCGA");

//Output the missing letter in the passed letter range and return it.
function replaceMissing(str) {
  var finalStr;
  //loop through each character
  //if the char code is not one greater than the previous:
    //find the charcode that is one greater
    //return this char code as a letter
  
  //console.log(finalStr);
  for(i=0; i<str.length; i++) {
    //save current letter index
    var char = i;
    //save current letter char code:
    var charCode = str.charCodeAt(char);
    //save previous letter char code:
    var charCodePrev = str.charCodeAt(char - 1);
    //if the letter is not the first letter:
    if (char != 0) {
      //if the current letter's charCode - 1 does not equal the previous letter's charCode:
      //and the current letter's charCode is not NaN:
      if(charCode -1 != charCodePrev && charCode != NaN && charCode -1) {
        //plug the missing letter charCode, (charCode-1), into a js method that converts char code to letters
        //save correct letter into finalStr:
        finalStr = String.fromCharCode(charCode - 1);
        //console.log(finalStr);
      }
    }
  }
  console.log(finalStr);
  return finalStr;
}
//example call:
//replaceMissing("abce");


//Check if a value is classified as a boolean primitive. Return true or false.
function checkBoo(bool) {
  // In JavaScript there are 5 primitive types: undefined, null, boolean, string and number. 
  // Everything else is an object.

  //if the input is true or false it is a boolean
  //everything else is not a boolean primitive
  //thus return:
  var returnVal = (bool === true || bool === false);
  console.log(returnVal);
  return returnVal;
}
//Example Call:
//checkBoo("null");


//This function unites all unique input array elements into a single return array.
function uniteUnique(arr) {
  //convert all args to an array of arrays:
  var args = [...arguments]; 
  //create a final array consisting of the first input argument
  finalArr = arguments[0];
  //flatten args into single array
  var singleArr = args.reduce(function(a, b){
    return a.concat(b);
  }, [])
  //loop through the single array of arguments:
  for(i=0; i<singleArr.length; i++) {
    //if the final array does not contain 
      //the current element from the single array
    if (finalArr.indexOf(singleArr[i]) == -1) {
      //push the single array element into the final array
      finalArr.push(singleArr[i]);
    }
  }
  
  console.log(finalArr);
  return finalArr;
}
//Example Call:
//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
//in a string, to their corresponding HTML entities.
function convertHTML(str) {
  //create array that holds all the regex patterns used to match:
  var matchArray = [/&/gi, /</g, />/g, /"/g, /'/g ];
  //create array holding all the html character entities:
  var replaceArray = ["&amp;", "&lt;", "&gt;","&quot;","&apos;" ]
  //create final string variable and set it equal to the input string:
  var finalStr = str;
  //loop through the match array:
  for (i=0; i < matchArray.length; i++) {
    //search finalStr for match array element and replace with corresponding replace array element
    //update the finalStr:
    finalStr = finalStr.replace(matchArray[i], replaceArray[i])
    
  }
  console.log(finalStr);
  return finalStr;
}
//Example Call:
//convertHTML("< Dolce & Gabbana < are \" \'ftw ");


//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  //create variable that matches spaces within a string using regExp:
  var reSpace = /\s/g;
  //match lowercase letters or uppercase letters:
  var reCaps = /([a-z])([A-Z])/g;
  //match underscore characters:
  var reUnder = /_/g;
  //replace spaces in the string with dashes:
  str = str.replace(reSpace, '-');
  //replace uppercase letters with lowercase and put a dash in between:
  str = str.replace(reCaps, '$1-$2');
  //replace underscores with dashes:
  str = str.replace(reUnder, '-');
  //transform the string to lowercase:
  str = str.toLowerCase();
  console.log(str);
  return str;
}
//Example Call:
//spinalCase('AllTheSmallThings');


//Return the sum of all odd Fibonacci numbers that are less than or equal to the input number.
function sumFibs(num) {
  var numArr = []
  //loop from 0 to number
  for(i=0; i<num; i++) {
    //calculate current fib number:
      //sum the number two previous with the previous number:
    var currentNum = numArr[i-2] + numArr[i-1];
    //seed the first two values in the array as 1's
    if(i<2){
      numArr.push(1);
    }
    //as long as the current number is less than the input number:
    else if (currentNum <= num) {
      //push the current number into the array  
      numArr.push(currentNum); 
    }
  } 
  //Remove even numbers from the numArr array:  
  //loop for each item in the numArr array:
  numArr.forEach((item, index) => {
    //if the item divides evenly by two with no remainder
      //it is even
    if (item % 2 == 0) {
      //splice out 1 number at this index:
      numArr.splice(index, 1);
    }
  });
  //calculate the answer:
  //reduce the numArr array to the sum of each value in the array:
  var answer = numArr.reduce((sum, value) => {return sum + value;})
  console.log(numArr);
  console.log(answer);
  return answer;
}
//Example Call:
//sumFibs(75025);


//A function that sums all primes up to and including an input number.
function sumPrimes(num) {
  var res = 0;
  
    // Function to get the primes up to max in an array
    function getPrimes(max) {
      var sieve = [];
      var i;
      var j;
      var primes = [];
      for (i = 2; i <= max; ++i) {
        //if the value at this index is false:
        if (!sieve[i]) {
          // i has not been marked -- it is prime
          primes.push(i);
          //loop using conditions for finding prime numbers
          for (j = i << 1; j <= max; j += i) {
            //if it's prime mark true
            sieve[j] = true;
          }
        }
      }
  
      return primes;
    }
    // Add the primes
    var primes = getPrimes(num);
    for (var p = 0; p < primes.length; p++) {
      res += primes[p];
    }
    console.log(res);
    return res;
}
//example call:
//sumPrimes(20);


//Find the smallest common multiple of the provided parameters 
//that can be evenly divided by both, 
//as well as by all sequential numbers in the range between these parameters.
function leastCommonMult(arr) {
  //Assign arguments to separate variables;
  let argOne = arr[0];
  let argTwo = arr[1];
  //Set the smallest argument to argOne:
  if(argOne > argTwo) {
    argOne = arr[1];
    argTwo = arr[0]
  }
  //Assign other required variables
  let argRange = [];
  let answer = false;
  let result;
  let divided = 0;
  let maybeAnswer = argTwo;
  //Create a range of numbers between the two arguments
  for(i=argOne+1; i<argTwo; i++){
    //Save each # into argRange array:
    argRange.push(i);
  }
  //Loop until answer is false:
  while(answer == false) {
    //If maybeAnswer divides evenly(no remainder) with argOne:
    if((maybeAnswer / argOne) % 1 === 0){
      //For each value in the argRange array:
      argRange.forEach((val) =>{
        //If maybeAnswer and the value divide evenly:
        if((maybeAnswer / val) % 1 == 0){
        //Add one to the divided counter:
        divided = divided + 1; 
        }
      })
      //If divided = the number of vals in the argRange array:
      if(divided == argRange.length) {
        //save result as maybe answer
        result = maybeAnswer;
        //close while loop
        answer = true;
      }
      //reset counter:
      divided = 0;
    }
    //Maybe answer counts up by multiples of argTwo
    maybeAnswer = maybeAnswer + argTwo;
  }
  console.log(result);
  return result;
}
//Example Call:
//leastCommonMult([13,1]);

//A function that looks through an array (first argument) and 
//returns the first element in the array that passes a truth test (second argument).
function findElement(arr, func) {
  //search each element in the arr
  //execute the func argument(a function)
  //if the function returns true: return the found element
  //else if none are found it returns undefined
  console.log(arr.find(func));
  return arr.find(func);
}
//Example Call
//findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });


// Drop the elements of an array (first argument), 
// starting from the front, until the predicate (second argument) returns true.
function dropElements(arr, func) {
  answerArr = [];
 //Loop through the input array:
 for (i=0; i<arr.length; i++) {
    //if the current element in the array runs true
    //when passed through the 2nd argument input function
    if((func(arr[i]))===true) {
      //slice from the current element to the end of the array
      //and save segment in new answerArr array:
      answerArr = arr.slice(i);
      //end the loop;
      break;
    }
  }
  console.log(arr);
  console.log(answerArr);
  return answerArr;
}
  //A recursive solution:
  // function dropElements(arr, func) {
  //   if (arr.length === 0 || func(arr[0])) {
  //     return arr;
  //   } else {
  //     arr.shift();
  //     return dropElements(arr, func);
  //   }
  // }

//Example Call:
//dropElements([1, 2, 3, 4], function(n) {return n >= 3;});


//This function merges nested arrays into one.
function mergeNested(arr) {
  var flattenedArray = [];
  // Create function that adds an element if it is not an array.
  // If it is an array, then loop through it and use recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var element in arg) {
        flatten(arg[element]);
      }
    }
  };
  // Call the function for each element in the array
  arr.forEach(flatten);
  console.log(flattenedArray);
  return flattenedArray;
}

//Example Call: 
//mergeNested([1, [2, 3, [8, 9],{}, 4,]]);


//This function translates a binary string to English
function binaryAgent(str) {
  let finalArr = [];
  //split the string into an array of elements:
  let tempArr = str.split(' ');
  //map translated elements to finalArr array:
  finalArr = tempArr.map((element) => {
    //parse the element to its integer value
    //2 specifies the base of the element
    //base 2 is binary:
    let parsed = parseInt(element, 2);
    //get the translated character code:
    let converted = String.fromCharCode(parsed);
    //send the converted character into the array:
    return converted;
  });
  //join the array into a string:
  str = finalArr.join("")
  console.log(str);
  return str;
}
//Example Call:
// binaryAgent(`01000001 01110010 01100101 01101110 00100111 
// 01110100 00100000 01100010 01101111 01101110 
// 01100110 01101001 01110010 01100101 01110011 00100000 01100110 
// 01110101 01101110 00100001 00111111`);

//This function checks if the predicate (second argument) 
//is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre) {
  //Loop through the collection of objects:
  for(i=0; i < collection.length; i++) {
    //if the collection value is falsey:
    if(!collection[i][pre]) {
      console.log("false");
      return false;
    }
  }
  //if none of the collection values return false
  //then return true:
  console.log("true");
  return true;
}
//Example Call:
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, 
//   {"name": "FastFoward", "onBoat": null}], "onBoat"); 

// Create a function that sums two arguments together. 
// If only one argument is provided, 
// then return a function that expects one argument and returns the sum.
function addTogether() {
  //If there is only one argument and it is a number:
  if(arguments.length === 1 && typeof arguments[0] === "number") {
    //save the argument as a variable x:
    let x = arguments[0]
    //return a function with one arg, y:
    return function(y){
      //if y is not a number:
      if(typeof y != "number") {
        return undefined;
      }
      //else return the sum of the original input argument and the new function y argument:
      else {
        console.log(x+y)
        return x + y;
      }
    }
  };
  //if there are two arguments and the first or second argument is not a number:
  if (arguments.length === 2 && typeof arguments[0] != "number" || typeof arguments[1] != "number" ) {
    console.log("args not number")
    return undefined;
  }
  //return the sum of both arguments  
  let answer = arguments[0] + arguments[1];
  console.log(answer);
  return answer;
}
//Example Call:
//addTogether(3)(3);

  