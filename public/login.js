

document.getElementById("loginform").addEventListener("submit", function(event){
    event.preventDefault();
    var email = document.getElementById("InputEmail").value;
    var password = document.getElementById("InputPassword").value;

    var user = localStorage.getItem(email);

    if(user)
    {
        var parsedUser = JSON.parse(user);
        if (parsedUser.password === password){
            localStorage.setItem("user", JSON.stringify(parsedUser));
            window.location.href = "/";
        } else {
            alert("Incorrect Password")
        }

    } else{
        alert("No Account Found")
    }

})