const agrCount = process.argv.length - 2;

if (agrCount === 0) {
    console.log("No argument");
}
else if (agrCount === 1) {
    console.log(process.argv[2]);
}