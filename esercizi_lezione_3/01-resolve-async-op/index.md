# Javascript Asincrono

## Resolve async op

### PRIMO ESERCIZIO

Partendo da una struttura dati che salva i modelli di auto presenti nel nostro store.

const databaseCars = [ 
    { brand: "BMW", model: "x-123"  },
    { brand: "Fiat", model: "500" }
]

Creare 2 funzioni con tempi di esecuzione diversi ( strutta setTimeout )
- Una funzione cicla sui nostri prodotti e stampa un output in console con i prodotti presenti in cars
- Una funzione si occuperá di inserire un nuovo modello di auto nel nostro db.
L'obiettivo é quello di regolarizzare la pila di funzioni in esecuzione riusciendo a trovare il risultato sperato.

Note:
Usa tutte le funzionalitá JavaScript che conosci per fare l'esercizio.

### SECONDO ESERCIZIO

Prova questo codice asincrono javascript e correggine l'esecuzione

```js
function delivringPizza() {
  console.log("Preparing...");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  })
}

function deliver() {
  delivringPizza();
  console.log("Delivered!");
}

deliver();
```
