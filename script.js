// menu button-----------------------------
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.addEventListener("click", function(){
    navlist.classList.toggle("active");
})
window.onscroll =()=>{
    navlist.classList.remove("active")
};


// typed text-----------------------------
var typed = new Typed(".input",{
    strings:["Fullstack Developer.","Designer."],
    typeSpeed:70,
    backSpeed:60,
    loop:true
})


// preloader-----------------------------
var loader= document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display="none"
})