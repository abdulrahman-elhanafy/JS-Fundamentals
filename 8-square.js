const agrCount = process.argv;
const firstArg = process.argv[2];

let num = Number(firstArg);

if (!isNaN(num)) {
    for (let i = 0; i < num; i++) {
        let row = "";
        for (let j = 0; j < num; j++) {
        row += "x";
        }
        console.log(row);
    }
}
else{
    console.log("Missing size");
}