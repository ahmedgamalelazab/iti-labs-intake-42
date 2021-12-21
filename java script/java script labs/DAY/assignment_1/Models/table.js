//SOME ES6

import { arrOfPerson , Person } from "./Person.js";

function generateTableComponent(type, ...args) {
  if (type) {
    switch (type) {
      case "th":
      case "TH":
        //LOGIC
        var table = document.createElement("table");
        var tr = document.createElement("tr");
        args.forEach(function (elementName) {
          var td = document.createElement("td");
          td.innerHTML = elementName;
          tr.appendChild(td);
        });
        table.appendChild(tr);
        return table;

      case "tr":
      case "TR":
        var tr = document.createElement("tr");
        args.forEach(function (elementName) {
          var td = document.createElement("td");
          td.innerHTML = elementName;
          tr.appendChild(td);
        });
        return tr;
      default:
        //LOGIC
        throw `pleas enter the type of the table component u need idiot ! YOU CAN USE TH OR TD ONLY !!`;
    }
  } else {
    throw `pleas enter the type of the table component u need idiot !`;
  }
}

//generate cell item

function complexCellTextWithImage(identifier) {
  return `${identifier} <img class ="image" src="../images/sort.png" alt="loading" width="20px" height="20px"/>`;
}

//sorting api for table lib

// function sortTable(tableRef,dataSource,oldRef){
//     //[❎] who filled the table with data
//     //[❎]//hook on it find the old object
//     //[❎]//update the field which updated via table
//     //[❎]//update view [table]

// }

function tableSave(dataSource, oldRef, operationID) {
  let oldReference = oldRef;

  let searchKey = Number(oldReference.firstChild.innerText); //id Number

  console.log("from delete and api trace old reference");
  console.log(oldReference);

  //    let newPerson = new Person();

  let personFromRow = Array.from(oldReference.children);

  var p = new Person();

  for (let i = 0; i < personFromRow.length; i++) {
    switch (i) {
      case 0:
        p.id = Number(personFromRow[i].innerText);
        break;
      case 1:
        p.name = personFromRow[i].innerText;
        break;
      case 2:
        p.username = personFromRow[i].innerText;
        break;
      case 3:
        p.email = personFromRow[i].innerText;
        break;
      case 4:
        console.log("?????????");
        console.log(personFromRow[i].firstChild.getAttribute('src'));
        p.personalImage = personFromRow[i].firstChild.getAttribute('src');
        break;
      default:
        //nothing
        break;
    }
  }

  console.log("from delete and update api");
  console.log(p);


  dataSource.forEach(function (person, index) {
    if (p["id"] === dataSource[index]["id"]) {
      if (operationID === 1) {
        dataSource.splice(index, 1, p); //update
        console.log(dataSource);
      } else if (operationID === 0) {
        dataSource.splice(index, 1); //delete
        console.log(dataSource);
      } else {
        throw `Operation id must be a value from 0 to 1 : 0 delete 1 to update`;
      }
    }
  });

  window.localStorage.setItem("latestTableState", JSON.stringify(dataSource));
}


function sortTable(dataSource , tableReference , callback){
    //sorting data source
   tableReference.remove();
   dataSource.sort(callback);
   var table = generateTableComponent(
    "TH",
    complexCellTextWithImage("id"),
    complexCellTextWithImage("name"),
    `city`,
    complexCellTextWithImage("salary"),
    `personalImage`,
    `delete`,
    `update`
  );
  dataSource.forEach(function (person) {  
    var tr = generateTableComponent("tr", ...person.getAll());
    table.append(tr);
  });

  return table;
}

export {generateTableComponent ,sortTable, tableSave,complexCellTextWithImage }