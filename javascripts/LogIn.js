function verify()
{

    var usrname = document.getElementById("full-name").value;
    var pwd = document.getElementById("password").value;

    if(usrname==="admin" && pwd==="admin")
    {
        window.location.href="home.html";
    }
    else
    {
        alert("Invalid credentials");
    }
}