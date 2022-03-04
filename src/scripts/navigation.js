function toggleMenu() {
    const navElement = document.getElementsByTagName("nav")[0];
    if (navElement.classList.contains("hidden")) {
        navElement.classList.remove("hidden");
        navElement.classList.add("flex");
    } else {
        navElement.classList.add("hidden");
        navElement.classList.remove("flex");
    }
}
