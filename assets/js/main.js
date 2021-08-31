const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')
})



window.addEventListener("load", () => {
    document.querySelector("body").classList.add("loaded"); 
   });