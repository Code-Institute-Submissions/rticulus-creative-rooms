const subHeader = document.querySelector(".lower-header");
const collapsibleToggle = document.querySelector(".hamburger-menu");

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

/*--------javascript code for slider from www.webscript.info courtesy of Rizwan Khan---*/
carousel();
function carousel() {
let i;
let x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
};
slideIndex++;
if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); 
};

