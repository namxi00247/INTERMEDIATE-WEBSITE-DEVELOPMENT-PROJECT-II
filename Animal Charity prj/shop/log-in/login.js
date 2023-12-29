let goback = document.getElementById('goback')
goback.onclick = function (){
    location.replace('/shop/browse/browse.html')
}
let createnew = document.getElementById('createnew')
createnew.onclick = function (){
    location.replace('/shop/sign-up/signup.html')
}
let btn = document.getElementById('btn-login')
btn.onclick = function () {

    let passData = document.getElementById('loginpass').value;
    let emailData = document.getElementById('loginname').value;
    if(localStorage.account){
        let users = JSON.parse(localStorage.account)
        var checked = false;
            for (i in users) {
                if (users[i].usermail == emailData && users[i].userpass == passData){
                    var index = i;
                    checked = true
                }
            }  
            // retrieve index from accounts
        if(checked == true){
            console.log(index)
            let logged = []
            logged.push({
                username: users[index].username,
                mail: users[index].usermail,
                cart: users[index].cart
            })


            let loginJSON = JSON.stringify(logged);
            localStorage.setItem('login', loginJSON);
            location.replace('/shop/browse/browse.html')
        }else{
            alert("Your E-Mail or password is incorrect")
        }
    }else{
        alert("User not found")
    }
    
}