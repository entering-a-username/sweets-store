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
            header.classList.remove("navbarGrow");
            header.classList.add("navbarShrink");
            setTimeout(function() {nav.classList.add("shadow-md");}, 500);
        }
    })


    image.addEventListener("mouseout", function() {
        border.classList.add("borderReverse")
    })

// i have to redo the whole border animation

})();


