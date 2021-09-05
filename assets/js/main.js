const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')
})




const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});





  // gallery item filter
  
  const filterButtons = document.querySelector("#filter-btns").children;
  const items = document.querySelector(".portfolio-gallery").children;

  for(let i =0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function(){
      for (let j =0; j < filterButtons.length; j++) {
        filterButtons[j].classList.remove("active2")
      }
      this.classList.add("active2");
      const target = this.getAttribute("data-target")

      for (let k = 0; k < items.length; k++) {
        items[k].style.display = "none";
        if (target == items[k].getAttribute("data-id")) {
          items[k].style.display = "block";
        }
        if (target == "all") {
          items[k].style.display = "block";
        }
      }
    })
  }