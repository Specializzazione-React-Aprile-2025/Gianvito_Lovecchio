const x = [1, 2, 5, 9, 11, 32, 203];
const y = [2, 55, 5, 32, 9, 158];

const arrayDiff = (a, b) => {
    const arrayDiff1 = a.filter( (elA => !b.includes(elA) ) );
    const arrayDiff2 = b.filter( (elB => !a.includes(elB) ) );

    return arrayDiff2.concat(arrayDiff1);
}

console.log("Esercizio 2: \n" + arrayDiff(x, y)); 