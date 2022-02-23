

let search_object = localStorage.getItem("search_object");

search_object = JSON.parse(search_object);

console.log(search_object);



let { rating } = search_object;
let { price } = search_object;
let { title } = search_object;
let { reviews } = search_object;
let {brand} = search_object;



let i = 0;
search_object.thumbnails.forEach((images) => {

    images.forEach((imageSolo) => {

        if (i == 5) {
            let image = document.getElementById('main_img');

            image.src = imageSolo;
        }
        i++;
    })
})




search_object.variants.forEach((varients_types) => {

    let variant_imgDiv = document.getElementById("variant_imgDiv");

    let { thumbnail } = varients_types;

    let varient_img = document.createElement("img");

    varient_img.src = thumbnail;

    variant_imgDiv.append(varient_img);



    let choose_color = document.getElementById("choose_color");

    let {title} = varients_types;

    let color_p = document.createElement("p");
    color_p.innerText = `${title},  `;

    choose_color.append(color_p);
})



let title_p = document.getElementById("title");
title_p.innerText = title;


let brand_p = document.getElementById("brand");
brand_p.innerText = brand;



let addToCart_btn = document.getElementById("addToCart_btn");

addToCart_btn.addEventListener("click", () => {
    localStorage.setItem("cartItem_details", JSON.stringify(search_object));

})







