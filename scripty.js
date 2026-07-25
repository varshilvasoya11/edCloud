// script.js - edCloud interactivity

document.addEventListener("DOMContentLoaded", () => {

    // Simple search box behavior
    const searchBtn = document.querySelector(".search-box button");
    const searchInput = document.querySelector(".search-box input");

    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", () => {
            const query = searchInput.value.trim();
            if (query) {
                alert(`Searching for: ${query}`);
                // TODO: hook this up to real course search/filter logic
            }
        });
    }

    // Make tag pills clickable -> fill search box
    document.querySelectorAll(".tags span").forEach(tag => {
        tag.addEventListener("click", () => {
            if (searchInput) {
                searchInput.value = tag.textContent;
            }
        });
    });

    // Category buttons -> log selection (placeholder for filtering courses)
    document.querySelectorAll(".category-list button").forEach(btn => {
        btn.addEventListener("click", () => {
            console.log(`Category selected: ${btn.textContent}`);
        });
    });

});