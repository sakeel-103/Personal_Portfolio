document.getElementById('icon').addEventListener('click', function () {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});

const textOptions = [
    "Full-Stack Web Developer.",
    "AI / ML Enthusiast.",
    "GitHub Experts."
];
let index = 0;
let charIndex = 0;
const typingSpeed = 100; // Speed of typing (ms)
const erasingSpeed = 50; // Speed of erasing (ms)
const delayBetweenTexts = 2000; // Delay before switching to next text
const dynamicText = document.getElementById("dynamic-text");

function typeText() {
    if (charIndex < textOptions[index].length) {
        dynamicText.textContent += textOptions[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenTexts);
    }
}

function eraseText() {
    if (charIndex > 0) {
        dynamicText.textContent = textOptions[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        index = (index + 1) % textOptions.length; // Move to the next text
        setTimeout(typeText, typingSpeed);
    }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () => {
    typeText();
});
