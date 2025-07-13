const agrCount = process.argv;
const firstArg = process.argv[2];

let num = Number(firstArg);

if (!isNaN(num)) {
    for (let i = 0; i < num; i++) {
        let row = ""; // عملنا دا عشان نعرف ان روو دا سترينج 
        for (let j = 0; j < num; j++) {
        row += "X"; // عملنا دى عشان مش هنقدر نطبع كل عدداكس جمب بعض فى سطر واحد 
        }
        console.log(row); // فبنضطر نخلى مجموعة اكس مع بعض سطر واحد و نطبع السطر على بعضه
    }
}
else{
    console.log("Missing size");
}