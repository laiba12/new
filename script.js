const envelope = document.getElementById("envelope");
const flap = document.getElementById("flap");
const choices = document.getElementById("choices");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

let opened = false;

flap.addEventListener("click", () => {
  if (opened) {
    return;
  }

  opened = true;
  envelope.classList.add("opened");

  setTimeout(() => {
    choices.classList.add("show-choices");
  }, 1200);
});

function moveNoButton() {
  const bounds = choices.getBoundingClientRect();
  const maxX = Math.max(0, bounds.width - noBtn.offsetWidth);
  const maxY = 40;

  const randomX = Math.random() * maxX - bounds.width / 2 + noBtn.offsetWidth / 2;
  const randomY = (Math.random() * maxY - maxY / 2) * 1.4;

  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

["mouseenter", "pointerdown", "touchstart"].forEach((eventName) => {
  noBtn.addEventListener(eventName, moveNoButton);
});

yesBtn.addEventListener("click", () => {
  popup.classList.add("show");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.classList.remove("show");
  }
});
