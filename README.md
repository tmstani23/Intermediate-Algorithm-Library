# Intermediate-Algorithm-Library

#Under Development

# The algorithms are broken up as functions within the int_algo_js file.  Feel free to clone or copy them for use in personal projects.


List of Algorithms:

function sumRange(arr):
This function sums all numbers in a range and returns the total:
Example Call:
sumRange([1, 3]);
Output: 6


function uniqueArray(arr1, arr2):
Compare two arrays and return a new array 
with any items only found in one of the two given arrays, 
but not both. 
Example Call:
uniqueArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
Output: ["piglet", 4]

function convertToRoman(num)
Convert a number to roman numeral:
Example call:
convertToRoman(125);
Output:CXXV

function whatIsInAName(collection, source):
Search an array of objects(collection argument) 
Save all objects that match the (source argument) object's 
key/value pairs to a new array.
Example call:
whatIsInAName([{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
{ last: "Capulet" });
Output: [{first: "Tybalt", last: "Capulet"}]
