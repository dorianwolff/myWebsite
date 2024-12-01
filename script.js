// Cinematic Text Content
const cinematicText = "Come, for I have been expecting you. I am Dorian Wolff, a student currently studying at Epita, a French computer science-oriented school... Be ready to discover the games, projects, websites, and many other pieces of work which represent my past 4 years secluded in this digital world.";

// Elements
const textElement = document.getElementById("cinematic-text");
const skipButton = document.getElementById("skip-button");
const overlay = document.getElementById("overlay");
const mainContent = document.getElementById("main-content");

// Local Storage Check (Commented Out)
// if (localStorage.getItem("cinematicPlayed")) {
//   skipCinematic();
// } else {
playCinematic();
// }

function playCinematic() {
    let i = 0;
    const interval = setInterval(() => {
        if (i < cinematicText.length) {
            const char = document.createElement("span");
            char.textContent = cinematicText[i];
            textElement.appendChild(char);
            i++;
        } else {
            clearInterval(interval);
            revealScene();
        }
    }, 50);
}

// Skip Button Listener
skipButton.addEventListener("click", () => {
    skipCinematic();
    // localStorage.setItem("cinematicPlayed", "true");
});

function skipCinematic() {
    overlay.style.display = "none";
    revealScene();
}

function revealScene() {
    overlay.classList.add("reveal");
    setTimeout(() => {
        overlay.style.display = "none";
        mainContent.classList.remove("hidden");
        mainContent.style.animation = "fadeIn 2s ease-in-out";
        document.body.style.overflow = "auto";
    }, 2500);
}
