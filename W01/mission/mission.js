
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo (Dark mode)
        let  body = document.querySelectorAll("p, i, li");
        body.forEach((body) => {
            body.style.color = "#FFFFFF";
        });

        document.body.style.backgroundColor = "#272626"

        document.querySelector("#school p").style.color = "rgb(62, 119, 139)";

        document.querySelector("#school p").style.borderBottom = "1px solid white";

        logo.src = "images/byui-logo-white.png";

    } else {
        // code for changes to colors and logo (Light mode)
        let  body = document.querySelectorAll("p, i, li");
        body.forEach((body) => {
            body.style.color = "black";
        });

        document.body.style.backgroundColor = "white"

        document.querySelector("#school p").style.color = "rgb(62, 119, 139)";

        document.querySelector("#school p").style.borderBottom = "1px solid black";

        logo.src = "images/byui-logo-blue.webp";
    }
}