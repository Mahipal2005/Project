let login=localStorage.getItem('loggedIn');
console.log(login);
if(login=='true'){

let main = document.getElementsByTagName("main")[0]; // Accessing the first element
const cartData = JSON.parse(localStorage.getItem("cart"));
let mahi = document.getElementById("mahi");

let appeneitems = document.createElement("div");
appeneitems.id = "appeneitems";

function showdata(data) {
  data.forEach((item, index) => {
    let div = document.createElement("div");
    div.classList.add("item");
    let img = document.createElement("img");
    img.src = item.image;
    let title = document.createElement("h3");
    title.textContent = item.title;
    let describe = document.createElement("p");
    describe.textContent = item.describe;
    let location = document.createElement("p");
    location.textContent = "Set location for pricing.";
    let price = document.createElement("h4");
    price.innerHTML = `<h3>Price : ${item.price}</h3>`;
    let remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.addEventListener("click",function(){
        cartData.splice(index,1);
        localStorage.setItem("cart",JSON.stringify(cartData));
        showdata(cartData);
    })
    let buyItems = document.createElement("button");
    buyItems.textContent = "Buy Items";
    buyItems.addEventListener("click", () => {
      alert("this function is not working");
    });
    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(price);
    div.appendChild(location);
    div.appendChild(buyItems);
    div.appendChild(remove);
    appeneitems.appendChild(div);
    main.appendChild(appeneitems);
  });
}

if (!cartData || cartData.length === 0) {
  mahi.addEventListener("click", function () {
    window.location.href = "./menu.html";
  });
} else {
  main.innerHTML = "";
  showdata(cartData);

  let allPrice = document.createElement("div");
  let allproductPrice = 0;
  cartData.forEach((ele, i) => {
    allproductPrice = ele.price + allproductPrice;
  });
  allPrice.innerHTML=`<h1>Total price:${allproductPrice}</h1>`
  allPrice.style.margin="10%"
  main.appendChild(allPrice);
}
}
else{
  alert("Please login first");
  window.location.href = "./login.html";
}