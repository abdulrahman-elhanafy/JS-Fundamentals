const agrCount = process.argv;
const firstArg = Number(process.argv[2]);
function factorial(num) {
    if (num === NaN || num == 1 || num == 0) {
        return("1");
    }
    else{
        let fact = 1;8     // بدأنا من واحد عشان مش محتاجين ال0
        for (let i = 2; i <= num; i++) {  // بدأنا ب2 عشان الضرب فى 1 ملوش لازمه فمش محتاجينه
            fact *= i;
        }
        return fact;
    }
}

console.log(factorial(firstArg));