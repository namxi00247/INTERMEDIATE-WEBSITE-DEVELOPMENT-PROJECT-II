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

$("#shop-title").hover(function(){
    $('#shop-title-container').css({"box-shadow": "2px 2px 2px 1px rgba(0, 0, 0, 0.2)"});
})

let donateButton = document.getElementById("home-donate");
donateButton.onclick = function(){
    location.href = "/donate forms/donate.html";
};

function subscription_donation(a, b){
    if (a == "" || b == ""){
        alert("Please fill in all required field");
        return false
    } else{
        return true
    }

}

function subscription(){
    console.log("enter")
    let mail = document.querySelector("#submail").value;
    let phone = document.querySelector("#subphone").value;
    if (subscription_donation(mail, phone)){
        if(localStorage.subscription){
            let subs = JSON.parse(localStorage.subscription);
            console.log(subs)
            subs.push({
                mail: mail,
                phone: phone,
            });
            let json = JSON.stringify(subs)
            localStorage.setItem("subscription", json)
            alert("subscribed successfully")
        } else{
            localStorage.setItem("subscription", JSON.stringify(
                    [{
                        mail: mail,
                        phone: phone
                    }]
            ))
                }
            }
        }

const search = document.querySelector("#animal_search");


let animal_name = document.querySelector("#animal-name");
let population = document.querySelector("#population");
let threat = document.querySelector("#threat");
let feature = document.querySelector("#feature");
let slogan = document.querySelector("#slogan");
const animalbtn = document.querySelector("animalsearch");

function animalsearch(){
    var search_value = document.querySelector("#animal_search").value;
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/animals?name=' + search_value,
        headers: { 'X-Api-Key': '7Dpv0lKmPvbDwigJu4tApg==fVQcdlisFnTzDvCG'},
        contentType: 'application/json',
        success: function(result) {
            for (i of result){
                if (search_value == i.name){
                    console.log(i.name, result)
                    animal_name.innerHTML = i.name;
                    population.innerHTML = i.characteristics.estimated_population_size;
                    threat.innerHTML = i.characteristics.biggest_threat;
                    feature.innerHTML = i.characteristics.most_distinctive_feature;
                    slogan.innerHTML = i.characteristics.slogan;
                    break
                } else{
                    animal_name.innerHTML = "Invalid name or name is too general";
                    population.innerHTML = "";
                    threat.innerHTML = "";
                    feature.innerHTML = "";
                    slogan.innerHTML = "";
                }
            }   
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
};




