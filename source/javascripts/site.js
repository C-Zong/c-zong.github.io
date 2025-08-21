// Theme toggle
document.getElementById("config").theme.addEventListener("click", () => {
  let theme = localStorage.getItem("theme");
  theme = theme === "light" ? "dark" : "light";
  document.body.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
});
