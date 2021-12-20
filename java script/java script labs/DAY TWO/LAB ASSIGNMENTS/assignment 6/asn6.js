//6.1

var aliName = "ali mohamed";

var result = aliName.split(" ");

var outPut = "";

result.forEach(function (word) {
  outPut += word.charAt(0).toUpperCase() + word.slice(1);
  outPut += " ";
});

console.log(result);
console.log(outPut);
document.write(`
    <h3> task 6.1</h3>
`);
document.write(`
    <h3>${outPut}</h3>
`);

//=================================================================
// 6.2
do{
var userInput = prompt("enter array of number following the format 1,2,3,4");
var repeat = 'n';
if (userInput) {
  var userChoice = prompt(`
    a : to display array with the same receiving order
	b : to display array with ascending order
	c : to display array with descending order
	d : to reversed version of original array 
	e : to display even numbers only from array if there no even numbers , display alert to inform user with that
	f : receive number from user then display all numbers from array which divisible by received number , if there no result inform user with that
	g : display new array with 30% discount for all numbers in original array
	h : display string which represent all numbers of array concated with ***`);

  if (userChoice) {             
        switch (userChoice) {
            case "a":
              document.write(`
              <h3>task 6.2</h3>
          `);
              userInput.split(",").forEach(function (item) {
                document.write(`
              <h3 style="display : inline;">${item},</h3>
          `);
              });
              break;
            case "b":
              document.write(`
              <h3>task 6.2</h3>
          `);
              userInput
                .split(",")
                .sort(function (a, b) {
                  return Number(a) - Number(b);
                })
                .forEach(function (item) {
                  document.write(`
              <h3 style="display : inline;">${item},</h3>
          `);
                });
              break;
            case "c":
              document.write(`
              <h3>task 6.2</h3>
          `);
              userInput
                .split(",")
                .sort(function (a, b) {
                  return Number(b) - Number(a);
                })
                .forEach(function (item) {
                  document.write(`
              <h3 style="display : inline;">${item},</h3>
          `);
                });
              break;
            case "d":
              document.write(`
              <h3>task 6.2</h3>
          `);
              userInput
                .split(",")
                .reverse()
                .forEach(function (item) {
                  document.write(`
              <h3 style="display : inline;">${item},</h3>
          `);
                });
              break;
            case "e":
              var evenFound = false;
              document.write(`
              <h3>task 6.2</h3>
          `);
              userInput
                .split(",")
                .filter(function (a) {
                  if (Number(a) % 2 === 0 || a === 0) {
                    evenFound = true;
                  }
                  return Number(a) % 2 === 0 || a === 0;
                })
                .forEach(function (item) {
                  document.write(`
                <h3 style="display : inline;">${item},</h3>
            `);
                });
              if (evenFound === false) {
                alert("No even found in ur inputs");
              }
              break;
            case "f":
                var divisionFlag = false;
                var userPrefDiv = prompt("enter a number to check division");
                userInput
                .split(",")
                .filter(function (a) {  
                  if(Number(a) % Number(userPrefDiv) === 0){
                      divisionFlag = true;
                  }       
                  return Number(a) % Number(userPrefDiv) === 0;
                })
                .forEach(function (item) {
                  document.write(`
                <h3 style="display : inline;">${item},</h3>
            `);
                });
                if(divisionFlag === false){
                  alert("No numbers found to divide on");
                }
              break;
            case "g":
                var discountedArray = [];
                userInput.split(",").forEach(function(item){
                    discountedArray.push(item * 0.3);
                })
                discountedArray.forEach(function(item){
                  document.write(`
                  <h3 style="display : inline;">${item},</h3>
              `);
                })
              break;
            case "h":
              var str = "";
              userInput.split(",").forEach(function (item) {
                str += item.concat("***");
              });
              document.write(`
              <h3 style="display : inline;">${str}</h3>
          `);
              break;
          }
          repeat = prompt("do you wanna repeat ?");

  } else {
    document.write(`
        <h3>task 6.2</h3>
    `);
    userInput.split(",").forEach(function (item) {
      document.write(`
        <h3 style="display : inline;">${item},</h3>
    `);
    });
  }
} else {
  document.write(`
    <h3>task 6.2</h3>
`);
  document.write(`<h1>thank you for using my app 😂</h1>`);
}
}while(repeat === 'y');

