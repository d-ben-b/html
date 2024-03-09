
var _isopen = new Boolean(false);
_isopen = false;
let slideIndex = 1;

$('.sign_in').click(function(){
    $('.sign_in_panel').transition('scale');
  })

$('.close_botton').click(function(){
  $('.sign_in_panel').transition('scale');
})
  
/**side bar seletion**/

$('#Expolore').mouseover(function(){
  if (_isopen == false) {
    console.log(_isopen);
    $('.Explore').transition('scale');
    $('.eye_ball').transition('jiggle');
    _isopen = !_isopen;
    console.log(_isopen);
  }
})

$('.Explore').mouseleave(function(){
  $('.Explore').transition('scale');
  _isopen = !_isopen;
  console.log("out:" + _isopen);
})

$('#Story').mouseover(function(){
  if (_isopen == false) {
    $('.Story').transition('scale');
    $('.eye_ball').transition('jiggle');
    _isopen = !_isopen;
    console.log(_isopen);
  }
})

$('.Story').mouseleave(function(){
  $('.Story').transition('scale');
  _isopen = !_isopen;
  console.log("out:" +_isopen);
})

$('#Plan').mouseover(function(){
  if (_isopen == false) {
    $('.Plan').transition('scale');
    $('.eye_ball').transition('jiggle');
    _isopen = !_isopen;
    console.log(_isopen);
  }
})

$('.Plan').mouseleave(function(){
  $('.Plan').transition('scale');
  _isopen = !_isopen;
  console.log("out:" +_isopen);
})

$('.Home').click(function(){
  console.log("HI")
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

/**eye move**/ 
const pupils = document.querySelectorAll(".eye .eye_ball");
window.addEventListener("mousemove", (e) => {
  pupils.forEach((pupil) => {
    // get x and y postion of cursor
    var rect = pupil.getBoundingClientRect();
    var x = (e.pageX - rect.left -100) / 100 + "px";
    var y = (e.pageY - rect.top -100) / 100 + "px";
    pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
  });
});
/**eye move**/ 

/**slide**/
// window.onload = function () {
//   let slideIndex = 1;
//   showSlide(slideIndex);

//   let prev = document.getElementById("prev");
//   prev.addEventListener("click", divideSlides, false);

//   let next = document.getElementById("next");
//   next.addEventListener("click", plusSlides, false);

//   const selectdot = document.querySelectorAll(".dot");
//   for (let i = 0; i < selectdot.length; i++) {
//     selectdot[i].addEventListener("click", function (e) {
//       showSlide((slideIndex = i + 1));
//     });
//   }

//   function plusSlides() {
//     showSlide((slideIndex += 1));
//   }

//   function divideSlides() {
//     showSlide((slideIndex -= 1));
//   }

//   function showSlide(num) {
//     let slides = document.getElementsByClassName("slide__item");
//     let dots = document.getElementsByClassName("dot");
//     if (num > slides.length) {
//       slideIndex = 1;
//     }

//     if (num < 1) {
//       slideIndex = slides.length;
//     }
//     for (let i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (let i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace("active", "");
//     }

//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += "active";
//   }
// };

$('.slide__arraw').click(function(){
  console.log("HI")
  showSlide(slideIndex);

  function showSlide(num){
    let slides = document.getElementsByClassName("Image");
    slides[num].style.display = "block";
    let dots = document.getElementsByClassName("dot");
    dots[num].style.background = "rgba(255, 255, 255, 0.9)";

    if(slideIndex < 5){
      slideIndex++;
    }
    else{
      slideIndex=1
    }

    if(num==1){
      slides[5].style.display = "none";
      dots[5].style.background = rgba(255, 255, 255, 0.9);
    }
    else{
      slides[num-1].style.display = "none";
      $('dots[num-1]').transition('scale');
    }

    console.log("slideIndex=" + slideIndex)
  } 
})