function verify()
{

    var usrname = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;

    if(usrname==="admin" && pwd==="admin")
    {
        window.location.href="https://dk-77.github.io/home.html";
    }
    else
    {
        alert("Invalid credentials");
    }
}