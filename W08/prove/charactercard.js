
// This is a Javascript object
const character = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'images/character.jpg',

    // Subtract 20 health when attacked
    attacked: function () {
        this.health -= 20;

        // Check if character is died
        if (this.health <= 0) {
            this.health = 0;
            alert(this.name + " has died!");
        }

        // Update card
        renderCharacter(this);
    },

    // Increase level
    levelUp: function () {
        this.level++;

        // Update card
        renderCharacter(this);
    },

    // Restart
    restart: function () {
        this.level = 5;
        this.health = 100;

        renderCharacter(this);
    }
};


// Function to update the character card
function renderCharacter(character) {
    document.querySelector(".name").textContent = character.name;
    document.querySelector("#class").textContent = character.class;
    document.querySelector("#level").textContent = character.level;
    document.querySelector("#health").textContent = character.health;
}

renderCharacter(character);


// Attack button
document.querySelector("#attack").addEventListener("click", function () {
    character.attacked();
});


// Level up button
document.querySelector("#level-up").addEventListener("click", function () {
    character.levelUp();
});

// Restart button
document.querySelector("#restart").addEventListener("click", function(){
    character.restart();
});