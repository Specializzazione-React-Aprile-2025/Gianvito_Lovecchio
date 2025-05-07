const Studente = {
    nome: "Mario",
    eta: 20,
    materie: ["matematica", "scienze","storia","italiano", "geografia"],
    indirizzo: {
        strada: "Via Sparano, 100",
        citta: "Bari",
        stato: "Italia"
    },
}

const { nome: nomeStudente } = Studente;
const { eta } = Studente;
const { materie: [,materia] } = Studente;
const {indirizzo: { strada} } = Studente;
const {indirizzo: { citta} } = Studente;
const {indirizzo: { stato} } = Studente;

console.log("Lo studente si chiama " + nomeStudente);
console.log("L'eta di " + nomeStudente + " è " + eta);
console.log("La materia preferita di " + nomeStudente + " è " + materia);
console.log("Lo studente vive in " + strada + ", a " + citta + ", in" + stato);