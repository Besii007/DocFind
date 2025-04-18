const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");
const body = document.body;

// Check for saved theme
const savedTheme = localStorage.getItem("theme");

// Apply saved theme or system preference
if (savedTheme) {
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
} else {
  // Detect system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add("dark-mode");
  }
}

// Toggle to dark
darkBtn.addEventListener("click", () => {
  body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
});

// Toggle to light
lightBtn.addEventListener("click", () => {
  body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
});

// Only apply system changes if no manual preference is saved
if (!savedTheme) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (e.matches) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  });
}
