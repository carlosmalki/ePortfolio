document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("check");
  const menu = document.getElementById("menu");
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });  
  document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
