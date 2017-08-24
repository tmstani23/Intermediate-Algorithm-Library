
//This function sums all numbers in a range and returns the total:
function sumAll(arr) {
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
    console.log(total);
    return total;
  }
  sumAll([1, 4]);