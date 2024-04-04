console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkModeButton = document.querySelector("[data-js=dark-mode-button]");
const lightModeButton = document.querySelector("[data-js=light-mode-button]");
const toggleButton = document.querySelector("[data-js=toggle-button]");



darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
  console.log("Switched to dark mode")
});

lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
  console.log("Switched to light mode")
});

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  console.log("Used toggle button")
});
