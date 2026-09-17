let age = 33;
let name = "Brother Laursen"

console.log(age); //this is like print in python

age = 34;

console.log(age);
// var is the same as let

const eyeColor = "Green";
const policyDisclaimers = "Exclusions apply to vehicles registered in Michigan"; 

//eyeColor = "brown"; // can not reasign a constan variable and will give an error but will not show the error.


// you can declare your varialbe if you need it outside the scope
let favoriteColor = "";
// scope is swhere variables can be referenced
if(age == 34) {
    // we are now in a different scope
    // inside this scope, we can reference variables declared outside this scope
    console.log(name);

    // declare a varialbe in an inner scope
    let favoriteColor = "Green";
}

// console.log(favoriteColor); //does not work because favoriteColor in a different scope // with it now declared it should work but is empty

console.log(eyeColor);

const PI = 3.14;
let radius = 3;          

const one = 1;
const two = '2';             

let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
// console.log(student); //does not work, can't access a block variable outside the block


// Pull something from the page
document.querySelector("h1").style.color = favoriteColor;