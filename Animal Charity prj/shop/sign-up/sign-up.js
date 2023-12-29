
let goback = document.querySelector("#goback");
goback.addEventListener('click', function(){
    location.replace('/shop/browse/browse.html')
})

let button = document.querySelector("#register");
button.addEventListener('click', function(){
    let name = document.getElementById("username").value;
    let mail = document.getElementById("usermail").value;
    let password = document.getElementById("userpassword").value;
    let passcheck = document.getElementById("passwordconfirm").value;
    var check = false;
    if (name.length == 0 || mail.length == 0 || password.length == 0){
        alert("Please don't leave any field empty")
    } else if (password != passcheck) {
        alert("Please re-type your password")
    } else {
        if(localStorage.account){
            let account = JSON.parse(localStorage.account)
            for (i of account){
                if(i.usermail == mail){
                    check = true;
                }
            }
            if (check == true) {
                alert("This E-Mail has already been used")
                check = false;
            } else {
                account.push({
                    username: name,
                    usermail: mail,
                    userpass: password,
                    cart: [],
                    total_item_brought: 0,
                    total_money_spent: 0
                })
                let json = JSON.stringify(account)
                localStorage.setItem("account", json)
                alert("signed-up successfull")
            }
        } else{
            localStorage.setItem("account", JSON.stringify(
                [
                    {
                        username: name,
                        usermail: mail,
                        userpass: password,
                        cart: []
                    }
                ]
            ))
        }
        location.replace('/shop/browse/browse.html')
    }
})

