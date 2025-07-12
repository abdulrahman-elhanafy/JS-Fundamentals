const agrCount = process.argv;
const firstArg = process.argv[2];

let num = Number(firstArg);

if (!isNaN(num)) {
    console.log("My number: " + firstArg);
}
else{
    console.log("Not a number");
}