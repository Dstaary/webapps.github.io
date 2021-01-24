const apps = document.getElementById("apps");
const menu = document.getElementById("menu");
const btnBurger = document.getElementById("burgerBtn");

document.getElementById("burgerBtn").addEventListener("click", () => {
    if (menu.className.valueOf() === "menu_burger".valueOf() && apps.className.valueOf() === "apps_icons".valueOf()) {
        menu.classList.remove("menu_burger");
        apps.classList.remove("apps_icons");
        menu.classList.add("menu_burger_active");
        apps.classList.add("apps_icons_active");
    } else {
        menu.classList.remove("menu_burger_active");
        apps.classList.remove("apps_icons_active");
        menu.classList.add("menu_burger");
        apps.classList.add("apps_icons");
    }
}
)