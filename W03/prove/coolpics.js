// Getting the Menu Button to work
let menuButton = document.querySelector('.menu-toggle');

menuButton.addEventListener("click", (e) => {
    let nav = document.querySelector('nav');
    nav.style.display = nav.style.display === '' ? 'flex' : '';    
});

// Expanding the pictures
let picGrow = document.getElementById("gallery");

picGrow.addEventListener("click", (e) => {
    
})