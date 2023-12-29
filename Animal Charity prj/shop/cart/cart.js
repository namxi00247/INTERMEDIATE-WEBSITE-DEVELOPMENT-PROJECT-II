// //================== Delete to Carts ================
let items = document.querySelector("#cart-box")


items.addEventListener('click', function(e){
    if(e.srcElement.tagName == "BUTTON"){
        console.log("hello")
        let i = e.srcElement.value
        account[indexacc].cart.splice(i,1)
        let accountJSON = JSON.stringify(account)
        localStorage.setItem('account', accountJSON)
        total();
    }
   loadCarts()
})

// Update localStorage upon PAY
let pay = document.querySelector("#pay-btn");
var indexacc = 0
function set_pay(){
  let logged = JSON.parse(localStorage.getItem('login'))
  let account = JSON.parse(localStorage.getItem('account'))
  for (i in account) {

    for (i in account) {
        if (logged[0].mail == account[i].usermail){
            indexacc = i;
        }
    }
  }

  account[indexacc].total_item_brought += (account[indexacc].cart).length;
  var total_money = account[indexacc].total_money_spent;
  for (i of account[indexacc].cart){

    total_money += i.price
  };
  account[indexacc].total_money_spent = Math.round(total_money);
  account[indexacc].cart = []
  loadCarts()
  let accountJSON = JSON.stringify(account);
  localStorage.setItem('account', accountJSON);
}



// Hien thi san pham
let items1 = document.querySelector("#cart-box")
let logged = JSON.parse(localStorage.getItem('login'))
let account = JSON.parse(localStorage.getItem('account'))

for (i in account) {
  for (i in account) {
      if (logged[0].mail == account[i].usermail){
          indexacc = i;
      }
  }
}

let html = "";  
let index = 0;
for(i of account[indexacc].cart){
    html +=
    `
    <div class="card mb-3">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-row align-items-center">
          <div>
            <img
              src="${i.img}"
              class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
          </div>
          <div style = "width: 20vw" class="ms-3">
            <h5>${i.name}</h5>
            <p class="small mb-0">${i.des}</p>
          </div>
        </div>
        <div  class="d-flex flex-row align-items-center">
          <div style="width: 30px; margin-left: -15vw">
            <h5 class="fw-normal mb-0">1</h5>
          </div>
          <div style="width: 50px;">
            <h5 class="mb-0">${i.price}</h5>
          </div>
          <div style="width: 40px;">
            <button value = "${i.id}" class=" btn mb-0">Delete</button>
          </div>
          <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
        </div>
      </div>
    </div>
  </div>
    `         
    index++;
}
items1.innerHTML = html

loadCarts()
function loadCarts(){
    let items1 = document.querySelector("#cart-box")
    let logged = JSON.parse(localStorage.getItem('login'))
    let account = JSON.parse(localStorage.getItem('account'))
    var indexacc = 0

    for (i in account) {
        if (logged[0].mail == account[i].usermail){
            indexacc = i;
        }
    }

    let html = "";  
    let index = 0;
    for(i of account[indexacc].cart){
        html +=
        `
        <div class="card mb-3">
        <div class="card-body">
        <div class="d-flex justify-content-between">
            <div class="d-flex flex-row align-items-center">
            <div>
                <img
                src="${i.img}"
                class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
            </div>
            <div style = "width: 20vw" class="ms-3">
                <h5>${i.name}</h5>
                <p class="small mb-0">${i.des}</p>
            </div>
            </div>
            <div  class="d-flex flex-row align-items-center">
            <div style="width: 30px; margin-left: -15vw">
                <h5 class="fw-normal mb-0">1</h5>
            </div>
            <div style="width: 50px;">
                <h5 class="mb-0">${i.price}</h5>
            </div>
            <div style="width: 40px;">
                <button style="margin-left: 2vw" value = "${i.id}" class=" btn mb-0">Delete</button>
            </div>
            <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
            </div>
        </div>
        </div>
    </div>
        `         
        index++;
    }
    items1.innerHTML = html
}

// Calculate total payment
function total(){
  var total = 0.00;
  for (i of account[indexacc].cart){
      var value = i.price
      total = (value) + total
  }

  let price = document.querySelector("#totalprice");
  price.innerHTML = Math.round(total)
}

total();


let goback = document.querySelector("#goback");
goback.addEventListener('click', function(){
    location.replace('/shop/browse/browse.html')
})