$(document).ready(function () {
    $("a").on("click", function (event) {
        var target = $(this).attr("href");

        // Ensure the link is an internal section (starts with #)
        if (target.startsWith("#")) {
            event.preventDefault(); // Prevent default jump

            $("html, body").animate(
                {
                    scrollTop: $(target).offset().top - 50 // Adjust offset if needed
                },
                800
            );
        }
    });
});
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.getElementById("menu-icon"); // Ensure this ID exists
    let navMenu = document.querySelector(".navmenu");

    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("active"); // Adds/removes 'active' class
        console.log("Menu toggled"); // Debugging - Check console when clicking
    });
});
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}




document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!"); // Debugging step

    const searchBox = document.getElementById("mobileSearchBox");
    const mobileSearchIcon = document.getElementById("mobileSearchIcon");
    const navSearchIcon = document.getElementById("navSearchIcon");

    if (!searchBox || !mobileSearchIcon || !navSearchIcon) {
        console.error("One or more elements not found!");
        return;
    }

    function toggleSearch() {
        console.log("Search icon clicked!"); // Debugging step
        searchBox.classList.toggle("active");
    }

    // Add event listeners for both search icons
    mobileSearchIcon.addEventListener("click", toggleSearch);
    navSearchIcon.addEventListener("click", toggleSearch);
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!"); // Debugging step

    const searchBox = document.getElementById("searchInput"); // Search input box
    const searchIcons = document.querySelectorAll(".search-icon"); // Both search buttons
    const products = document.querySelectorAll(".product-title"); // Product titles

    function searchProduct() {
        let query = searchBox.value.trim().toLowerCase(); // Get search input
        let found = false;

        products.forEach((product) => {
            if (product.textContent.toLowerCase().includes(query)) {
                product.scrollIntoView({ behavior: "smooth", block: "center" }); // Scroll to product
                product.style.background = "yellow"; // Highlight for visibility
                setTimeout(() => { product.style.background = "transparent"; }, 1500);
                found = true;
            }
        });

        if (!found) {
            alert("No matching products found!");
        }
    }

    // Listen for "Enter" key press in search box
    searchBox.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            searchProduct();
        }
    });

    // Listen for search button clicks
    searchIcons.forEach(icon => {
        icon.addEventListener("click", searchProduct);
    });

    // Apply CSS styles dynamically
    const style = document.createElement("style");
    style.innerHTML = `
        #searchInput {
            width: 250px;
            padding: 10px;
            border: 2px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
            outline: none;
            transition: 0.3s;
        }
        #searchInput:focus {
            border-color: #ff4081;
            box-shadow: 0px 0px 5px rgba(255, 64, 129, 0.5);
        }
        .search-icon {
            font-size: 24px;
            cursor: pointer;
            color: #333;
            transition: color 0.3s;
        }
        .search-icon:hover {
            color: #ff4081;
        }
        .product-title {
            padding: 10px;
            border-radius: 5px;
            transition: background 0.5s;
        }
    `;
    document.head.appendChild(style);
});

