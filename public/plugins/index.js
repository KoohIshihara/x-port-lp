var GLOB = {};

window.onload = function () {

  GLOB.loopCount = 0;

  var firstAnim = function(){
    var loopCount = GLOB.loopCount;
    var noMakers = $('.no-top-marker');
    if(loopCount>0){
      $(noMakers[0]).removeClass('no-top-marker');
    }
    GLOB.loopCount++;

    var i = loopCount-1;
    if(i > noMakers.length){
      $('.bg-cover-top').delay(600).fadeToggle(800);
      clearInterval(GLOB.firstAnimTimer);
    }
  }

  setTimeout(function(){
    GLOB.firstAnimTimer = setInterval(firstAnim, 200);
  }, 400);
  
  
  var scrollFunc = function(){
    var scroll = $(window).scrollTop();
    GLOB.scrollValue = scroll;

    for(var i=0; i<$('.no-marker').length; i++){
      var offset = $($('.no-marker')[i]).offset();
      if(scroll+$(window).height() > offset.top){
        $($('.no-marker')[i]).removeClass('no-marker')
      }
    }
  }

  setInterval(scrollFunc, 500);
};

/*
$(window).scroll(function (){
  var scroll = $(window).scrollTop();
  GLOB.scrollValue = scroll;
  var noMarkers = $('.no-marker');
  for(var i=0; i<noMakers.length; i++){
    var offset = $(noMakers[i]).offset();
    if(scroll-200 < offset.top){
      $(noMakers[i]).removeClass('no-top-marker')
    }
  }
});
*/
