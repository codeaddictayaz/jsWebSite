const btn = document.querySelector(".btn");
const linkContainer = document.querySelector(".linkContainer");
const linkClicked = document.querySelectorAll(".linkClicked")
btn.addEventListener("click", () => {
    linkContainer.classList.toggle("showMenu")
})
linkClicked.forEach((link) => {
    link.addEventListener("click", () => {
        linkContainer.classList.remove("showMenu")
    })
})

















const myText = document.querySelector(".myText");
const text = 'Java Script Basic Projects';
let index = 1;

let introText = () => {
    myText.innerText = text.slice(0, index)
    index++;
    if (index > text.length) {
        index = 1;

    }
}
setInterval(introText, 300)

