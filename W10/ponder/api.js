// synchronous is like a in person class when you are learning and growing togeaterh
// asynchronous is like an online class when you can do things on your own.

// asynchronous are independent and can be used when ever...

// API calls are asynchronous
async function getCatFact() {
    const url = "https://catfact.ninja/fact";

    const response = await fetch(url);

    const data = await response.json();

    console.log(data.fact);

    displayFact(data.fact);
}


// Get the cat facts when button is clicked. 
document.querySelector("button") .addEventListener("click", e => {
    getCatFact();

});

function displayFact(fact) {
    document.querySelector("section").innerHTML = `<p> ${fact}</p>`;
}