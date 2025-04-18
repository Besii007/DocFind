    const darkBtn = document.getElementById("dark-btn");
    const lightBtn = document.getElementById("light-btn");
    const body = document.body;
  
    // Apply saved theme on load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
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
  