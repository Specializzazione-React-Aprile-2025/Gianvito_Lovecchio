import { fetchJokes } from "./index.js";

async function setDomElement() {
    const data = await fetchJokes();
    const jokesWrapper = document.querySelector("#jokes");

    data.forEach((el) => {
        let joke = document.createElement("div");
        joke.classList.add("col-3", "my-3", "px-3", "bg-secondary-subtle", "shadow", "p-3", "rounded");
        joke.innerHTML = `
            <small class="px-3 my-2 text-white bg-danger border border-danger rounded">${el.category} </small>
            <h5 class="my-2">${el.joke} </h5>
        `
        jokesWrapper.appendChild(joke);
        console.log(joke);
        joke = "";
    })
}

setDomElement(jokes);