
    // fetch("https://dummyjson.com/carts")
    // const cardEl = document.querySelector(".card")
    const productContainer = document.getElementById("product-container")
    const cartBtn = document.querySelector(".cart-btn")
    const closeBtn = document.querySelector(".close-btn")
    const cartEl = document.querySelector(".cart-tab")
    const cardCount = document.querySelector(".card-count")

    const cartList = document.querySelector(".list-cart")
    const cartTotal = document.querySelector(".cart-total")
    const cartProductImage = document.querySelector("cart-product-image")
    const cartProductName = document.querySelector("cart-product-name")
    const increamentBtn = document.querySelector(".increament")
    const decreamentBtn = document.querySelector(".decreament")
    const countValue = document.querySelector(".count-item")

    let cardCountValue = 0
    let cartTotalValue = 0
    let cartArray = []

    const baseURL = "https://dummyjson.com/products"

    const fetchData = () => {
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => displayData(data.products))
        // .catch((err) => console.log(err))

    }
    fetchData()

    function displayData(items) {
        console.log(items)
        items.forEach((item) => {
            // console.log(item)
            const productElDiv = document.createElement("div")
            productElDiv.classList.add("card")

            const cartImgDiv = document.createElement("div")
            cartImgDiv.classList.add("cart-image")
            const cartImg = document.createElement("img")
            cartImg.src = item.thumbnail
            cartImg.alt = item.title

            const cartTitleDiv = document.createElement("div")
            cartTitleDiv.classList.add("cart-title")
            const cartTitle = document.createElement("h4")
            cartTitle.textContent = item.title

            const cartPrice = document.createElement("p")
            cartPrice.textContent = `$${item.price}`

            const cartButtonDiv = document.createElement("div")
            cartButtonDiv.classList.add("add-cart-btn")
            const cartBtn = document.createElement("button")
            cartBtn.classList.add("cart-btn")
            cartBtn.addEventListener('click', () => addToCart(item.id, item.thumbnail, item.title, item.price))
            cartBtn.textContent = "Add To Cart"


            function addToCart(id, image, name, price) {


                     // Cart Count in navbar------
                cardCountValue++
                cardCount.innerHTML = cardCountValue
               // Total------
                cartTotalValue += price
                cartTotal.innerHTML = `Total: $${cartTotalValue.toFixed(2)}`

               // Main Cards----------
                const cartDiv = document.createElement("div")
                cartDiv.classList.add("added-cart")
                const carttImgDiv = document.createElement("div")
                carttImgDiv.classList.add("img-sec")
                const carttImg = document.createElement("img")
                carttImg.classList.add("cart-product-img")
                carttImg.src = image

                const carttNameDiv = document.createElement("div")
                carttNameDiv.classList.add("name")
                const carttName = document.createElement("h4")
                carttName.classList.add("cart-product-name")
                carttName.textContent = name

                const carttPriceDiv = document.createElement("div")
                carttPriceDiv.classList.add("total-price")
                const carttPrice = document.createElement("h4")
                carttPrice.textContent = price

                const carttBtnDiv = document.createElement("div")
                carttBtnDiv.classList.add("quantity")
                const cartDecBtn = document.createElement("button")
                cartDecBtn.classList.add("decreament")
                cartDecBtn.textContent = "-"
                const cartCount = document.createElement("span")
                cartCount.classList.add("count-item")
                cartCount.textContent = "2"
                const cartIncBtn = document.createElement("button")
                cartIncBtn.classList.add("increament")

                //Remove card from cart function------
                function removeItem() {
                    cartDiv.remove()
                    cardCountValue--
                    cardCount.innerHTML = cardCountValue

                    cartTotalValue -= price
                cartTotal.innerHTML = `Total: $${cartTotalValue.toFixed(2)}`
                }
                cartIncBtn.addEventListener("click", () => removeItem())
                cartIncBtn.textContent = "+"

                carttImgDiv.appendChild(cartImg)
                carttNameDiv.appendChild(carttName)
                carttPriceDiv.appendChild(carttPrice)
                carttBtnDiv.append(cartDecBtn, cartCount, cartIncBtn)

                cartDiv.append(carttImgDiv, carttNameDiv, carttPriceDiv, carttBtnDiv)
                cartList.appendChild(cartDiv)     
                
               
            }

            cartImgDiv.appendChild(cartImg)
            cartTitleDiv.append(cartTitle, cartPrice)
            cartButtonDiv.appendChild(cartBtn)

            productElDiv.append(cartImgDiv, cartTitleDiv, cartButtonDiv)
            productContainer.appendChild(productElDiv)

            localStorage.setItem("card", JSON.stringify([cartImgDiv, cartTitleDiv]))
   
        })

    }



    cartBtn.addEventListener("click", () => {
        cartEl.classList.add("hide-cart")
    })
    closeBtn.addEventListener("click", () => {
        cartEl.classList.remove("hide-cart")
    })
    



   
    
