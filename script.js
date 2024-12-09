
    // fetch("https://dummyjson.com/carts")
    const cardEl = document.querySelector(".card")
    const productContainer = document.getElementById("product-container")
    const cartBtn = document.querySelector(".cart-btn")
    const closeBtn = document.querySelector(".close-btn")
    const cartEl = document.querySelector(".cart-tab")

    const increamentBtn = document.querySelector(".increament")
    const decreamentBtn = document.querySelector(".decreament")
    const countValue = document.querySelector(".count-item")


    const fetchData = () => {
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => displayData(data.products))
        // .catch((err) => console.log(err))

    }
    fetchData()

    function displayData(items) {
        console.log(items.title)
        items.forEach((item) => {
            console.log(item)

    //         // const cardDiv = document.createElement("div")
    //         // cardDiv.classList.add("card")
    //         // const cardImgDiv = document.createElement("div")
    //         // cardImgDiv.classList.add("cart-img")
    //         // const cardImg = document.createElement("img")
    //         // cardImg.src = item.thumbnail
    //         // cardImg.alt = item.title
    //         // const cardTitleDiv = document.createElement("div")
    //         // cardTitleDiv.classList.add("cart-title")
    //         // const cardTitle = document.createElement("h4")
    //         // cardTitle.textContent = item.title
    //         // const cardPrice = document.createElement("p")
    //         // cardPrice.textContent = item.price
    //         // const cardBtnDiv = document.createElement("div")
    //         // cardBtnDiv.classList.add("add-cart-btn")
    //         // const cardBtn = document.createElement("button")
    //         // cardBtn.textContent = "Add To Cart"

          
            cardEl.innerHTML = `
             <div class="cart-image">
                    <img src="${item.thumbnail}" alt="">
                </div>
                <div class="cart-title">
                    <h4>${item.title}</h4>
                    <p>Price: $${item.price}</p>
                </div>
                <div class="add-cart-btn">
                    <button>Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            `
            productContainer.append(cardEl)
            



    //         // cardImgDiv.append(cardImg)
    //         // cardTitleDiv.append(cardTitle, cardPrice)
    //         // cardBtnDiv.append(cartBtn)

    //         // productContainer.append(cardImgDiv, cardTitleDiv, cardBtnDiv)
            
        })
    }

    cartBtn.addEventListener("click", () => {
        cartEl.classList.add("hide-cart")
    })
    closeBtn.addEventListener("click", () => {
        cartEl.classList.remove("hide-cart")
    })
    



   
    
