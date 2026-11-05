// 1. Click on button
document.querySelector('#rollButton').addEventListener("click", e => {
    
    // 2. animate the die
    setDieImages("assets/die_rolling.gif")
    
    // 3. Land on a new random number
    setTimeout(() => {
        // This function will run after the timeout duration below
        document.querySelectorAll('#gameboard img').forEach(image => {
            const randomNumber = Math.ceil(Math.random() * 6);
            image.src = `assets/white_dice_${randomNumber}.gif`;
        });

        // Math.random()
        // Math.floor() Rounds down to nearest whole int
        // 0 - 1,



    }, 1500)
})

function setDieImages(imagePath) {
    document.querySelectorAll('#gameboard img').forEach(image => {
        // Change image src to imagePath
        image.src = imagePath;
    });
}