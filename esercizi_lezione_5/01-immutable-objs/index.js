const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    publisher: "J. B. Lippincott & Co.",
    genres: ["Southern Gothic", "Coming-of-age", "Historical Fiction"],
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949,
    publisher: "Secker & Warburg",
    genres: ["Dystopian", "Political Fiction", "Social Science Fiction"],
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    publisher: "Charles Scribner's Sons",
    genres: ["Modernist Literature", "Jazz Age", "Tragedy"],
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publicationYear: 1813,
    publisher: "T. Egerton, Whitehall",
    genres: ["Romance", "Satire", "Regency Romance"],
  },
  {
    id: 5,
    title: "Brave New World",
    author: "Aldous Huxley",
    publicationYear: 1932,
    publisher: "Chatto & Windus",
    genres: ["Dystopian Fiction", "Social Science Fiction", "Science Fiction"],
  },
];




// 1. Aggiungi un nuovo book all'array:
// console.log(books);
const newBook = {
  id: 6,
  title: 'The Catcher in the Rye',
  author: 'J. D. Salinger',
  publicationYear: 1951,
  publisher: 'Little, Brown and Company',
  genres: ['Bildungsroman', 'Realistic Fiction']
};
// funzione di ggiunta nuovo liblro
const updatedBooks1 = (array, newElement) => [...array, newElement];
// console.log(updatedBooks1);




// 2. aggiorna l'anno di pubblicazione del book con ID 3 al 1922:
// console.log(books);
const updatedBooks2 = (array, itemId, newValue) => {
  return array.map((el) => {
    if (el.id === itemId) {
      return{
        ...el,
        publicationYear: newValue
      };
    }
    return el;
  });
}
// console.log(updatedBooks2(books, 3, 1922));





// 3. Aggiungi un nuovo genere, "Romantic Novel", al book con ID 4:
// console.log(books);
const updatedBooks3 = (array, itemId, newGenre) => {
  return array.map((el) => {
    if (el.id === itemId) {
      return {
        ...el,
        genres: [...el.genres, newGenre]
      }
    }
    return el;
  });
}
// console.log(updatedBooks3(books, 4, 'Romantic Novel'));




// 4. Aggiungi l'autore al book con ID 2 di nome "Eric Blair" (George Orwell's real name):
// console.log(books);
const updatedBooks4 = (array, bookId, newAuthor) => {
  return array.map((el) => {
    // se il campo autore non è un array, lo trasformo in array per poi inserire il nuovo nome
    if (el.id === bookId) {
      console.log(el);
      const originalAuthor = Array.isArray(el.author) ? el.author : [el.author];
      return {
        ...el,
        author: [...originalAuthor, newAuthor]
      }
    }
    return el;
  });
}
// console.log(updatedBooks4(books, 2, 'Eric Blair'));




// 5. Rimuovi il genere "Coming-of-age" dal book con ID 1:
console.log(books)
const updatedBooks5 = (array, itemId, genreToRemove) => {
  return array.map((el) => {
    if (el.id === itemId) {
      const newGenres = el.genres.filter((genre) => genre !== genreToRemove);
      return{
        ...el, 
        genres: newGenres
      }
    }
    return el;
  })
};
console.log(updatedBooks5(books, 1, 'Coming-of-age'));