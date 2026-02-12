const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

// Make NO button run away
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// When YES is clicked
yesBtn.addEventListener("click", () => {
    message.innerHTML = "YAYYY!! 💖 You just made my day! 🌹✨";
    createHearts();
});

// Floating hearts animation
function createHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        heart.style.fontSize = "24px";
        heart.style.animation = "floatUp 3s linear forwards";
        document.body.appendChild(heart);
    }
}

// Add animation dynamically
const style = document.createElement('style');
style.innerHTML = `
@keyframes floatUp {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-800px); opacity: 0; }
}`;
document.head.appendChild(style);
