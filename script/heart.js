const createHeart = () => {
    const heart = document.createElement("div");
    heart.innerText = "💙";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 99 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);

}
setInterval(createHeart, 1000);