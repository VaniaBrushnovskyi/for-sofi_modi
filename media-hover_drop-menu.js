document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".fixed-menu__nav-ul > li");

    function isMobile() {
        return window.innerWidth <= 946;
    }

    menuItems.forEach(item => {
        const link = item.querySelector("a");
        const dropdown = item.querySelector(".dropdown-menu");
        let tappedOnce = false;

        if (dropdown) {
            item.addEventListener("click", function (e) {
                if (isMobile()) {
                    e.preventDefault(); // Запобігаємо переходу по посиланню
                    if (!tappedOnce) {
                        menuItems.forEach(el => { // Закриваємо всі інші меню перед відкриттям нового
                            if (el !== item) {
                                el.classList.remove("active");
                                const otherDropdown = el.querySelector(".dropdown-menu");
                                if (otherDropdown) otherDropdown.style.display = "none";
                            }
                        });

                        this.classList.add("active");// Відкриваємо підменю
                        dropdown.style.display = "block";
                        tappedOnce = true;
                        setTimeout(() => (tappedOnce = false), 1000); // Якщо користувач не натисне вдруге протягом 1 секунди — скидати тап
                    } else {
                        window.location.href = link.href; // При другому натисканні дозволяємо перехід по посиланню
                    }
                }
            });
        }
    });
// Закриває меню при кліку поза ним
    document.addEventListener("click", function (e) {
        if (isMobile() && !e.target.closest(".fixed-menu__nav-ul")) {
            menuItems.forEach(item => {
                item.classList.remove("active");
                const dropdown = item.querySelector(".dropdown-menu");
                if (dropdown) dropdown.style.display = "none";
            });
        }
    });
});
