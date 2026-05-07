const modeText = document.getElementById("mode-text");
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;

// 1. Initial Setup Logic
// We determine if we are in dark mode first
const isDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);

if (isDark) {
  document.documentElement.classList.add("dark");
  modeText.textContent = "dark"; // Set initial span text
} else {
  document.documentElement.classList.remove("dark");
  modeText.textContent = "light"; // Set initial span text
}

// 2. Watch for system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    // Only sync if the user hasn't manually overridden the theme
    if (!localStorage.getItem("theme")) {
      if (e.matches) {
        document.documentElement.classList.add("dark");
        modeText.textContent = "dark"; // Sync text to dark
      } else {
        document.documentElement.classList.remove("dark");
        modeText.textContent = "light"; // Sync text to light
      }
    }
  });
