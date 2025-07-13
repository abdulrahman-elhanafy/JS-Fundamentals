const agrCount = process.argv;
const firstArg = process.argv[2];

let num = Number(firstArg);  // هنا بنحول العنصر لرقم عشان نقدر نستخدمه فى العمليات الحسابيه

if (!isNaN(num)) {  // the NaN worf mean (Not a Number) so we must use (!) to make the condition true if it a number 
    console.log("My number: " + firstArg);
}
else{
    console.log("Not a number");
}