const logout = document.querySelector('[data-logout]');

logout.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear();
    return window.open("http://127.0.0.1:5500/frontend/html/Login.html", "_parent",)
})