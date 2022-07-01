const colors = ["red", "yellow", "blue", "pink"]

const color = document.querySelector("h1")
const button = document.getElementById("btn")

button.addEventListener("click", function(){
    var randomcolor = getRandomNumber()
    document.body.style.backgroundColor = colors[randomcolor]
    color.textContent = colors[randomcolor];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length )
}
