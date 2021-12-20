var inputField = document.querySelector('#news_input_field');


var add_news = document.getElementById('add-news');

var count_rows_container = document.querySelector('.count-rows-container');

var table;
var tr;
var td1;
var td2;
var text1;
var text2;
var init_flag = false;
var counter = 0;

function firstCreation(){
    table = document.createElement('table');
    tr = document.createElement('tr');
    td1 = document.createElement('td');
    td2 = document.createElement('td');
    text1 = document.createTextNode('No');
    text2 = document.createTextNode('News');
    td1.appendChild(text1);
    td2.appendChild(text2);
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
    count_rows_container.insertAdjacentElement('beforebegin',table);
    init_flag = true;
}

add_news.addEventListener('click',function(e){

   if(init_flag === false){
     firstCreation();
   }
    var dr = document.createElement('tr');
    var drd1 = document.createElement('td');
    var drd2 = document.createElement('td');
    var drdText = document.createTextNode(`${++counter}`);
    var drdText2 = document.createTextNode(inputField.value);
    drd1.appendChild(drdText);
    drd2.appendChild(drdText2);
    dr.appendChild(drd1);
    dr.appendChild(drd2);
    table.appendChild(dr);

})

var rows_result = document.querySelector('.rows-result');

count_rows_container.addEventListener('click',function(e){
   rows_result.innerText  = 
   (table.rows.length)-1;
})