const links = document.querySelectorAll("a");

links.forEach(link => {

    if(link.href.includes("index.html")){

        link.addEventListener("click", function(e){

            e.preventDefault();

            document.body.classList.add("page-exit");

            setTimeout(() => {

                window.location.href = link.href;

            }, 400);

        });

    }

});