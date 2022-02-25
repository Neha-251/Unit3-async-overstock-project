

let cart = localStorage.getItem("cart");

cart = JSON.parse(cart);

console.log(cart);


// cart total price

let total = 0;


// cart total price

//let k = 0;
let right_mark = document.getElementById("right_mark");


cart.forEach((cartItem_details) => {


    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "mainDiv");

    let { price_pr } = cartItem_details;
    let { title_pr } = cartItem_details;
    let { brand_pr } = cartItem_details;
    let { img_pr } = cartItem_details;

    let main_img = document.createElement("img");
    main_img.setAttribute("id", "main_img");
    main_img.src = img_pr;

    let title_p = document.createElement("p");
    title_p.setAttribute("id", "title_p");
    title_p.innerText = title_pr;

    let brand_p = document.createElement("p");
    brand_p.setAttribute("id", "brand_p");
    brand_p.innerText = `by ${brand_pr}`;

    let price_p = document.createElement("p");
    price_p.setAttribute("id", "price_p");
    price_p.innerText = `Sale INR ${Math.round(price_pr * 74.7)}`;



    // quantity matters

    let quantity_div = document.createElement("div");
    quantity_div.setAttribute("id", "quantity_div");

    let minus_btn = document.createElement("button");
    minus_btn.setAttribute("id", "minus_btn");
    minus_btn.innerHTML = "−";

    let quantity_text = document.createElement("p");
    quantity_text.setAttribute("id", "quantity_text");
    quantity_text.innerText = "Quantity";


    let quantity_number = document.createElement("p");
    quantity_number.setAttribute("id", "quantity_number");


    let plus_btn = document.createElement("button");
    plus_btn.setAttribute("id", "plus_btn");
    plus_btn.innerHTML = "+";

    quantity_div.append(minus_btn, quantity_text, quantity_number, plus_btn);



    let remove_btn = document.createElement("button");
    remove_btn.setAttribute("id", "remove_btn");
    remove_btn.innerHTML = "Remove";


    // cart total price

    let quantity = localStorage.getItem("quantity_product");

    let {quantity_pr} = cartItem_details;
    let j = +quantity_pr;



    let subtotal = document.getElementById("subtotal");

    let total_price = document.getElementById("total_price");

    total = total + Math.round((price_pr * 74.7) * j);

    subtotal.innerText = `INR ${total}`;
    total_price.innerText = `INR ${total}`;





    // cart total price



    



    quantity_number.innerText = j;



    minus_btn.addEventListener("click", () => {
        if (j > 1) {
            j = j - 1;


            total = total - Math.round(price_pr * 74.7);

            subtotal.innerText = `INR ${total}`;
            total_price.innerText = `INR ${total}`;
            right_mark.innerHTML = null;

        }
        quantity_number.innerText = j;


    })

    plus_btn.addEventListener("click", () => {
        if (j < 19) {
            j = j + 1;



            total = total + Math.round(price_pr * 74.7);

            subtotal.innerText = `INR ${total}`;
            total_price.innerText = `INR ${total}`;
            right_mark.innerHTML = null;

        }
        quantity_number.innerText = j;
        console.log(j);

    })




    // quantity matters






    let details_div = document.createElement("div");
    details_div.append(title_p, brand_p, price_p, quantity_div, remove_btn);


    mainDiv.append(main_img, details_div);
    let showProduct_div = document.getElementById("showProduct_div");

    showProduct_div.append(mainDiv);


    let count_item = localStorage.getItem("count_item");




    remove_btn.addEventListener("click", () => {
        mainDiv.innerHTML = null;
        mainDiv.style.border = "none";
        count_item = count_item - 1;
        no_items.innerText = count_item;

        let quantity = localStorage.getItem("quantity_product");

        let j = +quantity;

        total = total - Math.round((price_pr * 74.7) * j);

        subtotal.innerText = `INR ${total}`;
        total_price.innerText = `INR ${total}`;
        right_mark.innerHTML = null;

    })

    let no_items = document.getElementById("no_items");
    no_items.innerText = count_item;




})







// Items count



// Items count



// cart total price


// cart total price



let coupon_flag = false;


right_mark.addEventListener("click", () => {

    let coupon_inp = document.getElementById("coupon_inp").value;
    let right_mark = document.getElementById("right_mark");
    let total_savings = document.getElementById("total_savings");


    if (coupon_inp == "masai30" && coupon_flag === false) {
        console.log('coupon_inp', coupon_inp);

        right_mark.innerHTML = "✔";
        coupon_flag = true;
        console.log(coupon_inp);
        console.log(coupon_flag);

        total = total - Math.round((20 / 100) * (total));


        subtotal.innerText = `INR ${total}`;
        total_price.innerText = `INR ${total}`;
        total_savings.innerText = `INR ${Math.round(total * (20/100))}`;
        console.log(total);


    } else if (coupon_inp != "masai30" && coupon_flag === false) {

        coupon_flag = false;
        right_mark.innerHTML = null;
        console.log(coupon_flag);
        console.log(coupon_inp);


    } else if (coupon_flag === true) {

        right_mark.innerHTML = null;
        coupon_flag = false;
        console.log(coupon_flag);
        console.log(coupon_inp);

        total = total + Math.round((25 / 100) * (total));

        subtotal.innerText = `INR ${total}`;
        total_price.innerText = `INR ${total}`;
        total_savings.innerText = `INR 0`;
        console.log(total);

    }
})


let checkout_btn = document.getElementById("checkout_btn");

checkout_btn.addEventListener("click", ()=> {
    alert("Order Placed Successfully");
})
