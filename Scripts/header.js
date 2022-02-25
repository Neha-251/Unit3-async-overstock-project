import header from "../components/header.js";
let header_div = document.getElementById("header");

header_div.innerHTML = header();


let cartshopping = document.querySelector("#cart_div");

cartshopping.addEventListener("click", () => {
    let signup_flag = localStorage.getItem("signup_flag");

    if(signup_flag == "successfull"){
        window.location.href = "cart.html";
    } else {
        window.location.href = "signup.html";

    }
})

let item_number = localStorage.getItem("count_item");

let item_count = document.getElementById("item_count");

item_count.innerHTML = item_number;




// Search bar related functions

let search_inp = document.getElementById("search_inp").value;

let searchbar = document.getElementById("search_inp");

let search_btn = document.getElementById("search_btn");

let search_resultsDiv = document.getElementById("search_results_Div");

let search_heading = document.getElementById("search_heading");

let text_resultDiv = document.getElementById("text_resultDiv");

let search_imgDiv = document.getElementById("search_imgDiv");


search_resultsDiv.addEventListener("mouseleave", ()=> {
    search_resultsDiv.style.visibility = "hidden";

})


searchbar.addEventListener("click", async () => {

    try {
        let search_resultsDiv = document.getElementById("search_results_Div");

        let respon = await fetch(`https://serpapi.com/search.json?engine=home_depot&q=chair&api_key=3ee6a41a7f593b829fb86a69c3a14de57f8c262a7870992045dd4a58645b7025`);

        let respon_data = await respon.json();
        let search_data = respon_data.products;


        console.log('search_data', search_data);

        search_resultsDiv.style.visibility = "visible";

        appendSearchData(search_data);

    }
    catch (error) {
        console.log('error', error)

    }

})


searchbar.addEventListener("input", async () => {

    try {
        let search_heading = document.getElementById("search_heading");
        let search_inp = document.getElementById("search_inp").value;


        let respon = await fetch(`https://serpapi.com/search.json?engine=home_depot&q=${search_inp}&api_key=3ee6a41a7f593b829fb86a69c3a14de57f8c262a7870992045dd4a58645b7025`);

        let respon_data = await respon.json();
        let search_data = respon_data.products;

        // search_heading.innerText = null;
        // search_heading.innerText = search_inp;
        console.log('search_data', search_data);

        search_resultsDiv.style.visibility = "visible";
        appendSearchData_inp(search_data);

    }
    catch (error) {
        console.log('error', error)

    }

})



searchbar.addEventListener("keyup", (e) => {


    if (e.keyCode === 13) {

        let search_inp = document.getElementById("search_inp").value;

        localStorage.setItem("search_query", search_inp);
        window.location.href = "productShow.html";

    }
});





search_btn.addEventListener("click", async () => {

    // try {
        let search_inp = document.getElementById("search_inp").value;


        // let respon = await fetch(`https://serpapi.com/search.json?engine=home_depot&q=${search_inp}&api_key=3ee6a41a7f593b829fb86a69c3a14de57f8c262a7870992045dd4a58645b7025`);

        // let respon_data = await respon.json();
        // let search_data = respon_data.products;

        // search_heading.innerText = search_inp;

        // console.log('search_data', search_data)

        // appendSearchData(search_data);


        localStorage.setItem("search_query", search_inp);
        window.location.href = "productShow.html";


    // }
    // catch (error) {
    //     console.log('error', error)

    // }

})

// search_resultsDiv.innerHTML = null;






const appendSearchData = (search_data) => {

    let text_resultDiv = document.getElementById("text_resultDiv");

    let search_imgDiv = document.getElementById("search_imgDiv");
    text_resultDiv.innerHTML = null;
    search_imgDiv.innerHTML = null;




    search_data.forEach((elem) => {

        let { rating } = elem;
        let { price } = elem;
        let { title } = elem;
        let { reviews } = elem;


        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("id", "main_Div");



        let i = 0;
        elem.thumbnails.forEach((images) => {

            images.forEach((imageSolo) => {

                if (i == 3) {
                    let image = document.createElement('img');
                    image.setAttribute("id", "mainDiv_image");

                    image.src = imageSolo;
                    mainDiv.append(image);
                }
                i++;
            })
        })



        let p_price = document.createElement("p");
        p_price.setAttribute("id", "main_price");
        p_price.innerText = `Sale INR ${Math.round(price * 74.7)}`;


        let p_title = document.createElement("p");
        p_title.innerText = title;
        p_title.setAttribute("id", "main_title");

        let div_rating = document.createElement("div");
        div_rating.setAttribute("id", "div_rating");


        if (rating > 4) {
            let img_rating = document.createElement("img");
            img_rating.style.height = "13px";
            img_rating.style.width = "50px";
            img_rating.style.marginBottom = "0px";

            img_rating.src = "https://previews.123rf.com/images/barks/barks1712/barks171200372/92093475-icona-a-cinque-stelle-4-5-.jpg";

            let p_review = document.createElement("p");
            p_review.innerText = `(${reviews})`;
            p_review.style.marginTop = "0px";
            p_review.style.marginBottom = "0px";



            div_rating.append(img_rating, p_review);
            mainDiv.append(div_rating);
        }

        let text_resultDiv = document.getElementById("text_resultDiv");

        let search_imgDiv = document.getElementById("search_imgDiv");

        mainDiv.append(p_price);

        search_imgDiv.append(mainDiv);


        text_resultDiv.append(p_title);


        mainDiv.addEventListener("click", () => {
            localStorage.setItem("search_object", JSON.stringify(elem));
            window.location.href = "productDetails.html";
        })



    })
}

const appendSearchData_inp = (search_data) => {

    let text_resultDiv = document.getElementById("text_resultDiv");

    let search_imgDiv = document.getElementById("search_imgDiv");
    search_imgDiv.innerHTML = null;
    text_resultDiv.innerHTML = null;


    search_data.forEach((elem) => {
        // let text_resultDiv = document.getElementById("text_resultDiv");

        // let search_imgDiv = document.getElementById("search_imgDiv");

        let { rating } = elem;
        let { price } = elem;
        let { title } = elem;
        let { reviews } = elem;


        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("id", "mainDiv");

        let i = 0;
        elem.thumbnails.forEach((images) => {

            images.forEach((imageSolo) => {

                if (i == 3) {
                    let image = document.createElement('img');
                    image.setAttribute("id", "mainDiv_image");

                    image.src = imageSolo;
                    mainDiv.append(image);
                }
                i++;
            })
        })



        let p_price = document.createElement("p");
        p_price.setAttribute("id", "main_price");
        p_price.innerText = `Sale INR ${Math.round(price * 74.7)}`;


        let p_title = document.createElement("p");
        p_title.innerText = title;
        p_title.setAttribute("id", "main_title");

        let div_rating = document.createElement("div");
        div_rating.setAttribute("id", "div_rating");


        if (rating > 4) {
            let img_rating = document.createElement("img");
            img_rating.style.height = "13px";
            img_rating.style.width = "50px";
            img_rating.style.marginBottom = "0px";

            img_rating.src = "https://previews.123rf.com/images/barks/barks1712/barks171200372/92093475-icona-a-cinque-stelle-4-5-.jpg";

            let p_review = document.createElement("p");
            p_review.innerText = `(${reviews})`;
            p_review.style.marginTop = "0px";
            p_review.style.marginBottom = "0px";



            div_rating.append(img_rating, p_review);
            mainDiv.append(div_rating);
        }

        let text_resultDiv = document.getElementById("text_resultDiv");

        let search_imgDiv = document.getElementById("search_imgDiv");

        mainDiv.append(p_price);

        search_imgDiv.append(mainDiv);


        text_resultDiv.append(p_title);


        mainDiv.addEventListener("click", () => {
            localStorage.setItem("search_object", JSON.stringify(elem));
            window.location.href = "productDetails.html";
        })



    })
}



// Search bar related functions




let dropDiv_1 = document.getElementById("dropDiv_1");
let dropDiv_2 = document.getElementById("dropDiv_2");
let dropDiv_3 = document.getElementById("dropDiv_3");
let dropDiv_4 = document.getElementById("dropDiv_4");
let dropDiv_5 = document.getElementById("dropDiv_5");
let dropDiv_6 = document.getElementById("dropDiv_6");
let dropDiv_7 = document.getElementById("dropDiv_7");
let dropDiv_8 = document.getElementById("dropDiv_8");
let dropDiv_9 = document.getElementById("dropDiv_9");
let dropDiv_10 = document.getElementById("dropDiv_10");
let dropDiv_11 = document.getElementById("dropDiv_11");
let dropDiv_12 = document.getElementById("dropDiv_12");
let dropDiv_13 = document.getElementById("dropDiv_13");

let drop_1 = document.getElementById("drop_1");
let drop_2 = document.getElementById("drop_2");
let drop_3 = document.getElementById("drop_3");
let drop_4 = document.getElementById("drop_4");
let drop_5 = document.getElementById("drop_5");
let drop_6 = document.getElementById("drop_6");
let drop_7 = document.getElementById("drop_7");
let drop_8 = document.getElementById("drop_8");
let drop_9 = document.getElementById("drop_9");
let drop_10 = document.getElementById("drop_10");
let drop_11 = document.getElementById("drop_11");
let drop_12 = document.getElementById("drop_12");
let drop_13 = document.getElementById("drop_13");




dropDiv_1.addEventListener("mouseenter", () => {
    drop_1.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";

})

drop_1.addEventListener("mouseleave", () => {
    drop_1.style.visibility = "hidden";
})

dropDiv_2.addEventListener("mouseenter", () => {
    drop_2.style.visibility = "visible";
    drop_1.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
})

drop_2.addEventListener("mouseleave", () => {
    drop_2.style.visibility = "hidden";
})

dropDiv_3.addEventListener("mouseenter", () => {
    drop_3.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
})

drop_3.addEventListener("mouseleave", () => {
    drop_3.style.visibility = "hidden";
})

dropDiv_4.addEventListener("mouseenter", () => {
    drop_4.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
})

drop_4.addEventListener("mouseleave", () => {
    drop_4.style.visibility = "hidden";
})

dropDiv_5.addEventListener("mouseenter", () => {
    drop_5.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
})

drop_5.addEventListener("mouseleave", () => {
    drop_5.style.visibility = "hidden";
})

dropDiv_6.addEventListener("mouseenter", () => {
    drop_6.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
})

drop_6.addEventListener("mouseleave", () => {
    drop_6.style.visibility = "hidden";
})

dropDiv_7.addEventListener("mouseenter", () => {
    drop_7.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
})

drop_7.addEventListener("mouseleave", () => {
    drop_7.style.visibility = "hidden";
})

dropDiv_8.addEventListener("mouseenter", () => {
    drop_8.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
})

drop_8.addEventListener("mouseleave", () => {
    drop_8.style.visibility = "hidden";
})

dropDiv_9.addEventListener("mouseenter", () => {
    drop_9.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
})

drop_9.addEventListener("mouseleave", () => {
    drop_9.style.visibility = "hidden";
})

dropDiv_10.addEventListener("mouseenter", () => {
    drop_10.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
})

drop_10.addEventListener("mouseleave", () => {
    drop_10.style.visibility = "hidden";
})

dropDiv_11.addEventListener("mouseenter", () => {
    drop_11.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
})

drop_11.addEventListener("mouseleave", () => {
    drop_11.style.visibility = "hidden";
})

dropDiv_12.addEventListener("mouseenter", () => {
    drop_12.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
    drop_13.style.visibility = "hidden";
})

drop_12.addEventListener("mouseleave", () => {
    drop_12.style.visibility = "hidden";
})


dropDiv_13.addEventListener("mouseenter", () => {
    drop_13.style.visibility = "visible";
    drop_2.style.visibility = "hidden";
    drop_3.style.visibility = "hidden";
    drop_4.style.visibility = "hidden";
    drop_5.style.visibility = "hidden";
    drop_6.style.visibility = "hidden";
    drop_7.style.visibility = "hidden";
    drop_8.style.visibility = "hidden";
    drop_9.style.visibility = "hidden";
    drop_10.style.visibility = "hidden";
    drop_11.style.visibility = "hidden";
    drop_12.style.visibility = "hidden";
    drop_1.style.visibility = "hidden";
})

drop_13.addEventListener("mouseleave", () => {
    drop_13.style.visibility = "hidden";
})


//
//







let livingRoom = document.querySelector(".livingRoom");

livingRoom.addEventListener("click", () => {
    localStorage.setItem("search_query", "living room");
    window.location.href = "productShow.html";
});

//


let sofa = document.querySelector(".sofa");

sofa.addEventListener("click", () => {
    localStorage.setItem("search_query", "sofa");
    window.location.href = "productShow.html";
});


//

let sectional = document.querySelector(".sectional");

sectional.addEventListener("click", () => {
    localStorage.setItem("search_query", "sectional");
    window.location.href = "productShow.html";
});

//


let bench = document.querySelector(".bench");

bench.addEventListener("click", () => {
    localStorage.setItem("search_query", "bench");
    window.location.href = "productShow.html";
});

//

let ottoman = document.querySelector(".ottoman");

ottoman.addEventListener("click", () => {
    localStorage.setItem("search_query", "ottoman");
    window.location.href = "productShow.html";
});

//


let Recliner = document.querySelector(".Recliner");

Recliner.addEventListener("click", () => {
    localStorage.setItem("search_query", "Recliner");
    window.location.href = "productShow.html";
});

//

let accentTables = document.querySelector(".accentTables");

accentTables.addEventListener("click", () => {
    localStorage.setItem("search_query", "accent tables");
    window.location.href = "productShow.html";
});

//

let tvStand = document.querySelector(".tvStand");

tvStand.addEventListener("click", () => {
    localStorage.setItem("search_query", "tv stand");
    window.location.href = "productShow.html";
});

//

let patio = document.querySelector(".patio");

patio.addEventListener("click", () => {
    localStorage.setItem("search_query", "patio");
    window.location.href = "productShow.html";
});


//

let diningSet = document.querySelector(".diningSet");

diningSet.addEventListener("click", () => {
    localStorage.setItem("search_query", "dining set");
    window.location.href = "productShow.html";
});

//

let sideTable = document.querySelector(".sideTable");

sideTable.addEventListener("click", () => {
    localStorage.setItem("search_query", "side table");
    window.location.href = "productShow.html";
});

//

let chaiseLounghes = document.querySelector(".chaiseLounghes");

chaiseLounghes.addEventListener("click", () => {
    localStorage.setItem("search_query", "chaise lounghes");
    window.location.href = "productShow.html";
});

//

let chair = document.querySelector(".chair");

chair.addEventListener("click", () => {
    localStorage.setItem("search_query", "chair");
    window.location.href = "productShow.html";
});

//

let swing = document.querySelector(".swing");

swing.addEventListener("click", () => {
    localStorage.setItem("search_query", "swing");
    window.location.href = "productShow.html";
});

//

let bedroom = document.querySelector(".bedroom");

bedroom.addEventListener("click", () => {
    localStorage.setItem("search_query", "bedroom");
    window.location.href = "productShow.html";
});

//

let bed = document.querySelector(".bed");

swing.addEventListener("click", () => {
    localStorage.setItem("search_query", "bed");
    window.location.href = "productShow.html";
});

//

let bedroomSet = document.querySelector(".bedroomSet");

bedroomSet.addEventListener("click", () => {
    localStorage.setItem("search_query", "bedroom set");
    window.location.href = "productShow.html";
});

//

let headboard = document.querySelector(".headboard");

headboard.addEventListener("click", () => {
    localStorage.setItem("search_query", "headboard");
    window.location.href = "productShow.html";
});

//

let bedFrame = document.querySelector(".bedFrame");

bedFrame.addEventListener("click", () => {
    localStorage.setItem("search_query", "bedFrame");
    window.location.href = "productShow.html";
});

//

let dressers = document.querySelector(".dressers");

dressers.addEventListener("click", () => {
    localStorage.setItem("search_query", "dressers");
    window.location.href = "productShow.html";
});

//

let nightstand = document.querySelector(".nightstand");

nightstand.addEventListener("click", () => {
    localStorage.setItem("search_query", "nightstand");
    window.location.href = "productShow.html";
});

//

let armoir = document.querySelector(".armoir");

armoir.addEventListener("click", () => {
    localStorage.setItem("search_query", "armoir");
    window.location.href = "productShow.html";
});

//

let mattress = document.querySelector(".mattress");

mattress.addEventListener("click", () => {
    localStorage.setItem("search_query", "mattress");
    window.location.href = "productShow.html";
});


//

let kidsBed = document.querySelector(".kidsBed");

kidsBed.addEventListener("click", () => {
    localStorage.setItem("search_query", "kids bed");
    window.location.href = "productShow.html";
});

//

let officeFurniture = document.querySelector(".officeFurniture");

officeFurniture.addEventListener("click", () => {
    localStorage.setItem("search_query", "officeFurniture");
    window.location.href = "productShow.html";
});

//

let desk = document.querySelector(".desk");

desk.addEventListener("click", () => {
    localStorage.setItem("search_query", "desk");
    window.location.href = "productShow.html";
});

//

let officeChair = document.querySelector(".officeChair");

officeChair.addEventListener("click", () => {
    localStorage.setItem("search_query", "officeChair");
    window.location.href = "productShow.html";
});
//

let smallSpaceDesk = document.querySelector(".smallSpaceDesk");

smallSpaceDesk.addEventListener("click", () => {
    localStorage.setItem("search_query", "small space desk");
    window.location.href = "productShow.html";
});

//

let fileCabinet = document.querySelector(".fileCabinet");

fileCabinet.addEventListener("click", () => {
    localStorage.setItem("search_query", "file cabinet");
    window.location.href = "productShow.html";
});

//

let bar = document.querySelector(".bar");

bar.addEventListener("click", () => {
    localStorage.setItem("search_query", "bar");
    window.location.href = "productShow.html";
});


//


let diningChair = document.querySelector(".diningChair");

diningChair.addEventListener("click", () => {
    localStorage.setItem("search_query", "dining chair");
    window.location.href = "productShow.html";
});

//

let dining = document.querySelector(".dining");

dining.addEventListener("click", () => {
    localStorage.setItem("search_query", "dining table");
    window.location.href = "productShow.html";
});
//

let barStool = document.querySelector(".barStool");

barStool.addEventListener("click", () => {
    localStorage.setItem("search_query", "bar stool");
    window.location.href = "productShow.html";
});

//
let barTable = document.querySelector(".barTable");

barTable.addEventListener("click", () => {
    localStorage.setItem("search_query", "bar table");
    window.location.href = "productShow.html";
});


//
let buffet = document.querySelector(".buffet");

buffet.addEventListener("click", () => {
    localStorage.setItem("search_query", "buffet");
    window.location.href = "productShow.html";
});


//
let homeBar = document.querySelector(".homeBar");

homeBar.addEventListener("click", () => {
    localStorage.setItem("search_query", "home bar");
    window.location.href = "productShow.html";
});

//
let kitchenIsland = document.querySelector(".kitchenIsland");

kitchenIsland.addEventListener("click", () => {
    localStorage.setItem("search_query", "kitchen island");
    window.location.href = "productShow.html";
});

//

let kitchen = document.querySelector(".kitchen");

kitchen.addEventListener("click", () => {
    localStorage.setItem("search_query", "kitchen");
    window.location.href = "productShow.html";
});


let rug = document.querySelector(".rug");

rug.addEventListener("click", () => {
    localStorage.setItem("search_query", "rug");
    window.location.href = "productShow.html";
});

let trendingRug = document.querySelector(".trendingRug");

trendingRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "trending rug");
    window.location.href = "productShow.html";
});

let washableRug = document.querySelector(".washableRug");

washableRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "washable rug");
    window.location.href = "productShow.html";
});

let roundRug = document.querySelector(".roundRug");

roundRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "round rug");
    window.location.href = "productShow.html";
});

let shagRug = document.querySelector(".shagRug");

shagRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "shag rug");
    window.location.href = "productShow.html";
});

let woolRug = document.querySelector(".woolRug");

woolRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "wool rug");
    window.location.href = "productShow.html";
});

let juteRug = document.querySelector(".juteRug");

juteRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "jute rug");
    window.location.href = "productShow.html";
});

let cowhideRug = document.querySelector(".cowhideRug");

cowhideRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "cowhideRug");
    window.location.href = "productShow.html";
});

let greyRug = document.querySelector(".greyRug");

greyRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "grey rug");
    window.location.href = "productShow.html";
});

let blueRug = document.querySelector(".blueRug");

blueRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "blue rug");
    window.location.href = "productShow.html";
});

let ivoryRug = document.querySelector(".ivoryRug");

ivoryRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "ivory rug");
    window.location.href = "productShow.html";
});

let whiteRug = document.querySelector(".whiteRug");

whiteRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "white rug");
    window.location.href = "productShow.html";
});

let blackRug = document.querySelector(".blackRug");

blackRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "black rug");
    window.location.href = "productShow.html";
});

let redRug = document.querySelector(".redRug");

redRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "red rug");
    window.location.href = "productShow.html";
});

let brownRug = document.querySelector(".brownRug");

brownRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "brown rug");
    window.location.href = "productShow.html";
});

let orangeRug = document.querySelector(".orangeRug");

orangeRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "orange rug");
    window.location.href = "productShow.html";
});

let pinkRug = document.querySelector(".pinkRug");

pinkRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "pink rug");
    window.location.href = "productShow.html";
});

let modernRug = document.querySelector(".modernRug");

modernRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "modern rug");
    window.location.href = "productShow.html";
});


let bohemianRug = document.querySelector(".bohemianRug");

bohemianRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "bohemian rug");
    window.location.href = "productShow.html";
});


let PersianRug = document.querySelector(".PersianRug");

PersianRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "Persian rug");
    window.location.href = "productShow.html";
});


let geomatricRug = document.querySelector(".geomatricRug");

geomatricRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "geomatric rug");
    window.location.href = "productShow.html";
});


let abstractRug = document.querySelector(".abstractRug");

abstractRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "abstract rug");
    window.location.href = "productShow.html";
});


let solidRug = document.querySelector(".solidRug");

solidRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "solid rug");
    window.location.href = "productShow.html";
});

let outdoorRug = document.querySelector(".outdoorRug");

outdoorRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "outdoor rug");
    window.location.href = "productShow.html";
});

let rugPad = document.querySelector(".rugPad");

rugPad.addEventListener("click", () => {
    localStorage.setItem("search_query", "rugPad");
    window.location.href = "productShow.html";
});

let kidRug = document.querySelector(".kidRug");

kidRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "kidRug");
    window.location.href = "productShow.html";
});

let doorMat = document.querySelector(".doorMat");

doorMat.addEventListener("click", () => {
    localStorage.setItem("search_query", "doorMat");
    window.location.href = "productShow.html";
});

let stairTreads = document.querySelector(".stairTreads");

stairTreads.addEventListener("click", () => {
    localStorage.setItem("search_query", "stairTreads");
    window.location.href = "productShow.html";
});

let kitchenMat = document.querySelector(".kitchenMat");

kitchenMat.addEventListener("click", () => {
    localStorage.setItem("search_query", "kitchenMat");
    window.location.href = "productShow.html";
});

let BathRug = document.querySelector(".BathRug");

BathRug.addEventListener("click", () => {
    localStorage.setItem("search_query", "BathRug");
    window.location.href = "productShow.html";
});

let mirror = document.querySelector(".mirror");

mirror.addEventListener("click", () => {
    localStorage.setItem("search_query", "mirror");
    window.location.href = "productShow.html";
});

let wallMirror = document.querySelector(".wallMirror");

wallMirror.addEventListener("click", () => {
    localStorage.setItem("search_query", "wall mirror");
    window.location.href = "productShow.html";
});


let bathroomMirror = document.querySelector(".bathroomMirror");

bathroomMirror.addEventListener("click", () => {
    localStorage.setItem("search_query", "bathroom mirror");
    window.location.href = "productShow.html";
});


let floorMirror = document.querySelector(".floorMirror");

floorMirror.addEventListener("click", () => {
    localStorage.setItem("search_query", "floor mirror");
    window.location.href = "productShow.html";
});


let fullLengthMirror = document.querySelector(".fullLengthMirror");

fullLengthMirror.addEventListener("click", () => {
    localStorage.setItem("search_query", "full length mirror");
    window.location.href = "productShow.html";
});


let rectangularMirror = document.querySelector(".rectangularMirror");

rectangularMirror.addEventListener("click", () => {
    localStorage.setItem("search_query", "rectangular mirror");
    window.location.href = "productShow.html";
});


let roundMirror = document.querySelector(".roundMirror");

roundMirror.addEventListener("click", () => {
    localStorage.setItem("search_query", "round mirror");
    window.location.href = "productShow.html";
});


let windowMirror = document.querySelector(".windowMirror");

windowMirror.addEventListener("click", () => {
    localStorage.setItem("search_query", "window mirror");
    window.location.href = "productShow.html";
});


let mirrorSet = document.querySelector(".mirrorSet");

mirrorSet.addEventListener("click", () => {
    localStorage.setItem("search_query", "mirror set");
    window.location.href = "productShow.html";
});


let art = document.querySelector(".art");

art.addEventListener("click", () => {
    localStorage.setItem("search_query", "art");
    window.location.href = "productShow.html";
});


let galleryWrappedCanvas = document.querySelector(".galleryWrappedCanvas");

galleryWrappedCanvas.addEventListener("click", () => {
    localStorage.setItem("search_query", "gallery wrapped canvas");
    window.location.href = "productShow.html";
});



let canvasArt = document.querySelector(".canvasArt");

canvasArt.addEventListener("click", () => {
    localStorage.setItem("search_query", "canvas art");
    window.location.href = "productShow.html";
});


let framedArt = document.querySelector(".framedArt");

framedArt.addEventListener("click", () => {
    localStorage.setItem("search_query", "framed art");
    window.location.href = "productShow.html";
});

let unframedArt = document.querySelector(".unframedArt");

unframedArt.addEventListener("click", () => {
    localStorage.setItem("search_query", "unframed art");
    window.location.href = "productShow.html";
});

let metalArt = document.querySelector(".metalArt");

metalArt.addEventListener("click", () => {
    localStorage.setItem("search_query", "metal art");
    window.location.href = "productShow.html";
});

let woodWallArt = document.querySelector(".woodWallArt");

woodWallArt.addEventListener("click", () => {
    localStorage.setItem("search_query", "wood wall art");
    window.location.href = "productShow.html";
});

let matchingArtSet = document.querySelector(".matchingArtSet");

matchingArtSet.addEventListener("click", () => {
    localStorage.setItem("search_query", "matching art set");
    window.location.href = "productShow.html";
});


let decorativeAccessories = document.querySelector(".decorativeAccessories");

decorativeAccessories.addEventListener("click", () => {
    localStorage.setItem("search_query", "decorative accessories");
    window.location.href = "productShow.html";
});


let indoorFireplaces = document.querySelector(".indoorFireplaces");

indoorFireplaces.addEventListener("click", () => {
    localStorage.setItem("search_query", "indoor fireplaces");
    window.location.href = "productShow.html";
});


let outdoorDecor = document.querySelector(".outdoorDecor");

outdoorDecor.addEventListener("click", () => {
    localStorage.setItem("search_query", "outdoor decor");
    window.location.href = "productShow.html";
});


let accentPieces = document.querySelector(".accentPieces");

accentPieces.addEventListener("click", () => {
    localStorage.setItem("search_query", "accent pieces");
    window.location.href = "productShow.html";
});


let slkPlants = document.querySelector(".slkPlants");

slkPlants.addEventListener("click", () => {
    localStorage.setItem("search_query", "slk plants");
    window.location.href = "productShow.html";
});


let candles = document.querySelector(".candles");

candles.addEventListener("click", () => {
    localStorage.setItem("search_query", "candles");
    window.location.href = "productShow.html";
});

let vase = document.querySelector(".vase");

vase.addEventListener("click", () => {
    localStorage.setItem("search_query", "vase");
    window.location.href = "productShow.html";
});


let roomDivider = document.querySelector(".roomDivider");

roomDivider.addEventListener("click", () => {
    localStorage.setItem("search_query", "room divider");
    window.location.href = "productShow.html";
});


let photoFrame = document.querySelector(".photoFrame");

photoFrame.addEventListener("click", () => {
    localStorage.setItem("search_query", "photo frame");
    window.location.href = "productShow.html";
});


let planter = document.querySelector(".planter");

planter.addEventListener("click", () => {
    localStorage.setItem("search_query", "planter");
    window.location.href = "productShow.html";
});


let windowTreatments = document.querySelector(".windowTreatments");

windowTreatments.addEventListener("click", () => {
    localStorage.setItem("search_query", "window treatments");
    window.location.href = "productShow.html";
});


let curtain = document.querySelector(".curtain");

curtain.addEventListener("click", () => {
    localStorage.setItem("search_query", "curtain");
    window.location.href = "productShow.html";
});


let blinds = document.querySelector(".blinds");

blinds.addEventListener("click", () => {
    localStorage.setItem("search_query", "blinds");
    window.location.href = "productShow.html";
});


let curtainRod = document.querySelector(".curtainRod");

curtainRod.addEventListener("click", () => {
    localStorage.setItem("search_query", "curtain rod");
    window.location.href = "productShow.html";
});



let sheerCurtain = document.querySelector(".sheerCurtain");

sheerCurtain.addEventListener("click", () => {
    localStorage.setItem("search_query", "sheer curtain");
    window.location.href = "productShow.html";
});



let blackotCurtain = document.querySelector(".blackotCurtain");

blackotCurtain.addEventListener("click", () => {
    localStorage.setItem("search_query", "black curtain");
    window.location.href = "productShow.html";
});



let kitchenCurtain = document.querySelector(".kitchenCurtain");

kitchenCurtain.addEventListener("click", () => {
    localStorage.setItem("search_query", "kitchen curtain");
    window.location.href = "productShow.html";
});


let valances = document.querySelector(".valances");

valances.addEventListener("click", () => {
    localStorage.setItem("search_query", "valances");
    window.location.href = "productShow.html";
});


let wallDecor = document.querySelector(".wallDecor");

wallDecor.addEventListener("click", () => {
    localStorage.setItem("search_query", "wallDecor");
    window.location.href = "productShow.html";
});


let decorativeShelves = document.querySelector(".decorativeShelves");

decorativeShelves.addEventListener("click", () => {
    localStorage.setItem("search_query", "decorative shelves");
    window.location.href = "productShow.html";
});


let wallTapestries = document.querySelector(".wallTapestries");

wallTapestries.addEventListener("click", () => {
    localStorage.setItem("search_query", "wall tapestries");
    window.location.href = "productShow.html";
});


let clock = document.querySelector(".clock");

clock.addEventListener("click", () => {
    localStorage.setItem("search_query", "clock");
    window.location.href = "productShow.html";
});


let wallClocks = document.querySelector(".wallClocks");

wallClocks.addEventListener("click", () => {
    localStorage.setItem("search_query", "wall clocks");
    window.location.href = "productShow.html";
});


let acrylicWallArt = document.querySelector(".acrylicWallArt");

acrylicWallArt.addEventListener("click", () => {
    localStorage.setItem("search_query", "acrylic wall art");
    window.location.href = "productShow.html";
});


let throwPillow = document.querySelector(".throwPillow");

throwPillow.addEventListener("click", () => {
    localStorage.setItem("search_query", "throw pillow");
    window.location.href = "productShow.html";
});


let accentPillow = document.querySelector(".accentPillow");

accentPillow.addEventListener("click", () => {
    localStorage.setItem("search_query", "accent pillow");
    window.location.href = "productShow.html";
});


let outdoorPiloow = document.querySelector(".outdoorPiloow");

outdoorPiloow.addEventListener("click", () => {
    localStorage.setItem("search_query", "outdoor pillow");
    window.location.href = "productShow.html";
});


let floorPillow = document.querySelector(".floorPillow");

floorPillow.addEventListener("click", () => {
    localStorage.setItem("search_query", "floor pillow");
    window.location.href = "productShow.html";
});


let pouf = document.querySelector(".pouf");

pouf.addEventListener("click", () => {
    localStorage.setItem("search_query", "pouf");
    window.location.href = "productShow.html";
});

let pillowCover = document.querySelector(".pillowCover");

pillowCover.addEventListener("click", () => {
    localStorage.setItem("search_query", "pillow cover");
    window.location.href = "productShow.html";
});

let bedRest = document.querySelector(".bedRest");

bedRest.addEventListener("click", () => {
    localStorage.setItem("search_query", "bed rest");
    window.location.href = "productShow.html";
});

let bedding = document.querySelector(".bedding");

bedding.addEventListener("click", () => {
    localStorage.setItem("search_query", "bedding");
    window.location.href = "productShow.html";
});

let comforterSet = document.querySelector(".comforterSet");

comforterSet.addEventListener("click", () => {
    localStorage.setItem("search_query", "comforter set");
    window.location.href = "productShow.html";
});

let duvetCover = document.querySelector(".duvetCover");

duvetCover.addEventListener("click", () => {
    localStorage.setItem("search_query", "duvet cover");
    window.location.href = "productShow.html";
});


let quilt = document.querySelector(".quilt");

quilt.addEventListener("click", () => {
    localStorage.setItem("search_query", "quilt");
    window.location.href = "productShow.html";
});

let blanket = document.querySelector(".blanket");

blanket.addEventListener("click", () => {
    localStorage.setItem("search_query", "blanket");
    window.location.href = "productShow.html";
});

let showerCurtain = document.querySelector(".showerCurtain");

showerCurtain.addEventListener("click", () => {
    localStorage.setItem("search_query", "shower curtain");
    window.location.href = "productShow.html";
});


let towel = document.querySelector(".towel");

towel.addEventListener("click", () => {
    localStorage.setItem("search_query", "towel");
    window.location.href = "productShow.html";
});


let bathroomMat = document.querySelector(".bathroomMat");

bathroomMat.addEventListener("click", () => {
    localStorage.setItem("search_query", "bathroom mat");
    window.location.href = "productShow.html";
});


let bathRobe = document.querySelector(".bathRobe");

bathRobe.addEventListener("click", () => {
    localStorage.setItem("search_query", "bath robe");
    window.location.href = "productShow.html";
});


let bathAccessories = document.querySelector(".bathAccessories");

bathAccessories.addEventListener("click", () => {
    localStorage.setItem("search_query", "bath accessories");
    window.location.href = "productShow.html";
});


let beddingBasics = document.querySelector(".beddingBasics");

beddingBasics.addEventListener("click", () => {
    localStorage.setItem("search_query", "bedding basics");
    window.location.href = "productShow.html";
});


let sheets = document.querySelector(".sheets");

sheets.addEventListener("click", () => {
    localStorage.setItem("search_query", "sheets");
    window.location.href = "productShow.html";
});




let comforter = document.querySelector(".comforter");

comforter.addEventListener("click", () => {
    localStorage.setItem("search_query", "comforter");
    window.location.href = "productShow.html";
});


let pillow = document.querySelector(".pillow");

pillow.addEventListener("click", () => {
    localStorage.setItem("search_query", "pillow");
    window.location.href = "productShow.html";
});


let cottonBedding = document.querySelector(".cottonBedding");

cottonBedding.addEventListener("click", () => {
    localStorage.setItem("search_query", "cotton bedding");
    window.location.href = "productShow.html";
});


let kidsBedding = document.querySelector(".kidsBedding");

kidsBedding.addEventListener("click", () => {
    localStorage.setItem("search_query", "kids bedding");
    window.location.href = "productShow.html";
});


let kidsSheet = document.querySelector(".kidsSheet");

kidsSheet.addEventListener("click", () => {
    localStorage.setItem("search_query", "kids sheet");
    window.location.href = "productShow.html";
});


let kidComforter = document.querySelector(".kidComforter");

kidComforter.addEventListener("click", () => {
    localStorage.setItem("search_query", "kid comforter");
    window.location.href = "productShow.html";
});


let kidBed = document.querySelector(".kidBed");

kidBed.addEventListener("click", () => {
    localStorage.setItem("search_query", "kid bed");
    window.location.href = "productShow.html";
});


let kidQuilt = document.querySelector(".kidQuilt");

kidQuilt.addEventListener("click", () => {
    localStorage.setItem("search_query", "kid quilt");
    window.location.href = "productShow.html";
});


let kidMattress = document.querySelector(".kidMattress");

kidMattress.addEventListener("click", () => {
    localStorage.setItem("search_query", "kid mattress");
    window.location.href = "productShow.html";
});



let twinMattress = document.querySelector(".twinMattress");

twinMattress.addEventListener("click", () => {
    localStorage.setItem("search_query", "twin mattress");
    window.location.href = "productShow.html";
});


let fullMattress = document.querySelector(".fullMattress");

fullMattress.addEventListener("click", () => {
    localStorage.setItem("search_query", "full mattress");
    window.location.href = "productShow.html";
});



let queenMattress = document.querySelector(".queenMattress");

queenMattress.addEventListener("click", () => {
    localStorage.setItem("search_query", "queen mattress");
    window.location.href = "productShow.html";
});



let kingMattress = document.querySelector(".kingMattress");

kingMattress.addEventListener("click", () => {
    localStorage.setItem("search_query", "king mattress");
    window.location.href = "productShow.html";
});




let airMattress = document.querySelector(".airMattress");

airMattress.addEventListener("click", () => {
    localStorage.setItem("search_query", "air mattress");
    window.location.href = "productShow.html";
});



let bathroomFurniture = document.querySelector(".bathroomFurniture");

bathroomFurniture.addEventListener("click", () => {
    localStorage.setItem("search_query", "bathroom furniture");
    window.location.href = "productShow.html";
});


let bathroomVanities = document.querySelector(".bathroomVanities");

bathroomVanities.addEventListener("click", () => {
    localStorage.setItem("search_query", "bathroom vanities");
    window.location.href = "productShow.html";
});


let bathroomSink = document.querySelector(".bathroomSink");

bathroomSink.addEventListener("click", () => {
    localStorage.setItem("search_query", "bathroom sink");
    window.location.href = "productShow.html";
});



let bathroomFaucet = document.querySelector(".bathroomFaucet");

bathroomFaucet.addEventListener("click", () => {
    localStorage.setItem("search_query", "bathroom faucet");
    window.location.href = "productShow.html";
});



let bathroomCabinet = document.querySelector(".bathroomCabinet");

bathroomCabinet.addEventListener("click", () => {
    localStorage.setItem("search_query", "bathroom cabinet");
    window.location.href = "productShow.html";
});


let tub = document.querySelector(".tub");

tub.addEventListener("click", () => {
    localStorage.setItem("search_query", "bathtub");
    window.location.href = "productShow.html";
});



let shower = document.querySelector(".shower");

shower.addEventListener("click", () => {
    localStorage.setItem("search_query", "shower");
    window.location.href = "productShow.html";
});


let rangeAndOven = document.querySelector(".rangeAndOven");

rangeAndOven.addEventListener("click", () => {
    localStorage.setItem("search_query", "range and oven");
    window.location.href = "productShow.html";
});


let refrigerators = document.querySelector(".refrigerators");

refrigerators.addEventListener("click", () => {
    localStorage.setItem("search_query", "refrigerators");
    window.location.href = "productShow.html";
});



let kitchenFaucets = document.querySelector(".kitchenFaucets");

kitchenFaucets.addEventListener("click", () => {
    localStorage.setItem("search_query", "kitchen faucets");
    window.location.href = "productShow.html";
});


let flooring = document.querySelector(".flooring");
flooring
flooring.addEventListener("click", () => {
    localStorage.setItem("search_query", "flooring");
    window.location.href = "productShow.html";
});


let tile = document.querySelector(".tile");

tile.addEventListener("click", () => {
    localStorage.setItem("search_query", "tile");
    window.location.href = "productShow.html";
});


let laminateFlooring = document.querySelector(".laminateFlooring");

laminateFlooring.addEventListener("click", () => {
    localStorage.setItem("search_query", "laminate flooring");
    window.location.href = "productShow.html";
});


let vinylFlooring = document.querySelector(".vinylFlooring");

vinylFlooring.addEventListener("click", () => {
    localStorage.setItem("search_query", "vinyl flooring");
    window.location.href = "productShow.html";
});


let wallpaper = document.querySelector(".wallpaper");

wallpaper.addEventListener("click", () => {
    localStorage.setItem("search_query", "wallpaper");
    window.location.href = "productShow.html";
});


let homeEssential = document.querySelector(".homeEssential");

homeEssential.addEventListener("click", () => {
    localStorage.setItem("search_query", "home essential");
    window.location.href = "productShow.html";
});


let vacuum = document.querySelector(".vacuum");

vacuum.addEventListener("click", () => {
    localStorage.setItem("search_query", "vacuum");
    window.location.href = "productShow.html";
});


let heating = document.querySelector(".heating");

heating.addEventListener("click", () => {
    localStorage.setItem("search_query", "heating");
    window.location.href = "productShow.html";
});



let airQuality = document.querySelector(".airQuality");

airQuality.addEventListener("click", () => {
    localStorage.setItem("search_query", "air quality");
    window.location.href = "productShow.html";
});


let sewingMachine = document.querySelector(".sewingMachine");

sewingMachine.addEventListener("click", () => {
    localStorage.setItem("search_query", "sewing machine");
    window.location.href = "productShow.html";
});


let craftMachine = document.querySelector(".craftMachine");

craftMachine.addEventListener("click", () => {
    localStorage.setItem("search_query", "craft machine");
    window.location.href = "productShow.html";
});


let storage = document.querySelector(".storage");

storage.addEventListener("click", () => {
    localStorage.setItem("search_query", "storage");
    window.location.href = "productShow.html";
});


let outdoorStorage = document.querySelector(".outdoorStorage");

outdoorStorage.addEventListener("click", () => {
    localStorage.setItem("search_query", "outdoor storage");
    window.location.href = "productShow.html";
});


let garageStorage = document.querySelector(".garageStorage");

garageStorage.addEventListener("click", () => {
    localStorage.setItem("search_query", "garage storage");
    window.location.href = "productShow.html";
});


let decorativeStorage = document.querySelector(".decorativeStorage");

decorativeStorage.addEventListener("click", () => {
    localStorage.setItem("search_query", "decorative storage");
    window.location.href = "productShow.html";
});


let closetStorage = document.querySelector(".closetStorage");

closetStorage.addEventListener("click", () => {
    localStorage.setItem("search_query", "closet organizers");
    window.location.href = "productShow.html";
});


let kitchenPantry = document.querySelector(".kitchenPantry");

kitchenPantry.addEventListener("click", () => {
    localStorage.setItem("search_query", "kitchen pantry");
    window.location.href = "productShow.html";
});


let furnitureStorage = document.querySelector(".furnitureStorage");

furnitureStorage.addEventListener("click", () => {
    localStorage.setItem("search_query", "furniture storage");
    window.location.href = "productShow.html";
});


let safes = document.querySelector(".safes");

safes.addEventListener("click", () => {
    localStorage.setItem("search_query", "safes");
    window.location.href = "productShow.html";
});


let laundry = document.querySelector(".laundry");

laundry.addEventListener("click", () => {
    localStorage.setItem("search_query", "laundry");
    window.location.href = "productShow.html";
});






import footer from "../components/footer.js"
let footer_div = document.getElementById("footer_div");

footer_div.innerHTML = footer();
