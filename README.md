# Intermediate-Algorithm-Library

### The algorithms are broken up as functions within the int_algo_js file.  Feel free to clone or copy them for use in personal projects.

# List of Algorithms:

## Number Functions


**function sumRange(arr):** This function sums all numbers in a range and returns the total.

Example Call: sumRange([1, 3]);

Output: 6


**function convertToRoman(num):** 
Convert a number to roman numeral.
Example call: convertToRoman(125);

Output:CXXV


**function sumPrimes(num):** A function that sums all primes up to and including an input number.

Example call: sumPrimes(20);

Output: 77


**function truthCheck(collection, pre):** This function checks if the predicate (second argument) 
is truthy on all elements of a collection (first argument).

Example Call:
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, 
  {"name": "FastFoward", "onBoat": null}], "onBoat"); 

Output: false


**function addTogether():**
This function sums two arguments together. 
If only one argument is provided, 
then it returns a function that expects one argument and returns the sum.

Example Call:
addTogether(3)(3);

Output: 6


**function sumFibs(num):**
Return the sum of all odd Fibonacci numbers 
that are less than or equal to the input number.

Example Call:
sumFibs(75025);

Output: 135721


## Array Functions:


**function uniqueArray(arr1, arr2):**
Compare two arrays and return a new array 
with any items only found in one of the two given arrays, 
but not both. 

Example Call:
uniqueArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);

Output: ["piglet", 4]


**function leastCommonMult(arr):**
A function that finds the smallest common multiple 
of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

Example Call:
leastCommonMult([13,1]);

Output: 360360


**function whatIsInAName(collection, source):**
Search an array of objects(collection argument) 
Save all objects that match the (source argument) object's 
key/value pairs to a new array.

Example call:
whatIsInAName([{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
{ last: "Capulet" });

Output: [{first: "Tybalt", last: "Capulet"}]


**function uniteUnique(arr):**
This function unites all unique input array 
elements into a single return array. 

Example Call:
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

Output: [1,3,2,5,4]


**function findElement(arr, func):**
A function that looks through an array (first argument) and 
returns the first element in the array that passes a truth test (second argument).
Example Call
findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });
Output: 8


**function dropElements(arr, func):**
Drop the elements of an array (first argument), 
starting from the front, until the predicate (second argument) returns true.

Example Call:
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

Output: [3, 4]


**function mergeNested(arr):** 
This function merges nested arrays into one.

Example Call: 
mergeNested([1, [2, 3, [8, 9],{}, 4,]]);

Output: [1, 2, 3, 8, 9, Object, 4];


## String Functions:

**function myReplace(str, before, after):**
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

Example call:
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

Output: He is Sitting on the couch


**function translatePigLatin(str):** 
Translate the provided string to pig latin.

Example call:
translatePigLatin("tree");

Output: eetray


**function dnaPair(str):** 
Match a dna character string to its pairs and encapsulate the pair in an array.
Can be done on a sequence of characters

Example call:
dnaPair("ATCGA");

Output: 

0: Array(2) ["A", "T"]

1: Array(2) ["T", "A"]

2: Array(2) ["C", "G"]

3: Array(2) ["G", "C"]

4: Array(2) ["A", "T"]


**function replaceMissing(str):** 
Output the missing letter in the passed letter range and return it.

Example call:
replaceMissing("abce");

Output: d


**function convertHTML(str):**
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string, to their corresponding HTML entities.

Example Call:
convertHTML("< Dolce & Gabbana < are \" \'ftw ");

Output: &lt; Dolce &amp; Gabbana &lt; are &quot; &apos;ftw 


**function spinalCase(str):**
Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes.

Example Call:
spinalCase('AllTheSmallThings');

Output: all-the-small-things

**function binaryAgent(str):**
This function translates a binary string to English

Example Call:
binaryAgent(`01000001 01110010 01100101 01101110 00100111 
01110100 00100000 01100010 01101111 01101110 
01100110 01101001 01110010 01100101 01110011 00100000 01100110 
01110101 01101110 00100001 00111111`);

Output: Aren't bonfires fun!?


## Other Functions:

**function checkBoo(bool):**
Check if a value is classified as a boolean primitive. Return true or false.

Example Call:
checkBoo("null");

Output: false
