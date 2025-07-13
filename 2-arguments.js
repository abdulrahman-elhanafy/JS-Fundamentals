// Write a script that prints a message depending of the number of arguments passed:

// If no arguments are passed to the script, print “No argument”
// If only one argument is passed to the script, print “Argument found”
// Otherwise, print “Arguments found”
// You must use console.log(...) to print all output
// You are not allowed to use var
// Reference: process.argv ("https://nodejs.org/api/process.html#process_process_argv")


const agrCount = process.argv.length - 2; // طرحنا 2 عشان مش عاوزين اول عنصرين من المصفوفه اللى هم مسارات المكتبه و الملف

if (agrCount === 0) {
    console.log("No argument");
}
else if (agrCount === 1) {
    console.log("Argument found");
}
else{
    console.log("Arguments found");
}