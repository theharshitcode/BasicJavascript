function Factorial(num) {
    let i = 1;
    let fact = 1;
    while (i <= num) {
        fact *= i;
        i++;
    }
 return fact;
}

const num = prompt("Enter a Number : ");
const val = parseInt(num);

let root = Factorial(val);
console.log(`Factorial of ${num} is ${root}`)