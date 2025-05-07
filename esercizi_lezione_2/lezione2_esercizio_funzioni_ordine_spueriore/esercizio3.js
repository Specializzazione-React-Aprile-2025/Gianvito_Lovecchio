const list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
    { firstName: 'Luca', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 15, language: 'PHP' },
    { firstName: 'Mimmo', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 48, language: 'PHP' },
    { firstName: 'Ciccio', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  ];

  const sortDisc = (array) =>array.sort((a, b) => (b.age - a.age));
  
  const oldest = (array) => {
    const oldest = (sortDisc(array)).filter((el) => {
       return el.age === (sortDisc(array))[0].age;
    })
    return oldest;
  }

  
  console.log("Esercizio 3:");
  console.log(oldest(list1));