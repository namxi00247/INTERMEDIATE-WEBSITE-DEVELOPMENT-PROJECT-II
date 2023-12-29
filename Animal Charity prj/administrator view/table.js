// Change color of fixed container
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() < ($("#home-donate").height())){
            $(".navbar").css({"background-color":"transparent"});   
        }
        else{
            $(".navbar").css({"background-color":"#432C7A"});
        }

    })
})

// retrieve data from local storage
let accountdisplay = document.querySelector("#accounts")
let accounts = JSON.parse(localStorage.getItem('account'))
console.log(accounts)
let html = ''
var total_items = 0
var total_money = 0
var index = 1;
for (i of accounts){
   html +=  `<tr>
    <th scope="row">${index}</th>
        <td>${i.username}</td>
        <td>${i.usermail}</td>
        <td>${i.userpass}</td>
        <td>${i.total_item_brought}</td>
        <td>${i.total_money_spent}</td>
    </tr>
`
index ++;
total_items += i.total_item_brought;
total_money += i.total_money_spent;

};
html += `
<tr>
    <th scope="row">TOTAL</th>
        <td></td>
        <td></td>
        <td></td>
        <td>${total_items}</td>
        <td>${total_money}</td>
    </tr>`

accountdisplay.innerHTML = html;

// presenting data for donation amount 
let donationdisplay = document.querySelector("#donation")
let donation = JSON.parse(localStorage.getItem('donate'))
var total_donation = 0;
let html_donation = '';
let index_donation = 1;
for (i of donation){
    html_donation += `<tr>
    <th scope="row">${index_donation}</th>
        <td>${i[0].fname} ${i[0].lname}</td>
        <td>${i[0].company}</td>
        <td>${i[0].mail}</td>
        <td>${i[0].zip}</td>
        <td>${i[0].amount}</td>
    </tr>
`
total_donation += parseInt(i[0].amount)
index_donation ++
}

// html_donation += `
// <tr>
//     <th scope="row">TOTAL</th>
//         <td></td>
//         <td></td>
//         <td></td>
//         <td></td>
//         <td>${total_donation}</td>
//     </tr>`
donationdisplay.innerHTML = html_donation;

let subscriptiondisplay = document.querySelector("#subscription")
let subs = JSON.parse(localStorage.getItem('subscription'))
var total_donation = 0;
let html_subscription = '';
let index_subscription = 1;
for (i of subs){
    console.log(i.mail, i.phone)
    html_subscription += `<tr>
    <th scope="row">${index_subscription}</th>
        <td>${i.mail}</td>
        <td>${i.phone}</td>
    </tr>
`
index_subscription ++
}
subscriptiondisplay.innerHTML = html_subscription;