const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");

function closePopup(){
    popup.style.display = "none";
    overlay.style.display = "none";
}

openBtn.addEventListener("click", function() {
    popup.style.display = "block";
    overlay.style.display = "block";
});

closeBtn.addEventListener("click", closePopup);
document.addEventListener("keydown", function(event){
    if(event.key === "Escape"){
        closePopup();
    }
});
overlay.addEventListener("click", function() {
    popup.style.display = "none";
    overlay.style.display = "none";
});

