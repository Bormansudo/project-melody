$(document).ready(function () {
  var currentGloor = 2;
  var gloorPath = $(".home-image path");
  var counterup = $('.counter-up'); 
  var counterdw = $('.counter-down'); 
  gloorPath.on("mouseover", function(){
    currentGloor = $(this).attr('data-gloor');
    gloorPath.removeClass("current-floor");
    $('.counter').text(currentGloor);
  });

  counterup.on("click", function(){
    if (currentGloor < 18) {
      currentGloor++;
      usCurrentGloor = currentGloor.toLocaleString("en-US", { minimumIntegerDigits: 2, 
      useGrouping: false});
      $('.counter').text(usCurrentGloor);
      gloorPath.removeClass("current-floor");
      $(`[data-gloor=${usCurrentGloor}]`).toggleClass("current-floor");
    } 
  });

  counterdw.on("click", function(){
    if (currentGloor > 2) {
      currentGloor--;
      usCurrentGloor = currentGloor.toLocaleString("en-US", { minimumIntegerDigits: 2, 
      useGrouping: false});
      $('.counter').text(usCurrentGloor);
      gloorPath.removeClass("current-floor");
      $(`[data-gloor=${usCurrentGloor}]`).toggleClass("current-floor");
    }
  });

});