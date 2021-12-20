/**
 * Application written on : 17/12/2021
 * developer : ahmed gamal mohamed 
 * purpose : ITI Mansoura branch task
 * instructor : end Nasr kassem 
 */

var main = document.querySelector(".main");
var sorted = false;

//go search in localeStorage for latest data
//if u found the LocaleStorage filled with data then ask for it 
//else go to the default storage which is the Memory
//be sure the functionality of the application running well then delete the duplication 
//test the application once filled with localeStorage data and another time from Ram
//[❎] Future application update is connect this table with backend api to load the data from database

// debugger;
//main IIFE 
(function () {
  let latestBrowserTableState = window.localStorage.getItem("latestTableState");
  console.log(latestBrowserTableState);
  //debugger;
  if (latestBrowserTableState) {
    // build table
    console.log("table found in the locale storage loading ....");
    var table = applicationStandardTable();

    //FROM RAM TO DOC TABLE
    storageTableState = JSON.parse(latestBrowserTableState);
    storageTableState.forEach((obj)=>{
      Object.setPrototypeOf(obj, Person.prototype);
    });
    console.log(storageTableState);
    storageTableState.forEach(function (person) {
      console.log(person.getAll());
      var tr = generateTableComponent("tr", ...person.getAll());
      table.append(tr);
    });
    applicationLogic(main , table , storageTableState);
  } else {
    var table = applicationStandardTable();
    //FROM RAM TO DOC TABLE
    arrOfPerson.forEach(function (person) {
      console.log(person.getAll());
      var tr = generateTableComponent("tr", ...person.getAll());
      table.append(tr);
    });

    applicationLogic(main, table, arrOfPerson);
  }

})();

