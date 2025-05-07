
const url = "https://v2.jokeapi.dev/joke/Any?type=single&amount=3";

export async function fetchJokes() {

    const response = await fetch(url);
    const data = await response.json(); // devi attendere qui
    return data["jokes"];
}
// export const jokes = fetchJokes();
// Esegui la funzione e stampa il risultato
fetchJokes().then(data => {
    console.log('Risposta API:', data);
});
