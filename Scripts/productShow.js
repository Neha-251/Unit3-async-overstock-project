

const getData = async ()=> {

    try{
        let search_query = localStorage.getItem("search_query");
        

        let category_heading = document.getElementById("category_heading");

        category_heading.innerHTML = search_query;

        let res = await fetch(`https://serpapi.com/search.json?engine=home_depot&q=${search_query}&api_key=3ee6a41a7f593b829fb86a69c3a14de57f8c262a7870992045dd4a58645b7025`);

        let res_data = await res.json();

        let data = res_data.products;


        console.log('data', data)

        appendData(data);

    }
    catch (error){

        console.log('error', error);

    }
}

getData();


let product_container = document.getElementById("product_container");

const appendData = (data) => {

    data.forEach((elem) => {

        let {rating} = elem;
        let {price} = elem;
        let {title} = elem;
        let {reviews} = elem;


        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("id", "main_Div");


        
            let i = 0;
            elem.thumbnails.forEach((images) => {
    
                images.forEach((imageSolo) => {

                    if(i == 3) {
                        let image = document.createElement('img');
                        image.setAttribute("id", "image_main");
    
                        image.src = imageSolo;
                        mainDiv.append(image);
                    }
                    i++;
                })
            })
        

    
        let p_price = document.createElement("p");
        p_price.setAttribute("id", "p_price");
        p_price.innerText = `Sale INR ${Math.round(price*74.7)}`;

        mainDiv.append(p_price);
    
        let div_rating = document.createElement("div");
        div_rating.setAttribute("id", "div_rating");


        if(rating > 4) {
            let img_rating = document.createElement("img");
            img_rating.style.height = "25px";
            img_rating.style.width = "100px";
            img_rating.src = "https://previews.123rf.com/images/barks/barks1712/barks171200372/92093475-icona-a-cinque-stelle-4-5-.jpg";

            let p_review = document.createElement("p");
            p_review.innerText = reviews;

            div_rating.append(img_rating, p_review);
            mainDiv.append(div_rating);
        }
    
       
    
    
        let p_title = document.createElement("p");
        p_title.innerText = title;
        p_title.setAttribute("id", "p_title");

        mainDiv.append(p_title);
    
        product_container.append(mainDiv);


        mainDiv.addEventListener("click", () => {
            localStorage.setItem("search_object", JSON.stringify(elem));
            window.location.href = "productDetails.html";
        })
    
    })
    
}



