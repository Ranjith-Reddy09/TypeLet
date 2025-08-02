const textDisplay = document.getElementById("text-display");
const textInput = document.getElementById("text-input");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const timeDisplay = document.getElementById("time");
const keystrokesDisplay = document.getElementById("keystrokes");

const texts = [
  "Typing fast is a valuable skill in today’s digital world. It not only saves time but also enhances productivity. Practicing consistently is the key to mastering speed and accuracy in typing.",
  "Success in coding often depends on consistency and clarity. Practicing regularly and understanding the logic behind each piece of code is essential for becoming a great developer."
];

let targetText = "";
let startTime = null;
let interval = null;
let keystrokes = 0;
let isCompleted = false;

function loadText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  targetText = texts[randomIndex];
  textDisplay.innerHTML = targetText
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");
}

function startTimer() {
  startTime = new Date();
  interval = setInterval(() => {
    const elapsed = Math.floor((new Date() - startTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    timeDisplay.textContent = `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

textInput.addEventListener("input", () => {
  if (!startTime) {
    startTimer();
  }

  const input = textInput.value;
  keystrokes++;
  keystrokesDisplay.textContent = keystrokes;

  const spans = textDisplay.querySelectorAll("span");
  let correctChars = 0;

  input.split("").forEach((char, i) => {
    if (i >= spans.length) return;
    if (char === spans[i].textContent) {
      spans[i].classList.add("correct");
      spans[i].classList.remove("incorrect");
      correctChars++;
    } else {
      spans[i].classList.add("incorrect");
      spans[i].classList.remove("correct");
    }
  });

  // Clear styles for remaining
  for (let i = input.length; i < spans.length; i++) {
    spans[i].classList.remove("correct", "incorrect");
  }

  const accuracy = Math.floor((correctChars / input.length) * 100) || 0;
  accuracyDisplay.textContent = `${accuracy}%`;

  const wordsTyped = input.trim().split(/\s+/).length;
  const elapsedMinutes = ((new Date() - startTime) / 1000) / 60;
  const wpm = Math.round(wordsTyped / elapsedMinutes) || 0;
  wpmDisplay.textContent = wpm;

  // Stop if completed
  if (input.length === targetText.length) {
    isCompleted = true;
    textInput.disabled = true;
    stopTimer();
  }
});

function resetTest() {
  stopTimer();
  startTime = null;
  keystrokes = 0;
  isCompleted = false;
  textInput.disabled = false;
  textInput.value = "";
  keystrokesDisplay.textContent = "0";
  wpmDisplay.textContent = "0";
  accuracyDisplay.textContent = "100%";
  timeDisplay.textContent = "0:00";
  loadText();
}

function newTest() {
  resetTest();
}

function toggleTheme() {
  const html = document.querySelector("html");
  html.dataset.bsTheme = html.dataset.bsTheme === "dark" ? "light" : "dark";
}

// Load initial text
window.onload = loadText;
