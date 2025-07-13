const agrCount = process.argv;
function add(a, b){
    return a + b;
}
let num1 = Number(process.argv[2]);
let num2 = Number(process.argv[3]);

console.log(add(num1 , num2))