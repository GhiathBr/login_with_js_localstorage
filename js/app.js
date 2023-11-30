function register() {
    let name = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    localStorage.setItem("password", pass);
    localStorage.setItem("name", name);
    location.href = "../login/login.html";
}

function login() {
    let storedPassword = localStorage.getItem('password');
    let storedUsername = localStorage.getItem('name');
    let enteredUsername = document.getElementById("name").value;
    let enteredPassword = document.getElementById("pass").value;

    if (storedUsername === enteredUsername) {
        if (storedPassword === enteredPassword) {
            alert("Login successful!");
            alert("welcome "+enteredUsername);
        } else {
            alert("Incorrect password! Please verify your password.");
        }
    } else {
        alert("Incorrect username!");
    }
  
}
