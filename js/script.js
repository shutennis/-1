$(function(){
  
  $('.animation').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = jQuery(window).height(),
     topWindow = jQuery(window).scrollTop();
 $('.animation').each(function(){
  var targetPosition = jQuery(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   jQuery(this).addClass("fadeInDown");
  }
 });
});


$('.fa-bars').click(function(){
  var $header=$('.header2-nav');
  if($header.hasClass('open')){
    $header.removeClass('open');
    $header.slideUp(500);
  }else{
    $header.addClass('open');
    $header.slideDown(500);
  }
});

$(window).scroll(function () {
    
  var scrollTop = $(this).scrollTop();
  var scrollBottom = scrollTop + $(this).height();
  var effectPos = scrollBottom - 50;
  
  
  $(".pick-item").each(function (i) {
      if(effectPos > $(this).offset().top){
          var that = this;

         
          setTimeout(function () {
             $(that).addClass("fadein");
          }, 250 * i);
      }
  });
});

$(window).scroll(function () {
    
  var scrollTop = $(this).scrollTop();
  var scrollBottom = scrollTop + $(this).height();
  var effectPos = scrollBottom - 50;
  
  
  $(".lokks-item").each(function (i) {
      if(effectPos > $(this).offset().top){
          var that = this;

         
          setTimeout(function () {
             $(that).addClass("fadein");
          }, 250 * i);
      }
  });
});



$('.fab').hover(
  function(){
    $(this).animate({
      'font-size':'25px'
    },300);
  },
  function(){
    $(this).animate({
      'font-size':'20px'
    },300);
  }

);

$('.slide-contact').slick({
  autoplay:true,
  autplaySpeed:4000,
  arrow:true,
  dots:true
});


});