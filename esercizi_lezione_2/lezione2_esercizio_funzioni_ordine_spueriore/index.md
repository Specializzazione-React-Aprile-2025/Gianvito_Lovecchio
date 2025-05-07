# Selfwork - High-Order-Methods

* Usa metodi come map, filter, reduce o altro per risolvere i seguenti problemi, gli esercizi sono stati presi dalla piattaforma codewars.com

### PRIMO ESERCIZIO
* Il tuo team sta scrivendo un nuovo editor di testo elegante, e ti è stato assegnato il compito di implementare la numerazione delle righe. Scrivi una funzione che prenda una lista di stringhe e restituisca ogni riga preceduta dal numero corretto. La numerazione inizia da 1. Il formato è: n: string. Nota i due punti e lo spazio tra il numero e la stringa. 

ex. number([]) => []
    number(["a", "b", "c"]) => ["1: a", "2: b", "3: c"]

### SECONDO ESERCIZIO
* Scriveremo una funzione chiamata arrayDiff che accetterà due array, a e b, come argomenti. Ti vengono dati due array. L'obiettivo della funzione è di rimuovere tutti i valori in a che sono presenti in b. La funzione dovrebbe restituire l'array dopo che tutti i valori comuni sono stati rimossi.

ex. arrayDiff([], [4,5]) => []
    arrayDiff([3,4], [3]) => [4]
    arrayDiff([1,8,2], []) => [1, 8, 2]

## TERZO ESERCIZIO 

Ti verrà fornita una sequenza di oggetti che rappresentano i dati dei programmatori iscritti per partecipare al prossimo incontro di coding che stai organizzando.

Il tuo compito è restituire una sequenza che includa il programmatore più anziano. In caso di parità, includi tutti i programmatori senior della stessa età nell'ordine in cui sono elencati nell'array di input originale.

Ad esempio, dato il seguente array di input:

const list1 = [
   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
   { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
   { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
 ];

La tua funzione dovrebbe ritornare il seguente array: 

[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]


