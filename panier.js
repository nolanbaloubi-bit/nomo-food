let cart = JSON.parse(localStorage.getItem("cart")) || [];

if(cart.length === 0){

    document.getElementById("cart-list").innerHTML = `

        <div class="empty-cart">

            <h2>Votre panier est vide</h2>

            <p>
                Ajoutez des plats depuis le menu pour commander.
            </p>

        </div>

    `;


    document.getElementById("total").innerHTML =
    "Total : 0 FCFA";


    document.getElementById("validate-order").style.display = "none";

}

const cartList = document.getElementById("cart-list");

const totalDisplay = document.getElementById("total");


let total = 0;



cart.forEach(item => {


    total += item.price * item.quantity;



    const product = document.createElement("div");


    product.className = "order-item";



    product.innerHTML = `

<img src="${item.image}">

<div>

<h3>${item.name}</h3>

<p>
Quantité : ${item.quantity}
</p>

<p>
${(item.price * item.quantity).toLocaleString()} FCFA
</p>

</div>

<button class="delete-item">
×
</button>

`;


    cartList.appendChild(product);


const deleteBtn = product.querySelector(".delete-item");


deleteBtn.addEventListener("click", () => {


    cart = cart.filter(product => product.name !== item.name);


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    location.reload();


});

});



totalDisplay.innerHTML = 
`Total : ${total.toLocaleString()} FCFA`;


const validateBtn = document.getElementById("validate-order");
console.log(validateBtn);

const modal = document.getElementById("whatsapp-modal");

const closeModal = document.querySelector(".close-modal");

const sendBtn = document.getElementById("send-order");



validateBtn.addEventListener("click",()=>{

    modal.classList.add("active");

});



closeModal.addEventListener("click",()=>{

    modal.classList.remove("active");

});



sendBtn.addEventListener("click",()=>{


  const number = document.getElementById("client-number").value;
const tableNumber = document.getElementById("table-number").value;




if(number === ""){

    alert("Veuillez entrer votre numéro");

    return;

}



    let message = 
    "Bonjour NOMO FOOD,%0A%0AJe souhaite commander :%0A%0A";



    let total = 0;



    cart.forEach(item=>{


        message += 
        "- "+item.name+
        " x"+item.quantity+
        " : "+
        (item.price*item.quantity)
        +" FCFA%0A";


        total += item.price*item.quantity;


    });



    message += 
    "%0ATotal : "+
    total+
    " FCFA%0A%0A";



message += 
"Numéro client : "+
number+
"%0A";


if(tableNumber !== ""){

    message += 
    "Numéro de table : "+
    tableNumber;

}



    const restaurantNumber =
    "22940955921";


    window.open(
    "https://wa.me/"+restaurantNumber+
    "?text="+message,
    "_blank"
    );

    localStorage.removeItem("cart");

cart = [];

window.dispatchEvent(new Event("cartUpdated"));

cartList.innerHTML = `

<div class="empty-cart">

<h2>Votre panier est vide</h2>

<p>
Ajoutez des plats depuis le menu pour commander.
</p>

</div>

`;

totalDisplay.innerHTML = "Total : 0 FCFA";

validateBtn.style.display = "none";

modal.classList.remove("active");

alert("Commande envoyée avec succès ! NOMO FOOD vous contactera bientôt.");

});