/**
 * The page will display the data in XML and JSON format
 */

let jsonApiRef =
  "https://random-data-api.com/api/company/random_company?size=40";

let xmlApiRef =
  "https://random-data-api.com/api/company/random_company?size=10&is_xml=true";

//[x] selecting the buttons to control the data flow
//[x] register the load JSON data button to fetch the data from the server in json
//[x] register the load XML data button to fetch the data from the server in XML
//[x] display the data in the box below and when click again clear the content
//[x] then load the whole content from the api again in the box

$(function () {
  //LOAD JSON button lister
 

  let table_header = $("#loaded-data").clone(true);
  
  let deleted;

  
  $(".left-btn").on("click", function () {
   
    $(".json-container").show();

    if (deleted) {
      $(".json-container").append($(table_header));
      deleted = null;
    }

    $(".loading").show();
    $.ajax({
      url: jsonApiRef,
      dataType: "json",
      success: async (response) => {
        await (async function () {
          return new Promise((resolve, reject) => {
            setTimeout(function () {
              resolve("finished");
              $(".loading").hide();
            }, 2000);
          });
        })();

        $("#loaded-data").DataTable({
          data: response,

          columns: [
            { data: "id" },
            { data: "uid" },
            { data: "business_name" },
            { data: "suffix" },
            { data: "industry" },
            { data: "catch_phrase" },
            { data: "buzzword" },
            { data: "bs_company_statement" },
            { data: "employee_identification_number" },
            { data: "duns_number" },
            { data: "logo" },
            { data: "type" },
            { data: "phone_number" },
            { data: "full_address" },
            { data: "latitude" },
            { data: "longitude" },
          ],
        });
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  });

  $(".right-btn").on("click", function () {
    $.ajax({
      url: xmlApiRef,
      dataType: "xml",
      success: (data) => {
        console.log(data);
        deleted = $("#loaded-data").remove();
        $(".dataTables_wrapper").remove();
        $(".json-container").hide();
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  });
});
