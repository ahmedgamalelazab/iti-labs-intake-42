console.log("hello");

var user_topic_type;

var init_run = false;

var user_topics_arr = [];

var counter = 0;

var user_fav_section = document.querySelector('.user-topic-and-controls');

var user_news = document.getElementById('user-fav-topic');

var topic_type = document.querySelectorAll('input[type="radio"]');

var submitBtn = document.querySelector('.btn');


for(var j = 0 ; j < topic_type.length ; j ++){
    topic_type[j].addEventListener('click',function(e){
        user_topic_type = this.value;
    })
}




//template 

function createTableRaw(cell1Data,cell2data,cell3Data){

    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3= document.createElement('td');

    var td1text = document.createTextNode(cell1Data);
    var td2text = document.createTextNode(cell2data);
    var td3text = document.createTextNode(cell3Data);

    td1.appendChild(td1text);
    td2.appendChild(td2text);
    td3.appendChild(td3text);
    //=======================
    //rows
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    //styling
    td1.classList.add('tr_style');
    td2.classList.add('tr_style');
    td3.classList.add('tr_style');

    tr.id = 'main-component';

    return tr;
}


//================creating the table========================


function init_table(){
    var table = document.createElement('table');
    var tr = createTableRaw('id','news title','news type');
    //=======================
    table.appendChild(tr);

    table.classList.add('table_style');

    return table;
}

var table;

submitBtn.addEventListener('click',function(e){
    
    
    //=============new data======
    if(init_run === false){
        table = init_table();
        user_fav_section.append(table);
        init_run = true;
    }

    var tr = createTableRaw(++counter,`${user_news.value}`,`${user_topic_type}`);

    console.log(tr);

    user_topics_arr.push(`${user_news.value}`);

    table.appendChild(tr);

})

//==========search=========

var user_search_fav = document.getElementById('user-search-fav');

var trs;

user_search_fav.addEventListener('keyup',function(e){    
    trs =  document.querySelectorAll('#main-component');
    user_topics_arr.forEach((elem)=>{
        if(elem.indexOf(this.value) === 0){
             gr = createTableRaw('$',elem,'found');
             table.appendChild(gr);
        }
    });
    for(var k = 0 ; k < trs.length ; k++){
        if(k === 0){
            continue;
        }
        trs[k].style.display="none"        
    }
    
});
