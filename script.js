const steps = [
  { q: "Hey… I wanted to ask you something 😊", yes: "Okay tell me", no: "Ignore" },
  { q: "Be honest… are you naturally this charming or is this a special occasion? ✨", yes: "Naturally 😌", no: "Special today" },
  { q: "Okay serious question… how do you manage to look cute even in imagination? 😂💖", yes: "Magic maybe", no: "Stop it 😂" },
  { q: "Ee moment lo hero evaru telusa? Nuvve 😌", yes: "Oh really?", no: "Drama aa 😏" },
  { q: "Nuvvu navvite, scene lo brightness automatic ga perigipothundi ✨", yes: "Haha nice one", no: "Too much 😅" },
  { q: "Nuvvu random ga kuda cute ga untav ante, planned ga ela untavo imagine cheyyali 😂", yes: "You’re funny", no: "Stop teasing" },
  { q: "Talking with you feels different… in a good way 💫", yes: "Aww", no: "Different how?" },
  { q: "So… will you be my Valentine? 💖", yes: "YESSS 💘", no: "No" }
];

let step = 0;

const question = document.getElementById("question");
const btnArea = document.getElementById("btnArea");
const message = document.getElementById("message");

function showStep() {
  const current = steps[step];
  question.textContent = current.q;
  btnArea.innerHTML = "";

  const yesBtn = document.createElement("button");
  yesBtn.textContent = current.yes;
  yesBtn.onclick = () => {
    if (step === steps.length - 1) {
      celebrate();
    } else {
      step++;
      showStep();
    }
  };

  const noBtn = document.createElement("button");
  noBtn.textContent = current.no;

  // Moving NO button
  noBtn.onmouseover = () => {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 300 + "px";
    noBtn.style.left = Math.random() * 300 + "px";
  };

  btnArea.appendChild(yesBtn);
  btnArea.appendChild(noBtn);
}

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
}

showStep();
