const agrCount = process.argv;
const firstArg = Number(process.argv[2]);
if (firstArg === NaN || firstArg == 1 || firstArg == 0) {
    console.log("1");
}
else{
    let fact = 1;
    for (let i = 2; i <= firstArg; i++) {
        fact *= i;
    }

    console.log(fact);

}