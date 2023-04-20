let menuBtnEl = document.getElementById("menuBtn");
let navEl = document.querySelector(".navbar");

menuBtnEl.addEventListener("click", menubar);

function menubar(){
    if(navEl.style.display ==="none"){
        navEl.style.display = "block";
    } else {
        navEl.style.display = "none";
    }
}