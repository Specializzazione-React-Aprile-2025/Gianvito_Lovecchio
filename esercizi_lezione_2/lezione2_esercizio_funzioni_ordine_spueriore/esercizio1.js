const arrayProva = ["ciao, come stai oggi?", "spero bene", "io sto bene", "grazie!"];

const numeratedString = (array) =>{
    const sortedArray = [];
    array.map((el,index)=>{
        sortedArray.push(index+1 + ": "+ el)
    })
    return sortedArray;
}

console.log("Esercizio 1: \n" + numeratedString(arrayProva));