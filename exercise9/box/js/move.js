$(document).on('mousemove', function(e){
    $('#box').css({
      left:  e.pageX,
      top:   e.pageY
  });
});
