const agrCount = process.argv;
const firstArg = process.argv[2]; // وصلنا هنا للعنصر الثالث من المصفوفه اللى انت بتكتبه بنفسك مش مسار للمكتبه و الملف
if (firstArg == undefined) {
    console.log("No argument");
}
else{
    console.log(firstArg);
}