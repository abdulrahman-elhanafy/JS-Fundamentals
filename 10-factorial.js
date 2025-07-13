const agrCount = process.argv;
const firstArg = Number(process.argv[2]);
function factorial(num) {
    if (num === NaN || num == 1 || num == 0) {
        return("1");
    }
    else{
        let fact = 1;
        for (let i = 2; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }
}

console.log(factorial(firstArg));