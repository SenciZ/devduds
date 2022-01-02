
let productItemContainer = document.getElementById('itemContainer')


function getClickedProduct(id){
    axios.get(`/clickedproduct${id}`)
    .then(res =>{
        res.data.forEach(item =>{
            console.log(item)
            listProductNames(item)
        })
    })
    .catch(err => console.log(err))
}

let currentItemId = window.localStorage.getItem('itemViewID')
console.log(currentItemId)

function listProductNames(item){
    const productItemDiv = document.createElement('div')
    const addToCart = document.createElement('button')
    addToCart.textContent = 'Add To Cart'
    addToCart.className = "addToCartBtn"
    addToCart.addEventListener('click', increaseCartNumber)
    productItemDiv.className = 'productItemDiv'
    productItemDiv.setAttribute('id', `${item.product_id}`)
    const itemImage = document.createElement('img')
    itemImage.setAttribute('src', `${item.image_url}`)
    const productInfoContainer = document.createElement('div')
    productInfoContainer.className = 'itemInfoContainer'
    const productItemTitle = document.createElement('p')
    productItemTitle.textContent = `${item.product_name}`
    productItemTitle.className = 'itemTitle'
    const productItemPrice = document.createElement('p')
    productItemPrice.className = 'itemPrice'
    productItemPrice.textContent = `${item.product_price}`
    const productDescription = document.createElement('p')
    productDescription.textContent = `${item.product_description}`
    productInfoContainer.appendChild(productItemTitle)
    productInfoContainer.appendChild(productItemPrice)
    productItemDiv.appendChild(itemImage)
    productItemDiv.appendChild(productInfoContainer)
    productInfoContainer.appendChild(productDescription)
    productInfoContainer.appendChild(addToCart)
    productItemContainer.appendChild(productItemDiv)
}

let cartNumber = document.getElementById('cartItemNumber')
cartNumber.textContent = window.localStorage.getItem('cartCount');


function increaseCartNumber(){
    let cartNumber = document.getElementById('cartItemNumber')
    let currentNumber = window.localStorage.getItem('cartCount')
    let newNumber = parseInt(currentNumber)+1
    console.log(newNumber)
    cartNumber.textContent = newNumber;
    window.localStorage.setItem('cartCount', newNumber)
}

function itemViewPage(e){
    console.log(e.currentTarget)
    window.localStorage.setItem('itemViewID', 7)
    window.location.href = '/viewItem.html'
}

getClickedProduct(currentItemId)