
// navbar jQuery

$(".navbar-toggler").click(function(){
  var navbarul = $($(this).parent()).find(".navbar-collapse");
      console.log($("#navbarSupportedContent").is(":visible"));
      if ($("#navbarSupportedContent").is(":visible")) {
          $(".navbar-div").removeClass("bg-blue");
      }else{
          $(".navbar-div").addClass("bg-blue");
      }
  setTimeout(() => {
  }, 100);
})

// mission-about-page


let active = false;

document.querySelector('.mission-scroller').addEventListener('mousedown',function(){
    active = true;
    document.querySelector('.mission-scroller').classList.add('scrolling');
});
document.body.addEventListener('mouseup',function(){
    active = false;
    document.querySelector('.mission-scroller').classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
    active = false;
    document.querySelector('.mission-scroller').classList.remove('scrolling');
});

document.body.addEventListener('mousemove',function(e){
if (!active) return;
    let x = e.pageX;
    x -= document.querySelector('.mission-wrapper').getBoundingClientRect().left;
    scrollIt(x);
});

function scrollIt(x){
    let transform = Math.max(0,(Math.min(x,document.querySelector('.mission-wrapper').offsetWidth)));
    document.querySelector('.after').style.width = transform+"px";
    document.querySelector('.mission-scroller').style.left = transform-25+"px";
}

scrollIt(150);

document.querySelector('.mission-scroller').addEventListener('touchstart',function(){
    active = true;
    document.querySelector('.mission-scroller').classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
    active = false;
    document.querySelector('.mission-scroller').classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
    active = false;
    document.querySelector('.mission-scroller').classList.remove('scrolling');
});

// $(".header").click(function() {
//   console.log(myfunctioncount);
//   if (myfunctioncount == 1) {
//     $(".dropdown .dropdown-content").removeClass("show");
    
//   }
// });


// Close the dropdown if the user clicks outside of it
$( document ).ready(function () {
  var myfunctioncount = 0;
  $(".header").click(function() {
    console.log(myfunctioncount);
    if (myfunctioncount == 1) {
      $(".dropdown .dropdown-content").removeClass("show");
      
    }
  });
  // window.onclick = function(event) {
  //   console.log(213123);
  //   if (!event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }
})
function myFunction(e) {
  if ($(e).hasClass("show")) {
    $(".dropdown .dropdown-content").removeClass("show");    
  }else{
    $(".dropdown .dropdown-content").removeClass("show");
    $(e).addClass("show");
  }
  if ($(".dropdown .dropdown-content").hasClass("show")) {
    myfunctioncount = 1;
  }else{
    myfunctioncount = 0;
  }
}