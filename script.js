let step = 0;

function nextStep(answer) {
    const question = document.getElementById("question");
    const btnArea = document.getElementById("btnArea");
    const message = document.getElementById("message");

    // STEP 0 → First click
    if (step === 0) {
        step = 1;
        question.innerHTML = "Are you ready for something important? 😌";
        btnArea.innerHTML = `
            <button onclick="nextStep('yes')">Yes 👀</button>
            <button onclick="nextStep('no')">No 🙈</button>
        `;
        return;
    }

    // STEP 1
    if (step === 1) {
        step = 2;
        if (answer === 'no') {
            message.innerHTML = "Too bad, we're continuing anyway 😂";
        } else {
            message.innerHTML = "Good... because I was nervous 😅";
        }

        question.innerHTML = "Do you believe in destiny? ✨";
        btnArea.innerHTML = `
            <button onclick="nextStep('yes')">Yes 💫</button>
            <button onclick="nextStep('no')">Maybe 🤷‍♀️</button>
        `;
        return;
    }

    // STEP 2
    if (step === 2) {
        step = 3;
        question.innerHTML = "What if destiny brought us to this page right now? 😳";
        btnArea.innerHTML = `
            <button onclick="nextStep('yes')">That’s cute 🥺</button>
            <button onclick="nextStep('yes')">You’re dramatic 😂</button>
        `;
        return;
    }

    // STEP 3
    if (step === 3) {
        step = 4;
        question.innerHTML = "Be honest... do I make you smile? 😊";
        btnArea.innerHTML = `
            <button onclick="nextStep('yes')">Maybe 😏</button>
            <button onclick="nextStep('yes')">Yes 💖</button>
        `;
        return;
    }

    // STEP 4
    if (step === 4) {
        step = 5;
        question.innerHTML = "Okay okay… deep breath… this is it 😶";
        btnArea.innerHTML = `
            <button onclick="nextStep('yes')">Tell me already!</button>
        `;
        return;
    }

    // FINAL STEP
    if (step === 5) {
        question.innerHTML = "Will you be my Valentine? 🌹💘";
        btnArea.innerHTML = `
            <button onclick="celebrate()">YES 💖</button>
            <button id="noBtn">NO 😢</button>
        `;

        const noBtn = document.getElementById("noBtn");
        noBtn.addEventListener("mouseover", moveButton);
        noBtn.addEventListener("click", moveButton);
    }
}

function moveButton(e) {
    e.preventDefault();
    const btn = e.target;
    btn.style.position = "absolute";
    btn.style.left = Math.random() * (window.innerWidth - 100) + "px";
    btn.style.top = Math.random() * (window.innerHeight - 50) + "px";
}

function celebrate() {
    document.body.innerHTML = `
        <h1 style="text-align:center;color:#ff4d6d;margin-top:35vh;">
            SHE SAID YESSS 💖✨ <br><br> Best Day Ever 🌹
        </h1>
    `;
}
