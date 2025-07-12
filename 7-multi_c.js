const agrCount = process.argv;
const firstArg = process.argv[2];

let num = Number(firstArg);

if (!isNaN(num)) {
    for (let i = 0; i < num; i++) {
        console.log("C is fun");
    }
}
else{
    console.log("Missing number of occurrences");
}