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