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
