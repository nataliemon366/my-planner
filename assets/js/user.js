function check(form){
    if(form.userid.value == "myplaner" && form.pswrd.value == "123")
    {
        window.open(user-login.html)
    }else{
        alert("the username and password you entered don't match")
    }
}