window.onload = function () {
    let togglerAnchor = document.querySelector("#togglerAnchor");
    let infoName = document.querySelector("#info h3");
    let infoEmail = document.querySelector("#info p");
    let leftSideMenu = document.querySelector("#leftSideMenu");
    let exitDiv = document.querySelector("#exitDiv");
    let content = document.querySelector("#content");
    let loginLink = document.querySelector("#loginLink");
    let logoutLink = document.querySelector("#logoutLink");
    let profile = document.querySelector("#profile");

    text = localStorage.getItem(localStorage.getItem('email'));
    obj = JSON.parse(text);
    if (obj != null) {
        infoName.innerText = obj.name;
        infoEmail.innerText = obj.email;
        profile.style = "display: block";
        logoutLink.style = "display: block";
        loginLink.style = "display: none";
    }
    logoutLink.addEventListener('click', function(){
        localStorage.removeItem('email');
        profile.style = "display: none";
        logoutLink.style = "display: none";
        loginLink.style = "display: block";
    })

    togglerAnchor.addEventListener("click", function () {
        leftSideMenu.style = "left: 0 !important;";
        exitDiv.className = "is-visible exitClass";
        exitDiv.style.height = document.querySelector("#container").clientHeight + "px";

    });
    exitDiv.addEventListener("click", function () {
        leftSideMenu.style = "left: -260px !important;";
        exitDiv.className = "";
    });

    // section 1 slider 
    let productsSliderObject = [
        { image: "images/products/slider/slider1.jpg" },
        { image: "images/products/slider/slider2.jpg" },
        { image: "images/products/slider/slider3.png" },
        { image: "images/products/slider/slider4.png" },
        { image: "images/products/slider/slider5.jpg" },
        { image: "images/products/slider/slider6.jpg" }
    ];

    let productsSlider = document.querySelector(".productsSlider .upProducts .slider .image img");
    setInterval(function () {
        let randomSlider = Math.floor(Math.random() * productsSliderObject.length);
        productsSlider.src = productsSliderObject[randomSlider].image;
    }, 2000);

    // section 1 upRightProduct
    let upDownProductObject = [
        { image: "images/products/w3.png", desc: "I'm a Product 1", salary: 250 },
        { image: "images/products/w8.jpg", desc: "I'm a Product 2", salary: 300 },
        { image: "images/products/w6.jpg", desc: "I'm a Product 3", salary: 350 },
        { image: "images/products/w9.jpg", desc: "I'm a Product 4", salary: 400 },
        { image: "images/products/w5.jpg", desc: "I'm a Product 5", salary: 450 }
    ];

    let upRightProduct = document.querySelector(".productsSlider .upProducts .upRightProduct");
    let randomUpRight = Math.floor(Math.random() * upDownProductObject.length);
    let image = upRightProduct.getElementsByTagName('img');
    let desc = upRightProduct.getElementsByTagName('p');
    let salary = upRightProduct.getElementsByTagName('h4');
    image[0].src = upDownProductObject[randomUpRight].image;
    desc[0].innerText = upDownProductObject[randomUpRight].desc;
    salary[0].innerText = upDownProductObject[randomUpRight].salary;

    // down products
    let downProduct = document.querySelectorAll(".productsSlider .downProducts .product");
    downProduct.forEach(function (item) {
        let randomDownProduct = Math.floor(Math.random() * upDownProductObject.length);
        let image = item.getElementsByTagName('img');
        let desc = item.getElementsByTagName('p');
        let salary = item.getElementsByTagName('h4');
        image[0].src = upDownProductObject[randomDownProduct].image;
        desc[0].innerText = upDownProductObject[randomDownProduct].desc;
        salary[0].innerText = upDownProductObject[randomDownProduct].salary;
    });


    // section 2 watches 

    let watchesObject = [
        { image: "images/products/w9.jpg", desc: "I'm a Product 1", salary: 250 },
        { image: "images/products/w9.jpg", desc: "I'm a Product 2", salary: 300 },
        { image: "images/products/w9.jpg", desc: "I'm a Product 3", salary: 350 },
        { image: "images/products/w9.jpg", desc: "I'm a Product 4", salary: 400 },
        { image: "images/products/w9.jpg", desc: "I'm a Product 5", salary: 450 }
    ];

    let watchesProducts = document.querySelectorAll(".watches .product");

    watchesProducts.forEach(function (item) {
        let random = Math.floor(Math.random() * watchesObject.length);
        let image = item.getElementsByTagName('img');
        let desc = item.getElementsByTagName('p');
        let salary = item.getElementsByTagName('h4');
        image[0].src = watchesObject[random].image;
        desc[0].innerText = watchesObject[random].desc;
        salary[0].innerText = watchesObject[random].salary;
    });
}
// window.onbeforeunload = function () {
//     localStorage.removeItem('email');
//     return '';
// };