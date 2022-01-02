<!DOCTYPE html>
<html lang="en">
  <head>
    <title>ASS1</title>
  </head>
  <style>
    table {
      width: 80%;
      text-align: center;
      font-weight: bold;
      margin: auto;
    }

    tr:nth-child(odd) {
      background-color: #ddd;
      color: #333;
    }
    tr:nth-child(even) {
      background-color: #333;
      color: #ddd;
    }
    td {
      padding: 10px;
    }
  </style>
  <body>
    <div class="main"></div>

    <script>
      /*
1- Declare Person constructor function with the following properties ID , Name , City , Salary ,
PersonalImage
A- Declare an array object of type person
B- Display array in html table and beside every row display Update and Delete Buttons to
update data of container row or delete container row
C- Apply sort functionalities (ascending or descending) over displayed data
D- Save displayed data after sorting , update or delete functionalities in LocalStorage object as
JSON Data
E- Display saved JSON object from local storage in another page in your Domain
        */

      //===================================================================
      function Person(_id, _name, _city, _salary, _PersonalImage) {
        this.ID = _id;
        this.Name = _name;
        this.City = _city;
        this.Salary = _salary;
        this.PersonalImage = _PersonalImage;
        //never assign function to our function constructor objects inner the statement declation
      }

      Person.prototype.getAll = function () {
        return [this.ID, this.Name, this.City, this.Salary, this.PersonalImage];
      };

      //[👨‍🦲]Model=====================================================
      //static data
      var arr = [
        new Person(1, "ali", "alex", 1000, "image1"),
        new Person(2, "ahmed", "mans", 2000, "image2"),
        new Person(3, "mohammed", "tanta", 3000, "image3"),
        new Person(4, "zyad", "sohag", 4000, "image4"),
      ];
      var globalCell;
      var sorted = true;
      //===============================================================

      //control logic ==================================================
      var main = document.querySelector(".main");
      main.addEventListener("click", function (e) {
        switch (e.target.innerText) {
          case "sort":
            var cell = e.target.parentNode;
            if (cell.firstChild.innerText === "id") {
              //sort desc
              if(sorted){
               table =  setState(main, table, function () {
                return arr.sort(function (person1, person2) {
                  sorted = false;
                  return person2.ID - person1.ID;
                });
              });
              }else{                          
                table = setState(main, table, function () {
                return arr.sort(function (person1, person2) {
                  sorted = true;
                  return person1.ID - person2.ID;
                });
              });
              }
              console.log(main);
            } else if (cell.firstChild.innerText === "salary") {
              console.log("iam sorting salary");
            }
            break;
          case "delete":
            var targetRow = e.target.parentNode.parentNode;
            table.removeChild(targetRow);
            break;
          case "update":
            if (globalCell) {
              var globalCellContainerRow = globalCell.parentNode; //row 1234
              var buttonContainerRow = e.target.parentNode.parentNode; //row 1234
              if (globalCellContainerRow === buttonContainerRow) {
                var updatedValue = prompt("enter new value");
                if (updatedValue) {
                  globalCell.innerText = updatedValue;
                  globalCell = null;
                } else {
                  globalCell = null;
                }
              } else {
                alert("you can't update from another row !");
              }
            }
            break;
          default:
            //listening on anything
            globalCell = e.target;
            break;
        }
      });
      var table = document.createElement("table");
      // table.appendChild();
      //any row will come will append like that syntax
      table.appendChild(
        generateTableRow(
          `<span>id</span><button>sort</button>`,
          "name",
          "city",
          "<span>salary</span><button>sort</button>",
          "personalImage",
          "delete",
          "update"
        )
      );
      //arr is the model
      arr.forEach(function (person) {
        table.appendChild(
          generateTableRow(
            person.ID,
            person.Name,
            person.City,
            person.Salary,
            person.PersonalImage,
            `<button>delete</button>`,
            `<button>update</button>`
          )
        );
      });
      main.appendChild(table); //main created table //delegate all the complains to main or someone heigher

      function setState(mainReference, oldView, callback) {
        oldView.remove();  
        var newModel = callback(); //new sorted arr
        console.log(newModel);
        var newView = document.createElement("table");
        newView.appendChild(
          generateTableRow(
            `<span>id</span><button>sort</button>`,
            "name",
            "city",
            "<span>salary</span><button>sort</button>",
            "personalImage",
            "delete",
            "update"
          )
        );
        newModel.forEach(function (person) {
          newView.appendChild(
            generateTableRow(
              person.ID,
              person.Name,
              person.City,
              person.Salary,
              person.PersonalImage,
              `<button>delete</button>`,
              `<button>update</button>`
            )
          );
        });                              
        mainReference.appendChild(newView);
        return newView;
      }
      //=================================================================

      //[🎈]View=========================================================

      //table factory now u have added this pattern to ur developing belt
      function generateTableRow(...cols) {
        if (cols) {
          console.log(cols);
          var tr = document.createElement("tr");
          cols.forEach(function (col) {
            var td = document.createElement("td");
            td.innerHTML = col;
            tr.appendChild(td);
          });
          return tr;
        } else {
          throw `u can't use this functions withou cols`;
        }
      }
      // ||name||age||date        [header] [x]
      // ||ahmed||26||25-5-2021   [row] [tupil] [x]

      //==================================================================
    </script>
  </body>
</html>
