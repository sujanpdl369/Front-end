function validate()
{
    var username=document.getElementById("username").Value;
    var password=document.getElementById("password").Value;
    if(username=="admin" && password="admin")
    {
        alert("welcome");
        return false;

    }
    else
    {

        alert("check user name or password");
    }

}