const colors = ["#1abc9c", "#95a5a6", "#e67e22", "#f1c40f", "#8e44ad", "#e84118"];
console.log(colors)
const colorsName = ["Turquoise", "Concrete", "Carrot", "Sun Flower", "Wisteria", "Red Flower Color"];
const btn = document.getElementById("btn");
const colorName = document.getElementById("colorName");


btn.addEventListener("click", () => {
    const randomNo = getRandomNo();
    colorName.textContent = colorsName[randomNo];
    document.body.style.backgroundColor = colors[randomNo];
});

let getRandomNo = () => {
    return Math.floor(Math.random() * colors.length);
}
