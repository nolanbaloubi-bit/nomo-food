console.log("menu.js chargé");

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});

const status = document.getElementById("restaurant-status");

const maintenant = new Date();

const jour = maintenant.getDay(); 
const heure = maintenant.getHours();
const minutes = maintenant.getMinutes();

const heureActuelle = heure + minutes / 60;

let ouvert = false;


// Dimanche
if (jour === 0) {

    ouvert = false;

}

// Lundi à samedi
else {

    if (heureActuelle >= 8 && heureActuelle < 22) {
        ouvert = true;
    }

}


// Affichage

if (ouvert) {

    status.innerHTML = "🟢 Ouvert maintenant • Ferme à 22h00";
    status.className = "status open";

}

else {

    status.innerHTML = "🔴 Fermé • Ouvre demain à 8h00";
    status.className = "status closed";

}

const links = document.querySelectorAll("a");

links.forEach(link => {

    if(link.href.includes("menu.html")){

        link.addEventListener("click", function(e){

            e.preventDefault();

            document.body.classList.add("page-exit");

            setTimeout(() => {

                window.location.href = link.href;

            }, 400);

        });

    }

});