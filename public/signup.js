

document.getElementById("signinform").addEventListener("submit", function(event){
    event.preventDefault();
    var name = document.getElementById("InputName").value;
    var email = document.getElementById("InputEmail").value;
    var password = document.getElementById("InputPassword").value;
    var password2 = document.getElementById("InputPassword2").value;

    if(password !== password2)
    {
        alert("Passwords do not match")
        return;
    }

    const user = {
        name: name,
        email: email,
        password: password,
    };

    localStorage.setItem(email, JSON.stringify(user));
    alert("You have succefully created your account")
    window.location.href = "/login"
})

