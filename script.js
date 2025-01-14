
    // fetch("https://dummyjson.com/carts")
    const cardEl = document.querySelector(".card")
    const productContainer = document.getElementById("product-container")
    const cartBtn = document.querySelector(".cart-btn")
    const closeBtn = document.querySelector(".close-btn")
    const cartEl = document.querySelector(".cart-tab")

    const cartList = document.querySelector("list-cart")
    const increamentBtn = document.querySelector(".increament")
    const decreamentBtn = document.querySelector(".decreament")
    const countValue = document.querySelector(".count-item")


    const baseURL = "https://dummyjson.com/products"

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
            // console.log(item)
            const cardEl = document.createElement("div")
            cardEl.classList.add("card")

            cardEl.innerHTML = `
             <div class="cart-image">
                    <img src="${item.thumbnail}" alt="">
                </div>
                <div class="cart-title">
                    <h4>${item.title}</h4>
                    <p>Price: $${item.price}</p>
                </div>
                <div class="add-cart-btn">
                    <button class="addCart" onclick="addToCart(${item.id})">Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            `
            productContainer.append(cardEl)
        })

    }

   function addToCart(carts) {
    document.querySelectorAll(".addCart").forEach((btn) => {
        btn.addEventListener("click", function() {
            
        })
    })
   }

    function renderCart(carts) {
        // list-cart
        

        carts.forEach((cart) => {
            const cartList = document.createElement("div")
            cartList.classList.add("added-cart")

            cartList.innerHTML = `
             <div class="img-sec">
                        <img src="${cart.thumbnail}" alt="">
                    </div>
                    <div class="name">
                        <h3>${cart.title}</h3>
                    </div>
                    <div class="total-price">
                        <h4>${cart.price}</h4>
                    </div>
                    <div class="quantity">
                        <button class="decreament">-</button>
                        <span class="count-item">2</span>
                        <button class="increament">+</button>
                    </div>
            `
        })
    }

    cartBtn.addEventListener("click", () => {
        cartEl.classList.add("hide-cart")
    })
    closeBtn.addEventListener("click", () => {
        cartEl.classList.remove("hide-cart")
    })
    



   
    
