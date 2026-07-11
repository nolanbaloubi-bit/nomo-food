const homeLink = document.querySelector('.logo a');

if(homeLink){

    homeLink.addEventListener("click", function(e){

        e.preventDefault();

        document.body.classList.add("page-exit");

        setTimeout(() => {

            window.location.href = this.href;

        },400);

    });

}

// ================= MENU TABS =================

const tabs = document.querySelectorAll(".menu-tabs a");
const categories = document.querySelectorAll(".menu-category");

tabs.forEach(tab => {

    tab.addEventListener("click", function(e){

        e.preventDefault();

        tabs.forEach(t => t.classList.remove("active"));

        this.classList.add("active");

        const target = this.dataset.target;

        categories.forEach(category => {

            category.classList.remove("active");

        });

        const section = document.getElementById(target);

if(section){
    section.classList.add("active");
}

    });

});