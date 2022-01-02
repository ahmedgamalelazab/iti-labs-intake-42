

$(function(){
  
    //[] select all the circles
    $(".circle").on("click",function(){
        console.log($(this).prop("id"));
        $(".view-container").append($(this).clone());
    })

    $(".circle-1").on("click",function(){
        console.log($(this).prop("id"));
        $(".view-container-2").append($(this).clone(true));
    })


})