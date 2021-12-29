// [x] get the selected sport
// [x] get the news text from the user
// [x] the add it to the table using jquery syntax
// [x] user wanna search ok ! ? fine take the data from him
// [x] compare all the table data with what he has searched for
// [x] if match then display only the data he searched for else show all

$(function () {
  
  let randomColors = [
    "red",
    "yellow",
    "orange",
    "grey",
    "AntiqueWhite",
    "Coral",
    "DarkCyan",
    "DarkKhaki",
    "DarkOrchid",
    "DarkMagenta",
    "DeepPink",
    "DimGray",
    "FireBrick",
    "Gold",
    "Indigo",
  ];

  let news_category = "";
  let input_news = "";
  let serial = 0;

  $(":input:radio").click(function () {
    news_category = $(this).val();
  });

  // $("#news-search").val();

  $(".data-submitter").click(function () {
    input_news = $("#news-name").val();
    $("table").append(
      $(`<tr>
    <td>${++serial}</td>
    <td>${input_news}</td>
    <td>${news_category}</td>
    </tr>`).css({
        "background-color": `${
          randomColors[Math.round(Math.random() * randomColors.length)]
        }`,
      })
    );
  });

  //search
  let searchResult;
  let foundIndex = 0;
  $("#news-search").on("keyup", function () {
    searchResult = $(this).val();
    $("td").each((i, e) => {
      if (
        $(e).text().toLowerCase().indexOf(searchResult) != -1 &&
        $(e).text().toLowerCase().indexOf("serial") == -1 &&
        $(e).text().toLowerCase().indexOf("topic") == -1
      ) {
        $("td").not($(e)).hide();
        $(e).show();
      }
      if ($(this).val() === "") {
        $("td").show();
      }
    });
  });
});
