
const buttons = document.querySelectorAll(".add-btn");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".food-card, .featured-card");

        const name = card.querySelector("h3").textContent;

        const priceText = card.querySelector(".price, span").textContent;

        const price = parseInt(priceText.replace(/\D/g, ""));

        const image = card.querySelector("img").src;

        const existing = cart.find(item => item.name === name);

        if(existing){

            existing.quantity++;

        }else{

            cart.push({

                name,
                price,
                image,
                quantity:1

            });

        }

        localStorage.setItem("cart", JSON.stringify(cart));

updateCartBar();

window.addEventListener("pageshow", () => {

    cart = JSON.parse(localStorage.getItem("cart")) || [];

    updateCartBar();

});

        console.log(cart);

    });

});

function updateCartBar(){

    console.log("updateCartBar appelée");

    const cartProducts = document.querySelector(".cart-products");
    const cartTotal = document.querySelector(".cart-total");

    if(!cartProducts || !cartTotal) return;

    cartProducts.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        const product = document.createElement("div");

product.className = "cart-item";


const img = document.createElement("img");

img.src = item.image;

img.alt = item.name;

img.className = "cart-thumb";



const removeBtn = document.createElement("button");

removeBtn.textContent = "×";

removeBtn.className = "remove-cart-item";



removeBtn.addEventListener("click", () => {

    cart = cart.filter(product => product.name !== item.name);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartBar();

});



const quantity = document.createElement("span");

quantity.textContent = item.quantity;

quantity.className = "cart-quantity";


product.appendChild(img);

product.appendChild(quantity);

product.appendChild(removeBtn);


cartProducts.appendChild(product);

          });

    cartTotal.innerHTML = `Total<br>${total.toLocaleString()} FCFA`;
    

}

updateCartBar();

window.addEventListener("cartUpdated", () => {

    cart = JSON.parse(localStorage.getItem("cart")) || [];

    updateCartBar();

});