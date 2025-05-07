
// Primo esercizio 

const databaseCars = [
    { brand: "BMW", model: "x-123" },
    { brand: "Fiat", model: "500" }
];
const newCar = { brand: "Ferrari", model: "Roma" };

const showCars = (cars) => {
    cars.map(car => console.log(car));
}

const addCar = (car, arrayCars) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            arrayCars.push(car);
            resolve(arrayCars);
        }, 2000);
    });
}

async function showAllCars() {
    await addCar(newCar, databaseCars);
    console.log("Primo esercizio:");
    showCars(databaseCars);
}

showAllCars();

// Secondo esercizio

// Non funzionava correttamente perche nella funzione deliver() mancava ASyNC prima di "function deliver()" ed al suo interno mancava AWAIT prima di "delivringPizza()". 

function delivringPizza() {
    console.log("Preparing...");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    })
}

async function deliver() {
    console.log("Secondo esercizio:");
    await delivringPizza();
    console.log("Delivered!");
}

deliver();