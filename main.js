
const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100);
});



// show/hide nav menu
const menu= document.querySelector(".navlist");
const menuBtn= document.querySelector("#open-menu-btn");
const closeBtn= document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav menu
const closeNav =() => {
    menu.style.display = "none";
    closeBtn.style.display ="none";
    menuBtn.style.display ="inline-block";
}
closeBtn.addEventListener('click', closeNav)






