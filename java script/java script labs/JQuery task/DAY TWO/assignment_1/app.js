


//[x] we need to loop on all the rows 
//[x] we need to listen to the user input 
//[x] we need to compare what the user typing with what exists in the table
//[x] check for the first name value if not there search with last name
//[x] show only the td that match the query in the text container

$(function(){

    let searchResult;
    let foundIndex = 0;
    $(":input").on("keyup",function(){
        searchResult = $(this).val();
        $("td").each((i,e)=>{
            if($(e).text().toLowerCase().indexOf(searchResult)!= -1
             && ($(e).text().toLowerCase().indexOf("first name")==-1)
             && ($(e).text().toLowerCase().indexOf("last name")==-1)){
                $("td").not($(e)).hide();
                $(e).show();
            }
            if($(this).val()===''){
                $("td").show();
            }
        })

    })

})