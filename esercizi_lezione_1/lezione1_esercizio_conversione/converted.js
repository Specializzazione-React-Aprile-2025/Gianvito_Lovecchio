import { people } from './data.js';

//funzione getEmails
const getEmails = (people, options) => {
    //assegno un oggetto vuoto ad options nelk caso in cui non venga passato
    options = options || {}

    //destructuring dell'oggetto options per stabilire se abbai o meno il nome e se sia attivo o meno, in caso contrario asgno false
    const { withNames } = options || false;
    const { onlyActive } = options || false;

    //se onlyActive è true filtro l'array people in modo tale da avere solo le persone attive
    if (onlyActive) {
        people = people.filter(isActive)
    }

    //return utilizzando la funzione per ottenere il nome e la mail
    return people.map(getName).join(', ');
}



//funzione isActive
const isActive = (person) => person.isActive;



//funzione restituzione nome
const getName = (person, withNames) => {
    let result = '';
    if (withNames) {
        const { name } = person;
        const { email } = person;
        result = name + ' <' + email + '>';
    } else {
        const { email } = person;
        result = email;
    }
    return result;
}

//funzione getYoungest
const getYoungest = (people) => {
    const youngest = people.sort(sortAge).slice(0,1)
    const { age } = youngest[0];
    const { name } = youngest[0];
    return {age,name};    
};

//funzione ordinamento
const sortAge = (personA, personB) => personA.age - personB.age;



const emails = getEmails(people, {
    withNames: true,
  });
  console.log(emails);
  

  const youngest = getYoungest(people);
  const  { name } = youngest;
  const  { age } = youngest;
  console.log("La persona più giovane è " + name + " ed ha " + age + " anni.");