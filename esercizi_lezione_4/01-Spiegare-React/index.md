# Intro React

## Come funziona React

React è una libreria base javascript che basa tutto il suo funzionamento sui componenti. L'idea di base è quella di cercare di rendere componenti quanti più elementi bossibili, andando a farfe in modo che la pagina diventi una sorta di "contentiore" di elementi, in maniera tale da rendere il codice molto più snello. I componenti sono delle funzioni, il che permette che ogni componente possa esserre riutilizzato, cambiando semplicemente i parametri.

Dimostra come funziona REACT

* Disegna o fornisci una descrizione di come funziona un processo di rendering in react

Per spiegare cosa sia il rendering occorre spiegare anche altri concetti prima. In react ogni componente ha uno state proprio, lo state è un oggetto di dati dinamici che possono cambiare nel tempo e ogni volta che un componente subisce delle variazioni, lo state di questo componente muta (attraverso useState). A questo punto entra in gioco il rendering, che è la funzione che restituisce un file jsx che è in sostanza quello che viene mostrato all'utente.
- Ogni volta che lo state di un componente varia viene eseguita automaticamente la funzione di rendering che va a mutare visivamente un componente;
- dopo la funzione di rendering, viene generato un virtual DOM, ovvero una copia "istantanea" del DOM reale;
- questo virtual DOM viene confrontato con il DOM precedente, questa operazione prende il cone di diffing;
- dal diffing scaturiscono le modifiche che il o i componenti hanno subito e vengono aggironati nel DOM reale.
Tutto questo serve per snellire le operazioni effettuate sul DOM reale, cosi ogni volta che qualcosa cambia non bisognerà modificare e/o ricaricare tutto il DOM reale per intero, ma solo le parti che hanno subito un cambiamento.