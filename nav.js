const burger = document.querySelector(".burger"); 
const burgerIcons = document.querySelectorAll(".fas");


burger.addEventListener("click", function(){
    for(let i = 0; i < burgerIcons.length; i++){
        burgerIcons[i].classList.toggle("show");
    }
    burger.classList.toggle("active");
    burger.classList.toggle("move");
})