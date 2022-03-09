const btn = document.getElementById("btn");
const colorName = document.getElementById("colorName")
btn.addEventListener("click", () => {
    document.body.style.background = bgcolor();
    colorName.textContent = bgcolor();

});
let bgcolor = () => {
    return `hsl(${Math.floor(Math.random() * 360)},100%,50%)`;


}