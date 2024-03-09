
var _isopen = new Boolean(false);
_isopen = false;

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