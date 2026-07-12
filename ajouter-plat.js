const imageInput = document.getElementById("food-image");

const previewImage = document.getElementById("preview-image");


imageInput.addEventListener("change", ()=>{


    const file = imageInput.files[0];


    if(!file){

        return;

    }



    // Vérification du format

    if(!file.type.startsWith("image/")){


        alert("Veuillez choisir une image valide.");

        imageInput.value = "";

        return;

    }



    // Vérification du poids (3 Mo)

    const maxSize = 3 * 1024 * 1024;



    if(file.size > maxSize){


        alert("Image trop lourde. La taille maximale est de 3 Mo.");

        imageInput.value = "";

        previewImage.src = "";

        return;

    }



    // Aperçu de l'image

    const reader = new FileReader();



    reader.onload = function(e){


    previewImage.src = e.target.result;

    previewImage.style.display = "block";


}



    reader.readAsDataURL(file);



});

const addFoodBtn = document.getElementById("add-food");

const foodList = document.getElementById("food-list");

const foodName = document.getElementById("food-name");

const foodPrice = document.getElementById("food-price");

const foodCategory = document.getElementById("food-category");

const foodFeatured = document.getElementById("food-featured");


let foods = JSON.parse(localStorage.getItem("foods")) || [];

function displayFoods(){


    foodList.innerHTML = "";


    foods.forEach((food,index)=>{


        const card = document.createElement("div");


        card.className = "food-card";


        card.innerHTML = `


        <img src="${food.image}">


        <h3>
        ${food.name}
        </h3>


        <p>
        ${food.price} FCFA
        </p>


        <button onclick="deleteFood(${index})">

        🗑 Supprimer

        </button>


        `;


        foodList.appendChild(card);



    });


}

addFoodBtn.addEventListener("click",()=>{


    const name = foodName.value.trim();

    const price = foodPrice.value;


    if(name === "" || price === ""){


        alert("Veuillez remplir le nom et le prix");

        return;

    }



    if(!previewImage.src){


        alert("Veuillez choisir une image");

        return;

    }




  const newFood = {

    name:name,

    price:price,

    category:foodCategory.value,

    featured:foodFeatured.checked,

    image:previewImage.src

};

if(foodCategory.value === ""){

    alert("Veuillez choisir une catégorie.");

    return;

}



    foods.push(newFood);



    localStorage.setItem(
        "foods",
        JSON.stringify(foods)
    );



    displayFoods();



    foodName.value="";

    foodPrice.value="";

    previewImage.src="";

    foodCategory.value = "";

foodFeatured.checked = false;

imageInput.value = "";


});

function deleteFood(index){


    foods.splice(index,1);



    localStorage.setItem(
        "foods",
        JSON.stringify(foods)
    );



    displayFoods();


}

displayFoods();