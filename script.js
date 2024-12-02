
    // fetch("https://dummyjson.com/carts")
    const cardEl = document.querySelector(".card")
    const productContainer = document.getElementById("product-container")


    const fetchData = () => {
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => displayData(data))
        // .catch((err) => console.log(err))

    }
    fetchData()

    function displayData(items) {
        // console.log(items.carts[0].products[0].title)
        items.forEach((item) => {
            console.log(item);
            
        })
    }



   
    
