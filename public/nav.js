document.addEventListener("DOMContentLoaded", function () {
    const loginNav = document.getElementById("loginNav");

    if (!loginNav) return;

    const user = localStorage.getItem("user");

    if (user) {
        const parsedUser = JSON.parse(user);
        loginNav.textContent = `Hello, ${parsedUser.name}`;
        loginNav.href = "/logout";
    }
});
