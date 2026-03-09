const toggle = document.querySelector(".menu_toggle");
const menu = document.querySelector(".menu_lateral");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});