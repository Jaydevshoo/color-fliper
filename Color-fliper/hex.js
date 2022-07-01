const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

var color = document.querySelector("h1")
var button = document.querySelector("#btn")

button.addEventListener("click", function () {
  for (let i = 0; i < 6; i++) {
    var hexcolor = "#";
    hexcolor += hex[getRandomNumber()];
    document.body.style.backgroundColor = hexcolor;
  }
});
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}