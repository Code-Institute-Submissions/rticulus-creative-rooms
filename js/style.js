const subHeader = document.querySelector(".lower-header");
const collapsibleToggle = document.querySelector(".hamburger-menu");
let slideIndex = 0;

/*------ Hamburger menu block-----*/
collapsibleToggle.addEventListener ('click', (e) => {
   collapsibleToggle.classList.toggle('active');
    subHeader.classList.toggle('active');
});

window.addEventListener('scroll', () => {

   const scroll = document.documentElement.scrollTop;

    if(scroll > 0) {
        /*document.documentElement.scrollTop;*/
        subHeader.classList.add('fixed');
    }
    else {
        subHeader.classList.remove('fixed');
    }
    //console.log();
});

/*--------Code for slider from www.webscript.info courtesy of Rizwan Khan---*/
carousel();
function carousel() {
let i;
let x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
}
slideIndex++;
if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); 
};

/*--------------------------------------------------------*/

const container = document.querySelector (".container");
const space = document.querySelectorAll (".bookable-times .space:not(.booked)");
const count = document.getElementById ("cost");
const total = document.getElementById ("total");
const spaceHeld = document.getElementById ("product-items");

let productCost = +spaceHeld.value;

// Updated Count
function updateHoldCount() {
    const spacesOnHold = document.querySelectorAll (
        ".bookable-times .space.held");
    
    const spacesOnHoldCount = spacesOnHold.length;

    count.innerText = spacesOnHoldCount;
    total.innerText = spacesOnHoldCount * productCost;
}

// space held listener
spaceHeld.addEventListener("change", e => {
    productCost = +e.target.value;
    updateHoldCount();
});

// space click listener
container.addEventListener ("click", e => {
    if (e.target.classList.contains ("space") &&
        !e.target.classList.contains ("booked")
    ) {
        +e.target.classList.toggle ("held"); 
        
        updateHoldCount();
    }
});
