// 1. Functions
function nameOfFunction(name) {
    console.log("Hello functions! " + name);
    // string templante
    console.log(`Your name is ${name}`);
}
// Call the function, invoke, execute
nameOfFunction("Doug"); 

// 2. Event Listeners
    // Grab and element from the DOM to "listen" to! This is KEY
let selectBox = document.querySelector("#theme-select")
    // register an event listener on that element
    // witing for a specific thing to happen, then run a funciton
selectBox.addEventListener("change", changeTheme);

function changeTheme(event) {
    console.log("Change theme!");
    console.log(event.target.value);  // people shortens it to e. this shows the meat of .addEventListener. .target.value shows where the user clicks.
}


// 3. If  statement
let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

// the three === is really = to. it is the strict equality symble
function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
          