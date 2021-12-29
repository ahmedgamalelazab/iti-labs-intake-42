
$(function () {
  $("button:nth-child(1)").click(function () {
      $("div").animate({
        marginTop:"10px",
        left: '250px',
        height: '150px',
        width: '150px'
      },2000);
  });

  $("button:nth-child(2)").click(function () {
    $("div").stop();
  });
});
