// Write a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer:

// If the argument can’t be converted to an integer, print “Not a number”
// You must use console.log(...) to print all output
// You are not allowed to use var
// You are not allowed to use try/catch

const agrCount = process.argv;
const firstArg = process.argv[2];

let num = Number(firstArg);  // هنا بنحول العنصر لرقم عشان نقدر نستخدمه فى العمليات الحسابيه

if (!isNaN(num)) {  // the NaN worf mean (Not a Number) so we must use (!) to make the condition true if it a number 
    console.log("My number: " + firstArg);
}
else{
    console.log("Not a number");
}