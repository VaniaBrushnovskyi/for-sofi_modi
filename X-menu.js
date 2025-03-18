const burgerBtn = document.querySelector("#burger-btn");
const burgerMenuUl = document.querySelector(".nav__burger-btn .fixed-menu__nav-ul");

burgerBtn.addEventListener("click", () => {
    // Додаємо або видаляємо клас active на кнопці
    burgerBtn.classList.toggle("active");

    // Якщо клас active є, встановлюємо display: block; якщо немає - display: none
    if (burgerBtn.classList.contains("active")) {
        burgerMenuUl.style.display = "block";  // Меню з'являється
    } else {
        burgerMenuUl.style.display = "none";  // Меню ховається
    }
});
