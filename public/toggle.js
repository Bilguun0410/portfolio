const toggleTheme = () => {
  const html = document.documentElement;
  const modeText = document.getElementById("mode-text");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    modeText.textContent = "dark";
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    modeText.textContent = "light";
  }
};

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
}

window.addEventListener("keydown", (event) => {
  // Check for 'j' key and either Cmd (Mac) or Ctrl (Windows/Linux)
  if ((event.metaKey || event.ctrlKey) && event.code === "KeyJ") {
    event.preventDefault(); // Prevent browser default (like opening downloads)
    console.log("Cmd + J shortcut triggered!");
    toggleTheme();
  }
});
