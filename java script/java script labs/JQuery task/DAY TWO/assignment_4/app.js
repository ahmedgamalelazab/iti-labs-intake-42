//[x] take course from the user
//[x] add it to variable and , add button will take it
//from the memory and add it to the course-list-ul
//[x] user clicks on the right arrow take the last record to right
//[x] user clicks on the left take the last pushed element and push it to left

$(function () {
  let courseInput = "";

  $(".add-btn").on("click", function () {
    courseInput = $("#course-name").val();
    $(".course-list-ul").append($(`<li>${courseInput}</li>`));
  });

  //listen for the left arrow

  $(".left-button").on("click", function () {
    //shift elements from the left list to the right list
    let cloned = $(".added-course-list-ul li:last").clone(true);
    let removed = $(".added-course-list-ul li:last").remove();
    $(".course-list-ul").append(cloned);
  });

  $(".right-button").on("click", function () {
    let cloned = $(".course-list-ul li:last").clone(true);
    let removed = $(".course-list-ul li:last").remove();
    $(".added-course-list-ul").append(cloned);
  });
});
