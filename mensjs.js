
let productItemContainer = document.getElementById('itemContainer')


function getAllMenProducts(){
    axios.get('/menproducts')
    .then(res =>{
        res.data.forEach(item =>{
            // console.log(item)
            listProductNames(item)
        })
    })
    .catch(err => console.log(err))
}


function listProductNames(item){
    const productItemDiv = document.createElement('div')
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
    productInfoContainer.appendChild(productItemTitle)
    productInfoContainer.appendChild(productItemPrice)
    productItemDiv.appendChild(itemImage)
    productItemDiv.appendChild(productInfoContainer)
    productItemContainer.appendChild(productItemDiv)
    productItemDiv.addEventListener('click', itemViewPage)
}

function itemViewPage(e){
    console.log(e.currentTarget)
    window.localStorage.setItem('itemViewID', e.currentTarget.id)
    window.location.href = '/viewItem.html'
}

getAllMenProducts()