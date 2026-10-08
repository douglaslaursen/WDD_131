//1. Grab our HTML elemts
let gallerySection = document.querySelector('.gallery');
let modal = document.querySelector('dialog');
let modalImg = modal.querySelector('img');
let closeButton = modal.querySelector('.close-viewer')

// 2. Add an event Listener, when img clicked open modal
gallerySection.addEventListener('click', (event) => {
    console.log(event.target.src);
    if(event.target.src !== undefined) {
        // set the src image of modal
        modalImg.src = event.target.src.replace("-sm", "-full"); // with string malipeation we can replace the small with full
        
        // display modal
        modal.showModal();
        console.log(modal);
    }
});

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});