document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.querySelector(".search-btn");
    const searchBar = document.querySelector(".search-bar");

    searchBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        searchBar.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
        if (!searchBar.contains(event.target) && !searchBtn.contains(event.target)) {
            searchBar.classList.remove("show");
        }
    });
});
