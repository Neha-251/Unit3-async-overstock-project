

let search_object = localStorage.getItem("search_object");

search_object = JSON.parse(search_object);

console.log(search_object);



let { rating } = search_object;
let { price } = search_object;
let { title } = search_object;
let { reviews } = search_object;
let { brand } = search_object;

let title_p = document.getElementById("title");
title_p.innerText = title;


let brand_p = document.getElementById("brand");
brand_p.innerText = brand;


let price_p = document.getElementById("price");
price_p.innerText = `Sale INR ${Math.round(price * 74.7)}`;

let img_src = "";
let i = 0;
search_object.thumbnails.forEach((images) => {

    images.forEach((imageSolo) => {

        if (i == 5) {
            let image = document.getElementById('main_img');

            image.src = imageSolo;
            img_src = imageSolo;
        }
        i++;
    })
})

let quantity_number = document.getElementById("quantity_number");

let minus_btn = document.getElementById("minus_btn");

let plus_btn = document.getElementById("plus_btn");



let j = 1;


minus_btn.addEventListener("click", () => {

    if (j > 1) {
        j = j - 1;
    }
    quantity_number.innerText = j;

})

plus_btn.addEventListener("click", () => {
    if (j < 19) {
        j = j + 1;
    }
    quantity_number.innerText = j;


})

let count_item = localStorage.getItem("count_item");
count_item = +count_item;

let addToCart_btn = document.getElementById("addToCart_btn");



addToCart_btn.addEventListener("click", () => {
    console.log(j);
    count_item = count_item + 1;
    console.log(img_src);

    let cart = localStorage.getItem("cart");

    cart = JSON.parse(cart);
    console.log(cart);


    for(let i = 0; i < cart.length; i++) {
        if(cart[i]  == search_object) {

            j++;

        } else {

            cart.push(
                {
                    title_pr: title,
                    brand_pr: brand,
                    price_pr: price,
                    img_pr: img_src
        
                }
            );
        }

    } 

    

    localStorage.setItem("cart", JSON.stringify(cart));
  


    localStorage.setItem("count_item", count_item);
    localStorage.setItem("quantity_product", j);
    window.location.href = "cart.html";
})



search_object.variants.forEach((varients_types) => {

    let variant_imgDiv = document.getElementById("variant_imgDiv");

    let { thumbnail } = varients_types;

    let varient_img = document.createElement("img");

    varient_img.src = thumbnail;

    variant_imgDiv.append(varient_img);



    let choose_color = document.getElementById("choose_color");

    let { title } = varients_types;

    let color_p = document.createElement("p");
    color_p.innerText = `${title},  `;

    choose_color.append(color_p);
})









