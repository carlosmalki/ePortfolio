const button = document.getElementById("menuButton");

button.addEventListener("click", (_) => {
    const menu = document.getElementById("menuList");

    if (menu.classList.contains("hiddenMenu")){
        menu.classList.remove("hiddenMenu");
        return;
    }
    menu.classList.add("hiddenMenu");
});