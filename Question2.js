
// a. Print odd numbers in an array:

const getOddNumbers = (arr) => {
    return arr.filter(num => num % 2 !== 0);
};

const oddNumbers = getOddNumbers([1, 2, 3, 4, 5]);
console.log(oddNumbers);



// b. Convert all the strings to title caps in a string array:

const toTitleCase = (strArr) => {
    return strArr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
};

const titleCasedStrings = toTitleCase(["apple", "banana", "cherry"]);
console.log(titleCasedStrings);


// c. Sum of all numbers in an array:

const sumArray = (arr) => {
    const total = arr.reduce((acc, num) => acc + num, 0);
    return [total];
};

const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);



// d. Return all the prime numbers in an array:

const getPrimeNumbers = (arr) => {
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

const primes = getPrimeNumbers([2, 3, 5, 7, 9, 11]);
console.log(primes);


// e. Return all the palindromes in an array:

const getPalindromes = (arr) => {
    return arr.filter(str => {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    });
};

const palindromes = getPalindromes(["level", "hello", "radar", "world"]);
console.log(palindromes);



