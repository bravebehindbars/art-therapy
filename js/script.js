window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".nav-bar");
    if (window.scrollY > 50) {  // 50 is the threshold, adjust accordingly
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
