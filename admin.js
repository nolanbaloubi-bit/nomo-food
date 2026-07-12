const adminBtn = document.getElementById("admin-btn");

const adminModal = document.getElementById("admin-modal");

const closeAdmin = document.querySelector(".close-admin");

const loginBtn = document.getElementById("login-admin");

const adminInput = document.getElementById("admin-code");

const ADMIN_CODE = "NOMO2026";

adminBtn.addEventListener("click", () => {

    adminModal.classList.add("active");

    adminInput.value = "";

    adminInput.focus();

});

closeAdmin.addEventListener("click", () => {

    adminModal.classList.remove("active");

});

loginBtn.addEventListener("click", () => {

    if(adminInput.value === ADMIN_CODE){

        window.location.href = "dashboard.html";

    }else{

        adminInput.classList.add("error");

        adminInput.value = "";

        adminInput.placeholder = "Code incorrect";

        setTimeout(()=>{

            adminInput.classList.remove("error");

            adminInput.placeholder = "Code administrateur";

        },800);

    }

});