const toggleButton = document.querySelector("#dark-mode-toggle")

toggleButton.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    toggleButton.textContent = isDarkMode ? "Light Mode 🌞" : "Dark Mode 🌓";
  })