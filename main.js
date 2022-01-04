let productItemContainer = document.getElementById("itemContainer");
let subscriberForm = document.getElementById("subscribeForm");
subscriberForm.addEventListener("submit", addNewSubscriber);

function getFeaturedProducts() {
  axios
    .get("/featuredproducts")
    .then((res) => {
      res.data.forEach((item) => {
        listProductNames(item);
      });
    })
    .catch((err) => console.log(err));
}

function addNewSubscriber(e) {
  e.preventDefault();
  let subscribeField = document.getElementById("newEmail");
  let email = subscribeField.value;
  console.log({ email });
  axios
    .post("/subscribe", { email })
    .then(console.log("New Subscriber Added"))
    .catch((err) => console.log(err));
  subscribeField.value = "";
}

function listProductNames(item) {
  const productItemDiv = document.createElement("div");
  productItemDiv.className = "productItemDiv";
  productItemDiv.setAttribute("id", `${item.product_id}`);
  const itemImage = document.createElement("img");
  itemImage.setAttribute("src", `${item.image_url}`);
  const productInfoContainer = document.createElement("div");
  productInfoContainer.className = "itemInfoContainer";
  const productItemTitle = document.createElement("p");
  productItemTitle.textContent = `${item.featured_name}`;
  productItemTitle.className = "itemTitle";
  const productItemPrice = document.createElement("p");
  productItemPrice.className = "itemPrice";
  productItemPrice.textContent = `${item.featured_price}`;
  productInfoContainer.appendChild(productItemTitle);
  productInfoContainer.appendChild(productItemPrice);
  productItemDiv.appendChild(itemImage);
  productItemDiv.appendChild(productInfoContainer);
  productItemContainer.appendChild(productItemDiv);
  productItemDiv.addEventListener("click", itemViewPage);
}

function itemViewPage(e) {
  console.log(e.currentTarget);
  window.localStorage.setItem("itemViewID", e.currentTarget.id);
  window.location.href = "/viewItem.html";
}
getFeaturedProducts();

const cartCount = document.getElementById("cartItemNumber");

if (window.localStorage.getItem("cartCount")) {
  window.localStorage.setItem(
    "cartCount",
    window.localStorage.getItem("cartCount")
  );
  cartCount.textContent = window.localStorage.getItem("cartCount");
} else {
  window.localStorage.setItem("cartCount", 0);
  cartCount.textContent = window.localStorage.getItem("cartCount");
}

let cartIcon = document.getElementById("cartContainer");
cartIcon.addEventListener("click", resetCart);

function resetCart() {
  window.localStorage.setItem("cartCount", 0);
  cartCount.textContent = window.localStorage.getItem("cartCount");
}
