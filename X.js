/* 
let lastScroll = 0;
const defaultOffset = 150;
const burgerBtn = document.querySelector("#burger-btn");
const burgerMenu = document.querySelector(".nav__burger-btn");
const burgerMenuUl = document.querySelector(".nav__burger-btn_ul");

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

const containHide = () => burgerMenu.classList.contains("nav__burger-open");

window.addEventListener("scroll", () => {
    if(scrollPosition() > lastScroll && containHide() && scrollPosition() > defaultOffset) {
        burgerMenu.classList.remove("nav__burger-open");
        burgerBtn.classList.remove("active");
    } else if(scrollPosition() < lastScroll && containHide()) {
        burgerMenu.classList.add("nav__burger-open");
        burgerBtn.classList.add("active"); 
    }

    if (window.scrollY > defaultOffset) {
        burgerBtn.classList.add("active"); 
    } else {
        burgerBtn.classList.remove("active");
    }

    lastScroll = scrollPosition();
});

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    burgerMenu.classList.toggle("nav__burger-open");
    burgerMenuUl.style.display = burgerMenu.classList.contains("nav__burger-open") ? "block" : "none";
});
 */

let lastScroll = 0;
const defaultOffset = 150;
const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".nav__burger-btn");
const burgerMenuUl = document.querySelector(".nav__burger-btn_ul");

// Отримуємо поточну позицію скролу
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

// Перевіряємо, чи є клас "nav__burger-open"
const containHide = () => burgerMenu.classList.contains("nav__burger-open");

// Відслідковуємо події скролу
window.addEventListener("scroll", () => {
    // Якщо скрол більше попереднього і клас "nav__burger-open" є
    if (scrollPosition() > lastScroll && containHide() && scrollPosition() > defaultOffset) {
        burgerMenu.classList.remove("nav__burger-open"); // Закриваємо меню
        burgerBtn.classList.remove("active"); // Видаляємо клас active з кнопки
        burgerMenuUl.style.display = "none"; // Меню ховається
        console.log("down");
    } else if (scrollPosition() < lastScroll && containHide()) {
        burgerMenu.classList.add("nav__burger-open"); // Відкриваємо меню
        burgerBtn.classList.add("active"); // Додаємо клас active до кнопки
        burgerMenuUl.style.display = "block"; // Меню відображається
        console.log("up");
    }

    lastScroll = scrollPosition(); // Оновлюємо останній скрол
});

// Додаємо подію кліку для кнопки бургер-меню
burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active"); // Додаємо/видаляємо клас active
    burgerMenu.classList.toggle("nav__burger-open"); // Відкриваємо/закриваємо меню
    burgerMenuUl.style.display = burgerMenu.classList.contains("nav__burger-open") ? "block" : "none"; // Встановлюємо display
});



const menuItems = document.querySelectorAll(".nav__burger-btn_ul .menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        // Перевіряємо, чи вже відкрите підменю
        const dropdown = item.querySelector(".dropdown");
        const isOpen = dropdown.style.display === "flex";

        // Закриваємо всі підменю
        document.querySelectorAll(".dropdown").forEach(drop => {
            drop.style.display = "none";
        });

        // Якщо підменю закрите, відкриваємо його
        if (!isOpen) {
            dropdown.style.display = "flex";
        }
    });
});
