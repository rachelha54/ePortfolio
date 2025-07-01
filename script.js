function toggleMenu() {
    const menu = document.querySelector(".dropdown-tabs");
    const icon = document.querySelector(".dropdown-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}