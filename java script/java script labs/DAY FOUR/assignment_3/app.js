
var inputField = document.querySelector('input[type="text"]');

var addTodoData = document.querySelector('.btn');

var myTable = document.querySelector('.result_table table');




function insertData(){
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var icon = document.createElement('div');
    icon.classList.add('fa');
    icon.classList.add('fa-trash-o');
    
    //================checkbox==============
    var newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox';
    // newCheckBox.id = 'ptworkinfo' + count;
    //==============appending================
    td1.appendChild(newCheckBox); // first column take pleas care of checkbox
    var data = document.createTextNode(`${inputField.value}`); //store user data in node
    td2.appendChild(data);
    td3.appendChild(icon);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    myTable.appendChild(tr);

    icon.addEventListener('click',function(e){
        var target = this.parentNode.parentNode; //div < td < tr <<<------
        var confirming = window.confirm('do you want delete selected element ?');
        if(confirming){
            myTable.removeChild(target);
        }
    })

    newCheckBox.addEventListener('click',function(e){
        if(this.checked){
            this.parentNode.nextSibling.style.textDecoration='line-through';
        }else{
            this.parentNode.nextSibling.style.textDecoration='none';
        }
    })

    
}

addTodoData.addEventListener('click',insertData);


// for(var j = 0 ; j < myTable.rows.length;j++){
//     var child = myTable.rows[j];
//     for(var c in child.cells){
//         console.log(child.cells[c]);
//     }
// }


