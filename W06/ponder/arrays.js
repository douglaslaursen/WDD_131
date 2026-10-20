// Arrays in javascript
let courses = ["WDD131", "WDD130", "CSE110", "CSE210"]

// display the first course
console.log(courses[0]);
console.log(courses[3]);
// console.log(courses[4]); // undefined because array looking for index that does not exist. 
console.log(courses[courses.length - 1]); // finding the last one in the array

// normal for i loop    good for if you need to be currently at in the loop. change i. Mostly not used manyly used forEach.
console.log("");
for(let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

// Arrays methods/functions
console.log("");
courses.forEach((item) => {  
    console.log(item);
})

// making a course with object
let course = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 3,
    instructor: "Brother Warner",
}

console.log("");
console.log(course.instructor);

// array of objects
let coursesArrayOfObjects = [
    {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 2,
    instructor: "Brother Warner",
    },
    {
    name: "Web",
    code: "WDD1",
    credits: 2,
    instructor: "Brother Warner",
    },
]

//challenge: Print out the name and code of the second course in this array
console.log("");
console.log(coursesArrayOfObjects[1].name)

// 
let body = document.querySelector('body');
coursesArrayOfObjects.forEach((item) => {   //can replace item with course or anything.
    // build out an HTML div with course contents
    let courseDiv = `
        <div>
            <h2>${item.name}</h2>
            <p>Code: ${item.code}</p>
            <p>Instructor: ${item.instructor}</p>
        </div>
    
    `;
    // add that div to the body
    body.innerHTML += courseDiv;
})

//
function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
          

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
          

const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];