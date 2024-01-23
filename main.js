//1
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}


let result = power(2, 3); 
alert(result);

//2
function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}


let greatestCommonDivisor = gcd(48, 18); 
alert(greatestCommonDivisor);

//3
function maxDigit(number) {
    if (number < 10) {
        return number;
    } else {
        let lastDigit = number % 10;
        let remainingDigits = Math.floor(number / 10);
        let maxInRemaining = maxDigit(remainingDigits);
        return Math.max(lastDigit, maxInRemaining);
    }
}


let maxDigitResult = maxDigit(74921); 
alert(maxDigitResult);

//4
function isPrime(number, divisor = 2) {
    if (number <= 2) {
        return (number === 2);
    }
    if (number % divisor === 0) {
        return false;
    }
    if (divisor * divisor > number) {
        return true;
    }
    return isPrime(number, divisor + 1);
}


let isPrimeResult = isPrime(17); 
alert(isPrimeResult);

//5
function primeFactors(number, divisor = 2) {
    if (number <= 1) {
        return [];
    }
    if (number % divisor === 0) {
        return [divisor, ...primeFactors(number / divisor, divisor)];
    } else {
        return primeFactors(number, divisor + 1);
    }
}


let primeFactorsResult = primeFactors(18); 
alert(primeFactorsResult);

//6
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


let fibonacciResult = fibonacci(6);
alert(fibonacciResult);

