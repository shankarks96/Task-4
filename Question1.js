// a. Print Odd Numbers in an Array:

// Using an anonymous function

const getOddNumbers = function(arr) {
  const oddNumbers = [];
  for (let num of arr) {
      if (num % 2 !== 0) {
          oddNumbers.push(num);
      }
  }
  return oddNumbers;
};

// Using an IIFE
const oddNumbersArrayIIFE = (function(arr) {
  const oddNumbers = [];
  for (let num of arr) {
      if (num % 2 !== 0) {
          oddNumbers.push(num);
      }
  }
  return oddNumbers;
})([1, 2, 3, 4, 5]);

console.log(oddNumbersArrayIIFE);

 


// b. Convert all the strings to title caps in a string array:

// Anonymous function
const toTitleCase = function(strArr) {
  return strArr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
};

// IIFE
const titleCasedStrings = (function(strArr) {
  return strArr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
})(["apple", "banana", "cherry"]);
console.log(titleCasedStrings);



// c. Sum of all numbers in an array:

// Anonymous function
const sumArray = function(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
};

// IIFE
const total = (function(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
})([1, 2, 3, 4, 5]);
console.log([total]);



// d. Return all the prime numbers in an array:

// Anonymous function
const getPrimeNumbers = function(arr) {
  return arr.filter(num => {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      for (let i = 5; i * i <= num; i += 6) {
          if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
  });
};

// IIFE
const primes = (function(arr) {
  return arr.filter(num => {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      for (let i = 5; i * i <= num; i += 6) {
          if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
  });
})([2, 3, 5, 7, 9, 11]);
console.log(primes);


// e. Return all the palindromes in an array:

// Anonymous function
const getPalindromes = function(arr) {
  return arr.filter(str => {
      const reversedStr = str.split('').reverse().join('');
      return str === reversedStr;
  });
};

// IIFE
const palindromes = (function(arr) {
  return arr.filter(str => {
      const reversedStr = str.split('').reverse().join('');
      return str === reversedStr;
  });
})(["level", "hello", "radar", "world"]);
console.log(palindromes);



// f. Return median of two sorted arrays of the same size:

// Anonymous function
const findMedian = function(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  const mid = Math.floor(mergedArray.length / 2);
  if (mergedArray.length % 2 === 0) {
      return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
      return mergedArray[mid];
  }
};

// IIFE
const median = (function(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  const mid = Math.floor(mergedArray.length / 2);
  if (mergedArray.length % 2 === 0) {
      return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
      return mergedArray[mid];
  }
})([1, 3, 5], [2, 4, 6]);
console.log([median]);

  
// g. Remove duplicates from an array:

// Anonymous function
const removeDuplicates = function(arr) {
  return [...new Set(arr)];
};

// IIFE
const uniqueArray = (function(arr) {
  return [...new Set(arr)];
})([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueArray);


// h. Rotate an array by k times:

// Anonymous function
const rotateArray = function(arr, k) {
  k = k % arr.length; // Handle cases where k is greater than array length
  const rotatedArray = [...arr.slice(k), ...arr.slice(0, k)];
  return rotatedArray;
};

// IIFE
const rotated = (function(arr, k) {
  k = k % arr.length; // Handle cases where k is greater than array length
  const rotatedArray = [...arr.slice(k), ...arr.slice(0, k)];
  return rotatedArray;
})([1, 2, 3, 4, 5], 2);
console.log(rotated);

