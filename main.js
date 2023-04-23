let menuBtnEl = document.getElementById("menuBtn");
let navEl = document.querySelector(".navbar");

menuBtnEl.addEventListener("click", menubar);

function menubar(){
    if(navEl.style.display ==="block"){
        navEl.style.display = "none";
    } else {
        navEl.style.display = "block";
    }
}


