(function() {
    const menu = document.getElementById("menuID");
    const nav_menu = document.getElementById("navMenuID");
    const nav = document.getElementById("nav");
    const header = document.getElementById("headerID");


    menu.addEventListener("click", function() {
        if (nav_menu.classList.contains("hidden")) {
            nav_menu.classList.remove("hidden");
            nav.classList.remove("shadow-md");
            header.classList.add("navbarGrow");
        } else {
            nav_menu.classList.add("hidden");
            nav.classList.add("shadow-md");
            header.classList.remove("navbarGrow");
            header.classList.add("navbarShrink");
        }
    })






})();


