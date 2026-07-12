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


    }



    reader.readAsDataURL(file);



});