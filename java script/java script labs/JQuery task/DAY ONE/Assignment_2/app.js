//~loading DOM
$(function () {
  // alert("HI");
  //!FOR EACH DOM HAS CLASS DO SOMETHING
  // drawAndListenDiv();
  let _StyleObject = {
    width: "100px",
    height: "100px",
    display: "inline-block",
  };
  $("div").css(_StyleObject).click(function () {
    $("div.div-details-container").html($(this).attr("style"));
  });
});

// function drawAndListenDiv() {
//   //~ASSIGNING FOR EACH DIV A CLICK EVENT
//   $("div").each(function () {
//     switch ($(this).attr("class").toString()) {
//       case "blue-div":
//         $(this).css(buildStyle("100", "100", "blue", "inline-block"));
//         break;
//       case "green-div":
//         $(this).css(buildStyle("100", "100", "green", "inline-block"));
//         break;
//       case "dark-blue-div":
//         $(this).css(buildStyle("100", "100", "darkBlue", "inline-block"));
//         break;
//       case "red-div":
//         $(this).css(buildStyle("100", "100", "red", "inline-block"));
//         break;
//       default:
//         //do nothing
//         break;
//     }
//   });
// }

function buildStyle(width, height, color, display) {
  return {
    "background-color": `${color}`,
    width: `${width}px`,
    height: `${height}px`,
    display: `${display}`,
  };
}
