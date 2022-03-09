const numDisplay = document.getElementById("numDisplay");
const btns = document.querySelectorAll(".btn");
let count = 0;
btns.forEach((link) => {
    link.addEventListener("click", (e) => {
        const currentBtn = e.currentTarget.classList;
        if (currentBtn.contains("increase")) {
            count++;
        }
        else if (currentBtn.contains("decrease")) {
            count--;
        } else {
            count = 0
        }
        numDisplay.textContent = count;
        if (count > 0) {
            numDisplay.style.color = "#4cd137"
        }
        if (count < 0) {
            numDisplay.style.color = "#c23616";
        }
        if (count === 0) {
            numDisplay.style.color = "#353b48";
        }
    });

});
