// 1. Select menu from the Dom
let menuButton = document.querySelector('.menu-btn');

// 2. Add an event listener to the menu button

// unnamed or anonymous funciton
menuButton.addEventListener("click", function (event) {  // One time use.
    // do this thing
    // do another thing

});

// arrow function (fat arrow =>)
menuButton.addEventListener("click", (e) => {
    // 3. toggle whether the links are displayed or not
    let nav = document.querySelector('nav');

    // if(nav.style.display === '') {
    //     nav.style.display = 'flex';
    // } else {
    //     nav.style.display = '';
    // }

    //ternary operator
    nav.style.display = nav.style.display === '' ? 'flex' : '';
    
    // 4. Toggle X animation fro menu button
    menuButton.classList.toggle('change');
     
});

// named functions
function toggleMenuLinks(event) {  // Nothing wrong with with this but we can make shortcuts

}
     