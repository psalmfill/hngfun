$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css({'background-color': '#FFFFFF','border-bottom':'2px solid #3D9EE3'});
       } else {
          $('.navbar').css({'background-color': 'transparent','border-bottom':'0'});
       }
   });
    }
});