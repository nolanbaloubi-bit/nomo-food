
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

        const img = document.createElement("img");

        img.src = item.image;

        img.alt = item.name;

        img.className = "cart-thumb";

        cartProducts.appendChild(img);

          });

    cartTotal.innerHTML = `Total<br>${total.toLocaleString()} FCFA`;
    

}

updateCartBar();