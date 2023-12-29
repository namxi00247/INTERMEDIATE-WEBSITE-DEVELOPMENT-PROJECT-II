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

let products = [
    [{
        id: 1,
        name: "YuMOVE Joint Care",
        des: "Supplement for Cats",
        img: "https://www.petdrugsonline.co.uk/media/catalog/product/0/3/036f156fc6659f3a7b66caa801d85ddff659df6b4e7e85d7b909f8f334ddcf57.jpeg?quality=70&bg-color=255,255,255&fit=bounds&height=550&width=550&canvas=550:550",
        price: 16.99,
    },
    {
        id: 2,
        name: "Protexin Denamarin",
        des: "Liver Support for Cats and Dogs",
        img: "https://www.petdrugsonline.co.uk/media/catalog/product/d/4/d4d372ff363ec9b5d6b1b03da5480cf201be2936a521cfa0b96bf514bc6fc970.jpeg?quality=70&bg-color=255,255,255&fit=bounds&height=550&width=550&canvas=550:550",
        price: 29.48,
    },
    {
        id: 3,
        name: "Pro-Kolin",
        des: "Protexin Pro-Kolin Advanced for Dogs",
        img: "https://www.petdrugsonline.co.uk/media/catalog/product/b/d/bd5b5a1ef0fb5e8b7280a15be5992005dc402c5944ce6c4f88fb8e515558a5e2.jpeg?quality=70&bg-color=255,255,255&fit=bounds&height=550&width=550&canvas=550:550",
        price: 13.01,
    },
    {
        id: 4,
        name: "PURINA PRO PLAN",
        des: "PURINA PRO PLAN FortiFlora Probiotic Food Supplement for Dogs",
        img: "https://www.petdrugsonline.co.uk/media/catalog/product/8/6/863d1d7bc0f98a1d671e3a8bc85c8d5710e8e53b7df3b693029dc87e083dc945.jpeg?quality=70&bg-color=255,255,255&fit=bounds&height=550&width=550&canvas=550:550",
        price: 20.95,
    },
    {
        id: 5,
        name: "Samylin Tablets",
        des: "Samylin is used for the support of liver function in small breed dogs and cats.",
        img: "https://www.petdrugsonline.co.uk/media/catalog/product/1/8/18e45279442ea627b0b5ea98f4526ded74b76d5645fae0e6f6e9d1628fe70f89.jpeg?quality=70&bg-color=255,255,255&fit=bounds&height=550&width=550&canvas=550:550",
        price: 30.48,
    },
    {
        id: 6,
        name: "Aktivait for Dogs",
        des: "Aktivait is a nutritional supplement to aid a healthy central nervous system and support brain function in older dogs.",
        img: "https://www.petdrugsonline.co.uk/media/catalog/product/2/e/2e91ed580427780eb880602cf1ed4385e92d4b99955c45b693966c23f17d086c.jpeg?quality=70&bg-color=255,255,255&fit=bounds&height=550&width=550&canvas=550:550",
        price: 3.99,
    },
    {
        id: 7,
        name: "Pronefra",
        des: "Kidney & Blood Pressure Supplement for Cats and Dogs",
        img: "https://www.petdrugsonline.co.uk/media/catalog/product/e/9/e9d748044a7de192995c9b2116a436ee4a0078526adcc6855e44fba5a05c5165.jpeg?quality=70&bg-color=255,255,255&fit=bounds&height=550&width=550&canvas=550:550",
        price: 14.78,
    },
    {
        id: 8,
        name: "Audevard Balsamic",
        des: "Air Respiratory Comfort For Horses",
        img: "https://www.petdrugsonline.co.uk/media/catalog/product/8/c/8c1a4c90b1f265bb95ed7dd43c3ac4a520d12b4311062bf88092e45ea02682da.jpeg?quality=70&bg-color=255,255,255&fit=bounds&height=550&width=550&canvas=550:550",
        price: 24.00,
    },
    {
        id: 49,
        name: "Audevard Balsamic",
        des: "Air Respiratory Comfort For Horses",
        img: "https://www.petdrugsonline.co.uk/media/catalog/product/8/c/8c1a4c90b1f265bb95ed7dd43c3ac4a520d12b4311062bf88092e45ea02682da.jpeg?quality=70&bg-color=255,255,255&fit=bounds&height=550&width=550&canvas=550:550",
        price: 24.00,
    },
],

    [
        {
            id: 9,
            name: "hello this is food",
            des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
            img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
            price: 3.99,
        },
        {
            id: 10,
            name: "dog medication",
            des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
            img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
            price: 3.99,
        },
        {
            id: 11,
            name: "dog medication",
            des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
            img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
            price: 3.99,
        },
        {
            id: 12,
            name: "dog medication",
            des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
            img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
            price: 3.99,
        },
        {
            id: 13,
            name: "dog medication",
            des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
            img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
            price: 3.99,
        },
        {
            id: 14,
            name: "dog medication",
            des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
            img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
            price: 3.99,
        },
        {
            id: 15,
            name: "dog medication",
            des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
            img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
            price: 3.99,
        },
        {
            id: 16,
            name: "dog medication",
            des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
            img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
            price: 3.99,
        },
    ],

    [
        {
            id: 17,
            name: "dog medication",
            des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
            img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
            price: 3.99,
        },
        {
            id: 18,
            name: "dog medication",
            des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
            img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
            price: 3.99,
        },
        {
            id: 19,
            name: "dog medication",
            des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
            img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
            price: 3.99,
        },
        {
            id: 20,
            name: "dog medication",
            des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
            img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
            price: 3.99,
        },
        {
            id: 21,
            name: "dog medication",
            des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
            img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
            price: 3.99,
        },
        {
            id: 22,
            name: "dog medication",
            des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
            img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
            price: 3.99,
        },
        {
            id: 23,
            name: "dog medication",
            des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
            img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
            price: 3.99,
        },
        {
            id: 24,
            name: "dog medication",
            des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
            img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
            price: 3.99,
        },
        {
            id: 50,
            name: "cat medication",
            des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
            img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
            price: 3.99,
        },
    ],

    [{
        id: 25,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 26,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 27,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 28,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 29,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 30,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 31,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 32,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },],
    
    [{
        id: 33,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 34,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 35,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 36,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 37,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 38,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 39,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 40,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },],
    
    [{
        id: 41,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 42,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 43,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 44,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 45,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 46,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 47,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },
    {
        id: 48,
        name: "dog medication",
        des: "lorem ipsum adkfj erkjqke akjdfj wekrjkjal fakdjfiwr asldfjw kajdkjfw kejlr kj.",
        img: "https://happydog_en_sb.cstatic.io/440x440/f/69110/480x480/c90b13149a/hd-vet-new-product-slider-packshots-sensible-11kg-300g.png",
        price: 3.99,
    },]
]

let total_products = []
for (i of products){
    for (f of i){
        total_products.push(f)
    }
}

// log-in management
if(localStorage.login){
    let logged = JSON.parse(localStorage.getItem('login'));
    if (logged.length > 0){
    let usernamespot = document.querySelector("#username");
    usernamespot.innerHTML = logged[0].username;
    }
} else{
    let login = [];
    let loginJSON = JSON.stringify(login);
    localStorage.setItem('login', loginJSON);
}




// cart
var presented_arr = products[0]

let search_btn = document.getElementById('searchbutton');
search_btn.onclick = function (){
    let value = document.getElementById('searchbox').value
    presented_arr = []
    for (i of products){
        for(f of i){
            if(f.name.indexOf(value) >=0){
                presented_arr.push(f);
            }
        }
    }
    load(presented_arr, 1)
    return presented_arr;
}

function navigation(arr){
    let no_navigation = document.querySelector('.pagination');
    let html_navigation = `<li style = "border-radius: 7px; margin-right: 1vw" id="navigation1" style = "height:4vh; color:black; font-size: 100%; background-color: white" class="page-item"><button style = "border-radius: 7px" id = "1" onclick = "open1()" name="page-navigation" value = "1" style = "color: #80489C; background-color: #FCE2DB" class="font pagination-btn">1</button></li>`
    let card_count = 0;
    let navigation_count = 2;
    for (i of arr){
        if (card_count == 8){
            html_navigation += `<li style = "border-radius: 7px; margin-right: 1vw" class="page-item"><button style = "border-radius: 7px" onclick = "open${navigation_count}()" id="${navigation_count}" name="page-navigation" value = "${navigation_count}" class="font pagination-btn">${navigation_count}</button></li>`
            navigation_count += 1;
            card_count = 0;
        }
        card_count++;
    }
    no_navigation.innerHTML = html_navigation;
}

function shop_display(arr){
    let items = document.querySelector('#item-display')
    let html = "";
    let count = 1;
    let index = 0;


    for(i of arr){
        if(count == 1){
            html += `<div class="row" style="margin-top: 10px;">`  
        }
        html += 
        `
        <div class="col-3">
        <div style = "border-radius: 7px" class="item" style = "height: 50vh">
            <div class="product-view">
                <img src="${i.img}" alt="">
            </div>
            <div style="justify-content: space-between; display: flex; flex-direction: column" class="content">
                <h3 style ="font-size: 2vh">${i.name}</h3>
                <p style = "height: 7vh" class = "des">${i.des}</p>
                <p class = "price">$${i.price}</p>
            </div>
            <div style="position: relative;">
                <button style = "border-radius: 7px" style = "justify-content: flex-end;" class="btn btn-light btn-add" value = ${i.id}>Add to Cart</button>
            </div>

        </div>
    </div>
        ` 
        if(count == 4){
            html +=`</div>`
            count = 0;
        }
        count++;
        index++;
    }
    items.innerHTML = html;
}



load(presented_arr,1)



function open1(){
    load(presented_arr, 1)
    $(".pagination-btn").css({"background-color":"#80489C"}); $(".pagination-btn").css({"color":"#FCE2DB"});
    $("#1").css({"background-color":"#FCE2DB"}); $("#1").css({"color":"#80489C"});
};
function open2(){
    load(presented_arr, 2)
    // "color: #80489C; background-color: #FCE2DB"
    $(".pagination-btn").css({"background-color":"#80489C"}); $(".pagination-btn").css({"color":"#FCE2DB"});
    $("#2").css({"background-color":"#FCE2DB"}); $("#2").css({"color":"#80489C"});
};
function open3(){
    load(presented_arr, 3)
    $(".pagination-btn").css({"background-color":"#80489C"}); $(".pagination-btn").css({"color":"#FCE2DB"});
    $("#3").css({"background-color":"#FCE2DB"}); $("#3").css({"color":"#80489C"});
};
function open4(){
    load(presented_arr, 4)
    $(".pagination-btn").css({"background-color":"#80489C"}); $(".pagination-btn").css({"color":"#FCE2DB"});
    $("#4").css({"background-color":"#FCE2DB"}); $("#4").css({"color":"#80489C"});
};
function open5(){
    load(presented_arr, 5)
    $(".pagination-btn").css({"background-color":"#80489C"}); $(".pagination-btn").css({"color":"#FCE2DB"});
    $("#5").css({"background-color":"#FCE2DB"}); $("#5").css({"color":"#80489C"});
};
function open6(){
    load(presented_arr, 6)
    $(".pagination-btn").css({"background-color":"#80489C"}); $(".pagination-btn").css({"color":"#FCE2DB"});
    $("#6").css({"background-color":"#FCE2DB"}); $("#6").css({"color":"#80489C"});
};
$("#services").click(function(){
    presented_arr = products[5]
    load(products[5], 1);
    $(".category").css({"height":"4vh", "color":"black;", "font-size": "100%", "background-color": "white"});
    $("#services").css({"height":"5vh", "color":"#432C7A;", "font-size": "120%", "background-color": "#FCE2DB"});
});
$("#pharmacy").click(function(){
    presented_arr = products[0]
    load(products[0], 1);
    $(".category").css({"height":"4vh", "color":"black;", "font-size": "100%", "background-color": "white"});
    $("#pharmacy").css({"height":"5vh", "color":"#432C7A;", "font-size": "120%", "background-color": "#FCE2DB"});
});
$("#supplies").click(function(){
    presented_arr = products[1]
    load(products[1], 1);
    $(".category").css({"height":"4vh", "color":"black;", "font-size": "100%", "background-color": "white"})
    $("#supplies").css({"height":"5vh", "color":"#432C7A;", "font-size": "120%", "background-color": "#FCE2DB"});
});
$("#foods").click(function(){
    presented_arr = products[2]
    load(products[2], 1);
    $(".category").css({"height":"4vh", "color":"black;", "font-size": "100%", "background-color": "white"})
    $("#foods").css({"height":"5vh", "color":"#432C7A;", "font-size": "120%", "background-color": "#FCE2DB"});
});
$("#treats").click(function(){
    presented_arr = products[3]
    load(products[3], 1);
    $(".category").css({"height":"4vh", "color":"black;", "font-size": "100%", "background-color": "white"})
    $("#treats").css({"height":"5vh", "color":"#432C7A;", "font-size": "120%", "background-color": "#FCE2DB"});
});
$("#wellness").click(function(){
    presented_arr = products[4]
    load(products[4], 1);
    $(".category").css({"height":"4vh", "color":"black;", "font-size": "100%", "background-color": "white"})
    $("#wellness").css({"height":"5vh", "color":"#432C7A;", "font-size": "120%", "background-color": "#FCE2DB"});
});


// add to cart
let logged = JSON.parse(localStorage.getItem('login'))
let account = JSON.parse(localStorage.getItem('account'))
var indexacc = 0

for (i in account) {
    if (logged[0].mail == account[i].usermail){
        indexacc = i;
    }
}
let items = document.querySelector("#item-display")
items.addEventListener('click', function(e){
    if(e.srcElement.tagName == "BUTTON"){
        let add = e.srcElement.value
        console.log(total_products[add-1])
        account[indexacc].cart.push(total_products[add-1])
        let accountJSON = JSON.stringify(account)
        localStorage.setItem('account', accountJSON)
    }
})

function load(arr, page){
    navigation(arr);
    Array.prototype.chunk = function ( n ) {
        if ( !this.length ) {
            return [];
        }
        return [ this.slice( 0, n ) ].concat( this.slice(n).chunk(n) );
    };
    arr_split = arr.chunk(8);
    shop_display(arr_split[page-1]);
    
}


let relogin = document.querySelector("#re-login");
relogin.addEventListener('click', function(){
    location.replace("/shop/log-in/login.html")
})

