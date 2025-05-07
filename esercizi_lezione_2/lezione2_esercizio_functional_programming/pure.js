const nome = " Nico";
const saluto = "Ciao"; 

function stampaSaluto() {
  console.log(saluto + nome)
}

// Converti la funzione in funzione PURA
function stampaSaluto(nome, saluto){
  const messaggio = saluto +", "+ nome + "!";
  return messaggio;
}

console.log(stampaSaluto("Nico", "Ciao"));