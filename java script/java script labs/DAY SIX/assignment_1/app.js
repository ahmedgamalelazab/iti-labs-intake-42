

var tHeadObj = {
    name : "name" ,
     position : "position",
     office : "office" ,
      age: "age" ,
      startDate: "startDate",
      salary:"salary"
}

var main = document.querySelector('.main');

// var table = document.querySelector('table'); // entry point

var table;

var table_container = document.querySelector('.table-container'); // main start point

var add_emp_btn = document.querySelector('.btn-add');

var btn_sort = document.querySelector('.btn-sort');

var peopleCollection = [];

//IIFE

//init run time 
(
    function(){
        // table = createTable(tHeadObj);
        table = generateTableHead();
        table_container.appendChild(table);
    }
)();


btn_sort.addEventListener('click',function(e){
    table.remove();
    table = createTable(tHeadObj); //create new table
   peopleCollection.sort(function(a , b){
        return a.age - b.age;
    })
    sortedEmployees.forEach(function(emp){
        var tr = generateRow(emp); //mapping 
        table.appendChild(tr);
    })
    table_container.appendChild(table);
})

add_emp_btn.addEventListener('click',function(e){
    var emp = mapDataFromUser();
    console.log(emp);
    peopleCollection.push(emp);
    //loop on all objects in the memory then create row then append them to table
    table.appendChild(generateRow(emp));
    console.log(peopleCollection);
});

function createTable(obj){
    var table = document.createElement('table');
    var tr = generateRow(obj);
    table.appendChild(tr);
    return table;
}

//function generate row

function generateRow(obj){
    var tr = document.createElement('tr');
    var cell1 = document.createElement('td');
    var cell2 = document.createElement('td');
    var cell3 = document.createElement('td');
    var cell4 = document.createElement('td');
    var cell5 = document.createElement('td');
    var cell6 = document.createElement('td');
    //text node cells
    var userName = document.createTextNode(obj.name);
    var userPosition = document.createTextNode(obj.position);
    var userOffice = document.createTextNode(obj.office);
    var userAge = document.createTextNode(obj.age);
    var userStartDate = document.createTextNode(obj.startDate);
    var userSalary = document.createTextNode(obj.salary);
    //creating 
    cell1.appendChild(userName); 
    cell2.appendChild(userPosition); 
    cell3.appendChild(userOffice); 
    cell4.appendChild(userAge); 
    cell5.appendChild(userStartDate); 
    cell6.appendChild(userSalary);
    //==================================
    tr.appendChild(cell1); 
    tr.appendChild(cell2); 
    tr.appendChild(cell3); 
    tr.appendChild(cell4); 
    tr.appendChild(cell5); 
    tr.appendChild(cell6);
    
    tr.classList.add();

    return tr;
}

//we need map this row data


//logic to take data from the user 
function Employee(name , position , office , age , startDate, salary){
    this.name = name;
    this.position = position;
    this.office = office;
    this.age= age;
    this.startDate = startDate;
    this.salary = salary;
}


//function to take user input object
function mapDataFromUser(){
    var userName = prompt("enter employee name : ");
    var userPosition = prompt("enter employee position : ");
    var userOffice = prompt("enter employee office : ");
    var userAge = prompt("enter employee age : ");
    var employeeDate = prompt("enter employee date :");
    var employeeSalary = prompt("enter the employee salary : ");
    //create new Object
    var employee = new Employee(userName , userPosition , userOffice , userAge  , employeeDate , employeeSalary);
    return employee;
}


function generateTableHead(){
    var tableHead = document.createElement('table');
    
    var tr = document.createElement('tr');
    var cell1 = document.createElement('td');
    var cell2 = document.createElement('td');
    var cell3 = document.createElement('td');
    var cell4 = document.createElement('td');
    var cell5 = document.createElement('td');
    var cell6 = document.createElement('td');

    //== trying with every cell 

    cell1.innerHTML = `
        emp name
        <img src="sort.png" alt="loading" width="20px" height="20px"/>
    `;
    cell2.innerHTML = `
        emp position
        <img src="sort.png" alt="loading" width="20px" height="20px"/>
    `;
    cell3.innerHTML = `
        emp office
        <img src="sort.png" alt="loading" width="20px" height="20px"/>
    `;
    cell4.innerHTML = `
        emp Age
        <img src="sort.png" alt="loading" width="20px" height="20px"/>
    `;
    cell5.innerHTML = `
        Start Date
        <img src="sort.png" alt="loading width="20px" height="20px""/>
    `;

    cell6.innerHTML = `
        Salary
        <img src="sort.png" alt="loading" width="20px" height="20px"/>
    `;
    

    tr.appendChild(cell1);
    tr.appendChild(cell2);
    tr.appendChild(cell3);
    tr.appendChild(cell4);
    tr.appendChild(cell5);
    tr.appendChild(cell6);

    tableHead.appendChild(tr);

    var images = document.images;
    for(var j = 0 ; j < images.length ; j++){

    }   

    return tableHead;
}