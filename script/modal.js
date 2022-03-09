const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
console.log("~ closeBtn", closeBtn)

const modalContainer = document.querySelector(".modalContainer");

openBtn.addEventListener("click", () => {
    modalContainer.classList.add("show");
});
closeBtn.addEventListener("click", () => {
    modalContainer.classList.remove("show");
})