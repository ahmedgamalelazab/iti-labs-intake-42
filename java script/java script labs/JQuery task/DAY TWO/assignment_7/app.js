$(function () {
  $.fn.extend({
    clorifyLiStartedWithLetter: function (char, color) {
        
        $(this).each((i,el)=>{           
            if ($(el).text().toLowerCase().startsWith(char)) {
                console.log($(el).text());
                console.log(true);
              $(el).css({
                color: color,
              });      
              return $(this);
            } else {
              
            }
        })
      
    },
  });


  $("li").clorifyLiStartedWithLetter("t","blue");


});
