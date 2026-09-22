// select an HTML element from the DOM
// save it to a local variable called heading
let  heading = document.querySelector("h1");

console.log(heading);

heading.style.color = "#00FF00";
heading.style.fontSize = "4em";
// CSS: font-size

// Challenge: Change something else yourself
heading.style.border = "2px solid black";
heading.style.display = "grid";
heading.style.textDecoration = "underline wavy";

// do everything one line
document.querySelector("P").style.color = "blue"; // one thing ever only time we need it

// there are different ways to select from the DOM
document.getElementById("topics"); //you can use this if you want but it is just for one element

// you can select more than one element at a time
console.log(document.querySelectorAll(".list")[0].style); // it is always a list even if it is a list of one

// apply a class to an element
let topicsClassList = document.querySelector("#topics").classList;

topicsClassList.add("special");
topicsClassList.toggle("special"); // toggle a class on and off. mostly in use with what the user is doing.



let selectElem = document.getElementById('webdevlist');

selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = codeValue;
})
                