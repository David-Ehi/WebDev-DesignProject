document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("user");
    window.location.href = "/";
});
