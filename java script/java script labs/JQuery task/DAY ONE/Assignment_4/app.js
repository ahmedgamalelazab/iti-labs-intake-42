$(function () {
  const pageWidth = $(document).width();
  $("button:nth-child(1)").click(function () {
    moveLeft();
  });

  function moveLeft() {
    //?MOVE LEFT BUTTON
    $(".div-to-animate").animate(
      {
        left: `${0}px`,
      },
      2000
    );
  }

  $("button:nth-child(2)").click(function () {
    moveRight();
  });

  function moveRight() {
    //?MOVE RIGHT BUTTON
    $(".div-to-animate").animate(
      {
        left: `${pageWidth - 200}px`,
      },
      2000
    );
  }

  $("button:nth-child(3)").click(function () {
    //?MOVE AROUND BUTTON
     moveAround();
  });

  async function moveAround(){
    return Promise.all([
        moveDown(),
        moveRight(),
        moveUp(),
        moveLeft()
    ]);
  }

  function moveDown() {
    $(".div-to-animate").animate(
      {
        top: "150px",
      },
      2000,
    );
  }

  function moveUp() {
    $(".div-to-animate").animate(
      {
        top: "0px",
        left: `${pageWidth - 200}px`,
      },
      2000
    );
  }
});
