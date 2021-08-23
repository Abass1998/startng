const hamburgers = document.getElementById("hamburger");
const navUl = document.getElementById("nav-lu");
hamburgers.addEventListener("click", ()=>{
      navUl.classList.toggle("show");
});

function myFunction(x) {
  x.classList.toggle("change");
}function myFunction(x) {
  x.classList.toggle("change");
}


var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".myslides"); 
    var dots = document.querySelectorAll(".dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
  }

var slideIndexMentor = 1;
showSlidesMentor(slideIndexMentor);
function currentSlideMentor(n) {
    showSlidesMentor(slideIndexMentor = n);
  }
  function showSlidesMentor(n) {
    var i;
    var slides = document.querySelectorAll(".carol"); 
    var dots = document.querySelectorAll(".dots");
    if (n > slides.length) {slideIndexMentor = 1}
    if (n < 1) {slideIndexMentor = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("activee", "");
    }
    slides[slideIndexMentor-1].style.display = "flex";
    dots[slideIndexMentor-1].className += " activee";
  }
