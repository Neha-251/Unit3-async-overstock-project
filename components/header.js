function header() {
    return `
    <nav id="navbar">
    <nav id="nav_1">
        <div id="shipsTo_div">
            <p>Ships to:</p>
            <img src="images/indian-flag-png-6828.png" alt="">
            <p>INDIA</p>
        </div>
    </nav>
    <nav id="nav_2">
    <div id="overstock_logo">
            <img src="https://media.glassdoor.com/sqll/14907/overstock-com-squarelogo-1529535998697.png" alt="">
            
            <a href="index.html">
            <p>OVERSTOCK</p>
             </a>

        </div>
        <div id="search_div">
            <input type="text" id="search_inp" placeholder="Search">
            <div id="search_btn"><i class="fa-solid fa-magnifying-glass"></i></div>
        </div>
        <div id="deals_div">
            <i class="fa-brands fa-ideal"></i>
            <p id="nav_text">Deals</p>
        </div>
        <div id="account_div">
            <a href="signup.html">
            <i class="fa-regular fa-user"></i>
            </a>
            <p id="nav_text">Account</p>
        </div>
        <div id="lists_div">
            <i class="fa-regular fa-heart"></i>
            <p id="nav_text">Lists</p>
        </div>
        <div id="cart_div">
            <div id="item_count"></div>
            <i class="fa-solid fa-cart-shopping"></i>
          
            <p id="nav_text">Cart</p>
        </div>
    </nav>


    <nav id="nav_3">

        <div id="dropDiv_1">
        <a href="furniture.html">
            <p>Furniture</p>
            </a>

        </div>
        <div id="dropDiv_2">
            <a href="rugs.html">

            <p>Rugs</p>
            </a>

        </div>
        <div id="dropDiv_3">
        <a href="decor.html">
            <p>Decor</p>
            </a>
        </div>
        <div id="dropDiv_4">
        <a href="bed and bath.html">
            <p>Bed & Bath</p>
            </a>
        </div>
        <div id="dropDiv_5">
        <a href="home improvement.html">
            <p>Home Improve</p>
            </a>
        </div>
        <div id="dropDiv_6">
        <a href="kitchen.html">
            <p>Kitchen</p>
            </a>
        </div>
        <div id="dropDiv_7">
        <a href="outdoor.html">
            <p>Outdoor</p>
            </a>
        </div>
        <div id="dropDiv_8">
        <a href="jewelry.html">
            <p>Jewelry</p>
            </a>
        </div>
        <div id="dropDiv_9">
        <a href="lighting.html">
            <p>Lighting</p>
            </a>
        </div>
        <div id="dropDiv_10">
        <a href="kids and baby.html">
            <p>Kids & Baby</p>
            </a>
        </div>
        <div id="dropDiv_11">
        <a href="more.html">
            <p>More</p>
            </a>
        </div>
        <div id="dropDiv_12">
            <p>Ideas</p>
        </div>
        <div id="dropDiv_13">
            <p>Sales & deals</p>
        </div>

    </nav>
</nav>

<div id="drop_1">
    <div>
        <p id="brand_p" class="livingRoom">Living Room furniture</p>
        <p class="sofa">Sofas & Couches</p>
        <p class="sectional">Sectionals</p>
        <p class="bench">Benches</p>
        <p class="ottoman">Ottomans & Poufs</p>
        <p class="accentChair">Accent Chairs</p>
        <p class="Recliner">Recliners</p>
        <p class="accentTables">Coffee & Accent Tables</p>
        <p class="tvStand">TV Stands</p>

        <p id="brand_p" class="patio">Patio & Outdoor furniture</p>
        <p class="patio">Patio Furniture Sets</p>
        <p class="chair">Sofas, Chairs & Sectionals</p>
        <p class="diningSet">Dining Sets</p>
        <p class="sideTable">Coffee & Side Tables</p>
        <p class="chaiseLounghes">Chaise Lounghes</p>
        <p class="chair">Adirondack Chairs</p>
        <p class="swing">Hammocks & Swings</p>
    </div>
    <div>
        <p id="brand_p" class="bedroom">Bedroom Furniture</p>
        <p class="bed">Beds</p>
        <p class="bedroomSet">Bedroom Sets</p>
        <p class="headboard">Headboards</p>
        <p class="bedFrame">Bed Frames</p>
        <p class="dressers">Dressers & Chests</p>
        <p class="nightstand">Nightstands</p>
        <p class="armoir">Armoires & Wardrobes</p>
        <p class="mattress">Mattress</p>
        <p class="kidsBed">Kids Beds</p>

        <p id="brand_p" class="officeFurniture">Office Furniture</p>
        <p class="desk">Desks</p>
        <p class="officeChair">Office Chairs</p>
        <p class="smallSpaceDesk">Small Space Desks</p>
        <p class="officeShelves">Office Shelves & storage</p>
        <p class="fileCabinet">File Cabinets</p>
        <p class="officeTable">Office & Conference Tables</p>
    </div>
    <div>
        <p id="brand_p" class="bar">Dining Kitchen & Bar</p>
        <p class="diningSet">Kitchen & Dining Sets</p>
        <p class="diningChair">Kitchen & Dining Chairs</p>
        <p class="dining">Kitchen & Dining Tables</p>
        <p class="barStool">Counter & Bar Stools</p>
        <p class="barTable">Bar Tables</p>
        <p class="buffet">Buffets & Sideboards</p>
        <p class="homeBar">Home Bars</p>
        <p class="kitchenIsland">Kitchen Islands & carts</p>
        <p class="kitchen">Kitchen Furniture</p>

        <p id="brand_p">More</p>
        <p class="diningTable">Kitchen & Dining Tables</p>
        <p class="barStool">Counter & Bar Stools</p>
        <p class="barTable">Bar Tables</p>
        <p class="buffets">Buffets & Sideboards</p>
        <p class="homeBar">Home Bars</p>
        <p class="kitchenIsland">Kitchen Islands & carts</p>
        <p class="kitchen">Kitchen Furniture</p>

    </div>
    <div>
        <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/0e1295694a2ff3b54378e6e92b4c0a1f6f3e1407/Mervynn-Mid-century-Fabric-Recliner-Chairs-%28Set-of-2%29-by-Christopher-Knight-Home.jpg?imwidth=320"
            alt="">
        <p id="extraOff_p">Extra 15% off</p>
        <p>Select Furniture by Christopher Knight</p>

        <p id="brand_p">More Ways to Shop</p>
        <p id="red_p">Featured sales</p>
        <p id="red_p">New Arrivals</p>
        <p id="red_p">Clearance</p>
        <p id="red_p">Furniture Advice</p>
    </div>
</div>

<div id="drop_2">
    <div>
        <p id="brand_p" class="rug">Area Rugs By Size</p>
        <p class="rug">3'×5'</p>
        <p class="rug">4'×6'</p>
        <p class="rug">5'×8'</p>
        <p class="rug">6'×9'</p>
        <p class="rug">7'×9'</p>
        <p class="rug">8'×10'</p>
        <p class="rug">9'×10'</p>
        <p class="rug">10'×14'</p>
        <p class="rug">Runner</p>

        <p id="brand_p" class="trendingRug">Trending Rugs</p>
        <p class="washableRug">Washable Rugs</p>
        <p class="roundRug">Round Rugs</p>
        <p class="shagRug">Shag Rugs</p>
        <p class="woolRug">Wool Rugs</p>
        <p class="juteRug">Jute Rugs</p>
        <p class="cowhideRug">Cowhide Rugs</p>
    </div>
    <div>
        <p id="brand_p" class="rug">Area Rugs By Color</p>
        <p class="greyRug">Grey</p>
        <p class="blueRug">Blue</p>
        <p class="ivoryRug">Ivory</p>
        <p class="whiteRug">White</p>
        <p class="blackRug">Black</p>
        <p class="redRug">Red</p>
        <p class="brownRug">Brown</p>
        <p class="orangeRug">Orange</p>
        <p class="pinkRug">Pink</p>

        <p id="brand_p" class="rug">Area Rugs By Style</p>
        <p class="modernRug">Modern & Contemporary</p>
        <p class="bohemianRug">Bohemian & Eclectic</p>
        <p class="PersianRug">Persian</p>
        <p class="geomatricRug">Geometric</p>
        <p class="abstractRug">Abstract</p>
        <p class="solidRug">Solid</p>
    </div>
    <div>
        <p id="brand_p" class="rug">Rugs By Type</p>
        <p class="rug">Area Rugs</p>
        <p class="outdoorRug">Outdoor Rugs</p>
        <p class="rugPad">Rug Pads</p>
        <p class="rug">One of a Kind Rugs</p>
        <p class="kidRug">Kids & Tweens Rugs</p>
        <p class="doorMat">Door Mats</p>
        <p class="stairTreads">Stair Treads</p>
        <p class="kitchenMat">Kitchen Mats & Rugs</p>
        <p class="BathRug">Bath & Rugs</p>
    </div>
    <div>
        <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/b320fbbc82c3e52fbc4d9677db915ee03aa504c1/SAFAVIEH-Madison-Diederike-Boho-Medallion-Distressed-Rug.jpg?imwidth=320"
            alt="">
        <p id="extraOff_p">Extra 15% off</p>
        <p>Select Furniture by Christopher Knight</p>

        <p id="brand_p">More Ways to Shop</p>
        <p id="red_p">Featured sales</p>
        <p id="red_p">New Arrivals</p>
        <p id="red_p">Clearance</p>
        <p id="red_p">Furniture Advice</p>
    </div>
</div>

<div id="drop_3">
    <div>
        <p id="brand_p" class="mirror">Mirrors</p>
        <p class="wallMirror">Wall Mirrors</p>
        <p class="bathroomMirror">Bathroom Vanity Mirrors</p>
        <p class="floorMirror">Floor Mirrors</p>
        <p class="fullLengthMirror">Full Length Mirrors</p>
        <p class="rectangularMirror">Rectangular Mirrors</p>
        <p class="roundMirror">Round Mirrors</p>
        <p class="windowMirror">Window Mirrors</p>
        <p class="mirrorSet">Mirror Sets</p>

        <p id="brand_p" class="art">Art Gallery</p>
        <p class="galleryWrappedCanvas">Gallery Wrapped Canvas</p>
        <p class="canvasArt">Canvas Art</p>
        <p class="framedArt">Framed Prints</p>
        <p class="unframedArt">Unframed Prints</p>
        <p class="metalArt">Metal Art</p>
        <p class="woodWallArt">Wood wall Art</p>
        <p class="matchingArtSet">Matching Sets</p>
    </div>
    <div>
        <p id="brand_p" class="decorativeAccessories">Decorative Accessories</p>
        <p class="indoorFireplaces">Indoor Fireplaces</p>
        <p class="outdoorDecor">Outdoor Decor</p>
        <p class="accentPieces">Accent Pieces</p>
        <p class="slkPlants">Silk Plants</p>
        <p class="candles">Candles and Holders</p>
        <p class="vase">Vases</p>
        <p class="roomDivider">Room Dividers</p>
        <p class="photoFrame">Photo Frames and Albums</p>
        <p class="planter">Planters, Hangers & Stands</p>

        <p id="brand_p" class="windowTreatments">Window Treatments</p>
        <p class="curtain">Curtains & Drapes</p>
        <p class="blinds">Blinds & Shades</p>
        <p class="curtainRod">Curtain Rods & Hardware</p>
        <p class="sheerCurtain">Sheer Curtains</p>
        <p class="blackotCurtain">Blackout Curtains</p>
        <p class="kitchenCurtain">Kitchen Curtains</p>
        <p class="valances">Valances</p>
    </div>
    <div>
        <p id="brand_p" class="wallDecor">Wall Decor</p>
        <p class="decorativeShelves">Decorative Shelves</p>
        <p class="wallTapestries">Wall Tapestries</p>
        <p class="clock">Clocks</p>
        <p class="wallClocks">Wall Decals</p>
        <p class="acrylicWallArt">Acrylic Wall Art</p>

        <p id="brand_p" class="throwPillow">Throw Pillows</p>
        <p class="accentPillow">Accent Pillows</p>
        <p class="outdoorPiloow">Outdoor Pillows</p>
        <p class="floorPillow">Floor Pillows</p>
        <p class="pouf">Poufs</p>
        <p class="pillowCover">Pillow Covers</p>
        <p class="bedRest">Bed Rest</p>
    </div>
    <div>
        <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/d28cbaf23c439090fa43c0cf806ac147b7e1040f/Arched-Dressing-Mirror-Full-length-Floor-Mirror-with-Standing.jpg"
            alt="">
        <p id="extraOff_p">Extra 15% off</p>
        <p>Select Furniture by Christopher Knight</p>

        <p id="brand_p">More Ways to Shop</p>
        <p id="red_p">Featured sales</p>
        <p id="red_p">New Arrivals</p>
        <p id="red_p">Clearance</p>
        <p id="red_p">Furniture Advice</p>
    </div>
</div>

<div id="drop_4">
    <div>
        <p id="brand_p" class="bedding">Bedding</p>
        <p class="comforterSet">Comforter Sets</p>
        <p class="duvetCover">Duvet Covers</p>
        <p class="bed">Bed in a Bag</p>
        <p class="quilt">Quilts & Coverlets</p>
        <p class="blanket">Blankets & Throws</p>
        <p class="showerCurtain">Shower Curtains</p>
        <p class="towel">Towels</p>
        <p class="bathroomMat">Bath & Mats</p>
        <p class="bathRobe">Bath Robes</p>
        <p class="bathAccessories">Bath Accessories</p>
        <p class="bathRobe">Bath Robes</p>
        <p class="bathRobe"Kids Bath</p>
    </div>
    <div>
        <p id="brand_p" class="beddingBasics">Bedding Basics</p>
        <p class="sheets">Sheets & Pillowcases</p>
        <p class="mattress">Mattress & Toppers</p>
        <p class="comforter">Comforters & Duvet Inserts</p>
        <p class="pillow">Pillows</p>
        <p class="cottonBedding">Cotton Bedding</p>
        <p id="brand_p" class="kidsBedding">Kids Bedding</p>
        <p class="kidsSheet">Kids Sheets</p>
        <p class="kidComforter">Kids Comforter Sets</p>
        <p class="kidBed">Kids Bed in a Bag</p>
        <p class="kidQuilt">Kids Quilts</p>
        <p class="bed">Kids Bed Tents & Canopies</p>
        <p class="kidMattress">Kids Mattress</p>
    </div>
    <div>
        <p id="brand_p" class="mattress">Mattress</p>
        <p class="twinMattress">Twin</p>
        <p class="twinMattress">Twin XL</p>
        <p class="fullMattress">Full</p>
        <p class="queenMattress">Queen</p>
        <p class="kingMattress">King</p>
        <p class="twinMattress">California King</p>
        <p class="airMattress">Air Mattress</p>
        <pclass="mattress">Mattress in a Box</p>

        <p id="brand_p" class="bathroomFurniture">Bathroom Furniture</p>
        <p class="bathroomVanities">Bathroom Vanities</p>
        <p class="bathroomMirror">Bathroom Vanity Mirrors</p>
        <p class="bathroomSink">Bathroom Sinks</p>
        <p class="bathroomFaucet">Bathroom Faucets</p>
        <p class="bathroomCabinet">Bathroom Cabinets</p>
        <p class="tub">Tubs</p>
        <p class="shower">Showers</p>
    </div>
    <div>
        <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/aae7298c6dad6ee752e90b9ada8625407c000547/Intelligent-Design-Leena-Shaggy-Faux-Fur-Comforter-Set.jpg"
            alt="">
        <p id="extraOff_p">Extra 15% off</p>
        <p>Select Furniture by Christopher Knight</p>

        <p id="brand_p">More Ways to Shop</p>
        <p id="red_p">Featured sales</p>
        <p id="red_p">New Arrivals</p>
        <p id="red_p">Clearance</p>
        <p id="red_p">Furniture Advice</p>
    </div>
</div>

<div id="drop_5">
    <div>
        <p id="brand_p" class="kitchen">Kitchen</p>
        <p class="rangeAndOven">ranges & Ovens</p>
        <p class="refrigerators">Refrigerators</p>
        <p class="kitchenFaucets">Kitchen Faucets</p>
        <p class="rangeAndOven">ranges & Ovens</p>
        <p class="refrigerators">Refrigerators</p>
        <p class="kitchenFaucets">Kitchen Faucets</p>
        <p class="rangeAndOven">ranges & Ovens</p>
        <p class="refrigerators">Refrigerators</p>
        <p class="kitchenFaucets">Kitchen Faucets</p>

        <p id="brand_p" class="flooring">Flooring & Wall</p>
        <p class="tile">Tile</p>
        <p class="laminateFlooring">Laminate Flooring</p>
        <p class="vinylFlooring">Vinyl Flooring</p>
        <p class="wallpaper">Wallpaper</p>
        <p class="laminateFlooring">Laminate Flooring</p>
        <p class="vinylFlooring">Vinyl Flooring</p>
        <p class="wallpaper">Wallpaper</p>
    </div>
    <div>
        <p id="brand_p" class="bathroom">Bathroom</p>
        <p class="bathroomVanities">Bathroom Vanities</p>
        <p class="bathroomMirror">Bathroom Vanity Mirrors</p>
        <p class="bathroomSink">Bathroom Sinks</p>
        <p class="bathroomFaucet">Bathroom Faucets</p>
        <p class="bathroomCabinet">Bathroom Cabinets</p>
        <p class="tub">Tubs</p>
        <p class="shower">Showers</p>

        <p id="brand_p" class="bathroom">Bathroom</p>
        <p class="homeEssential">Home Essentials</p>
        <p class="vacuum">Vacuums & Floorcare</p>
        <p class="heating">Heating & Cooling</p>
        <p class="airQuality">Air Quality</p>
        <p class="sewingMachine">Sewing Machines</p>
        <p class="craftMachine">Craft Machines</p>

    </div>
    <div>
        <p id="brand_p" class="storage">Storage & Organization</p>
        <p class="outdoorStorage">Outdoor Storage</p>
        <p class="garageStorage">Garage Storage</p>
        <p class="decorativeStorage">Decorative Storage</p>
        <p class="closetStorage">Closet Organizers</p>
        <p class="kitchenPantry">Kitchen & Pantry</p>
        <p class="cabinets">Cabinets</p>
        <p class="furnitureStorage">Furniture Storage</p>
        <p class="safes">Safes</p>
        <p class="laundry">Laundry Room</p>


    </div>
    <div>
        <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/fe65fb3c91f141cb3bc6d2f2f06911180a97c388/Proox-Single-handle-Kitchen-Faucet-Pull-Down-Sprayer-w--Soap-dispenser.jpg"
            alt="">
        <p id="extraOff_p">Extra 15% off</p>
        <p>Select Furniture by Christopher Knight</p>

        <p id="brand_p">More Ways to Shop</p>
        <p id="red_p">Featured sales</p>
        <p id="red_p">New Arrivals</p>
        <p id="red_p">Clearance</p>
        <p id="red_p">Furniture Advice</p>
    </div>
</div>

<div id="drop_6">
    <div>
        <p id="brand_p">Dinnerware</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>


        <p id="brand_p">Cookware & Bakeware</p>
        <p>Tile</p>
        <p>Laminate Flooring</p>

        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
    </div>

    <div>
        <p id="brand_p">Kitchen Furniture</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>


        <p id="brand_p">Kitchen Appliances</p>
        <p>Tile</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>

        <p>Wallpaper</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
    </div>

    <div>
        <p id="brand_p">Serveware</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>


        <p id="brand_p">Kitchen Storage</p>
        <p>Tile</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
    </div>
    <div>
        <img src="https://ak1.ostkcdn.com/images/products/7508194/Hamilton-Beach-26030-Belgian-Waffle-Maker-9e4e0fb9-116d-44c4-9b97-2805b4e2519c_1000.jpg"
            alt="">
        <p id="extraOff_p">Extra 15% off</p>
        <p>Select Furniture by Christopher Knight</p>

        <p id="brand_p">More Ways to Shop</p>
        <p id="red_p">Featured sales</p>
        <p id="red_p">New Arrivals</p>
        <p id="red_p">Clearance</p>
        <p id="red_p">Furniture Advice</p>
    </div>
</div>

<div id="drop_7">

    <div>
        <p id="brand_p">Dinnerware</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>

        <p id="brand_p">Cookware & Bakeware</p>
        <p>Tile</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
    </div>

    <div>
        <p id="brand_p">Kitchen Furniture</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>

        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>

        <p id="brand_p">Kitchen Appliances</p>
        <p>Tile</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>

        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
    </div>

    <div>
        <p id="brand_p">Serveware</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>


        <p id="brand_p">Kitchen Storage</p>
        <p>Tile</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
    </div>
    <div>
        <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/3735ba1b91fa8acfb23da0e7afe50208ada16293/Elias-Outdoor-Acacia-Wood-Outdoor-Chat-Set-by-Christopher-Knight-Home.jpg"
            alt="">
        <p id="extraOff_p">Extra 15% off</p>
        <p>Select Furniture by Christopher Knight</p>

        <p id="brand_p">More Ways to Shop</p>
        <p id="red_p">Featured sales</p>
        <p id="red_p">New Arrivals</p>
        <p id="red_p">Clearance</p>
        <p id="red_p">Furniture Advice</p>
    </div>
</div>

<div id="drop_8">
    <div>
        <p id="brand_p">Dinnerware</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>

        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>

        <p id="brand_p">Cookware & Bakeware</p>
        <p>Tile</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
    </div>

    <div>
        <p id="brand_p">Kitchen Furniture</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>Kitchen Faucets</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>

        <p id="brand_p">Kitchen Appliances</p>
        <p>Tile</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
    </div>

    <div>
        <p id="brand_p">Serveware</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>


        <p id="brand_p">Kitchen Storage</p>
        <p>Tile</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
        <p>Wallpaper</p>
    </div>
    <div>
        <img src="https://ak1.ostkcdn.com/images/products/29068043/Annello-by-Kobelli-14k-Gold-4-Carats-TGW-Oval-Moissanite-Three-Stone-X-Prong-Trellis-Bold-Engagement-Ring-HI-VS-cfa6c2e1-ceaa-4840-805d-66cab8a7ff61_1000.jpg"
            alt="">
        <p id="extraOff_p">Extra 15% off</p>
        <p>Select Furniture by Christopher Knight</p>

        <p id="brand_p">More Ways to Shop</p>
        <p id="red_p">Featured sales</p>
        <p id="red_p">New Arrivals</p>
        <p id="red_p">Clearance</p>
        <p id="red_p">Furniture Advice</p>
    </div>
</div>

<div id="drop_9">
    <div>
        <p id="brand_p">Dinnerware</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p id="brand_p">Cookware & Bakeware</p>
        <p>Tile</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
    </div>

    <div>
        <p id="brand_p">Kitchen Furniture</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Kitchen Faucets</p>

        <p id="brand_p">Kitchen Appliances</p>
        <p>Tile</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>

    </div>

    <div>
        <p id="brand_p">Serveware</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>

        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>


        <p id="brand_p">Kitchen Storage</p>
        <p>Tile</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
       
    </div>
    <div>
        <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/69d6ab9a69fc24a9f5adf1ccef4d0fcf833bf07e/Aged-Wood-Beaded-6-Light-Candle-Chandelier.jpg"
            alt="">
        <p id="extraOff_p">Extra 15% off</p>
        <p>Select Furniture by Christopher Knight</p>

        <p id="brand_p">More Ways to Shop</p>
        <p id="red_p">Featured sales</p>
        <p id="red_p">New Arrivals</p>
        <p id="red_p">Clearance</p>
        <p id="red_p">Furniture Advice</p>
    </div>
</div>

<div id="drop_10">
    <div>
        <p id="brand_p">Dinnerware</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        

        <p id="brand_p">Cookware & Bakeware</p>
        <p>Tile</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>

    </div>

    <div>
        <p id="brand_p">Kitchen Furniture</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
    

        <p id="brand_p">Kitchen Appliances</p>
       
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
    </div>

    <div>
        <p id="brand_p">Kids Bedding</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>

    </div>
    <div>
        <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/b5b17dc8e98e0cfb4ea68622068adf35178581c0/Qaba-Large-Kids-Kitchen-Playset-with-Telephone%2C-Water-Dispenser-Simulation-Cooking-Set-for-Girls-and-Boys%2C-White.jpg"
            alt="">
        <p id="extraOff_p">Extra 15% off</p>
        <p>Select Furniture by Christopher Knight</p>

        <p id="brand_p">More Ways to Shop</p>
        <p id="red_p">Featured sales</p>
        <p id="red_p">New Arrivals</p>
        <p id="red_p">Clearance</p>
        <p id="red_p">Furniture Advice</p>
    </div>

</div>

<div id="drop_11">

    <div>
        <p id="brand_p">Holiday</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Kitchen Faucets</p>

        <p id="brand_p">Health & Beauty</p>
        <p>Tile</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>

    </div>

    <div>
        <p id="brand_p">Gifting</p>
        <p>ranges & Ovens</p>
        
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>

        <p id="brand_p">Exercise Equipemnts</p>
        <p>Tile</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
      
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
    </div>

    <div>
        <p id="brand_p">Pet Supplies</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>
        <p>Refrigerators</p>
        <p>Kitchen Faucets</p>
        <p>ranges & Ovens</p>


        <p id="brand_p">Entryway</p>
        <p>Tile</p>
        <p>Laminate Flooring</p>
        <p>Wallpaper</p>
        <p>Wallpaper</p>
        <p>Laminate Flooring</p>
        <p>Vinyl Flooring</p>
        <p>Wallpaper</p>
    </div>
    <div>
        <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/d9d332346a904102baba51d75106bdad99541592/Soozier-Heavy-Duty-Multi-Function-Power-Rack-Cage-Home-Gym-Exercise-Workout-Station-Strength-Training-w--Stand-Rod.jpg"
            alt="">
        <p id="extraOff_p">Extra 15% off</p>
        <p>Select Furniture by Christopher Knight</p>

        <p id="brand_p">More Ways to Shop</p>
        <p id="red_p">Featured sales</p>
        <p id="red_p">New Arrivals</p>
        <p id="red_p">Clearance</p>
        <p id="red_p">Furniture Advice</p>
    </div>

</div>

<div id="drop_12">

    <div id="drop12_div1">
        <p>More Ways to Shop</p>

        <div id="drop12_div">
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R1MOD1.png" alt="">
                <p>Room Ideas</p>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R1MOD2.png" alt="">
                <p>Shop by Style</p>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R1MOD3.png" alt="">
                <p>Shop by Room</p>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/02222021-ID4-Shop_Easter_Decor.png" alt="">
                <p>Shop Easter Decor</p>
            </div>
        </div>
    </div>
    <div id="drop12_div1">
        <p>Inspiration & Ideas</p>

        <div id="drop12_div">
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R2MOD1.png" alt="">
                <p>Stylists Top & Shag Rugs</p>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R2MOD2.png" alt="">
                <p>Pairing Lights & Seating</p>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R2MOD3.png" alt="">
                <p>Multifunctional Furniture Guide</p>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021-IdeasTab-R2MOD4.png" alt="">
                <p>Best Faux-Down Comforters</p>
            </div>
        </div>
    </div>

</div>

<div id="drop_13">
    <div id="drop13_div1">
        <div>
            <p>sales & deals</p>
        </div>
        <div>
            <p>shop.save.love.repeat</p>
        </div>
        <div>
            <p>Shop Now</p>
        </div>
    </div>
    <div id="drop13_div2">
        <div>
            <img src="https://ak1.ostkcdn.com/img/mxc/02172022-TNFlyoutINTL.jpg?imwidth=320" alt="">
            <div>
                <p>Clearance Prices</p>
                <p>On Winter Essentials</p>

            </div>
        </div>
        <div>
            <img src="https://ak1.ostkcdn.com/img/mxc/12132021-MOPS-StorageWithStyle.png?imwidth=320" alt="">
            <div>
                <p>Storage with Style</p>
                <p>Organize with Ease</p>

            </div>
        </div>
        <div>
            <img src="https://ak1.ostkcdn.com/img/mxc/12132021-MOPS-ShagRugs.png?imwidth=320" alt="">
            <div>
                <p>Chik Shag Rugs</p>
                <p>Shop Rugs Both Plush & Pretty</p>
            </div>
        </div>
        <div>
            <img src="https://ak1.ostkcdn.com/img/mxc/12132021-MOPS-MultifunctionalFurniture.png?imwidth=320"
                alt="">
            <div>
                <p>multifunctional furniture</p>
                <p>Furnish with form & function</p>
            </div>
        </div>
    </div>
</div>
<div id="header_space"></div>

<div id="search_results_Div">

    <div id="heading_searchDiv">
        <p id="search_heading">Popular Searches</p>

        <div id="text_resultDiv"></div>
    </div>

    <div id="search_imgDiv">
    </div>

</div>

`;
}

export default header;


