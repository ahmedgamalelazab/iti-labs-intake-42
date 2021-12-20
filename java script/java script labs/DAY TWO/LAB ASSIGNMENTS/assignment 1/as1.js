//take array from the user in one prompt

var userInput = prompt(
  "Pleas enter Array of numbers like this format 1,2,3,4,5"
);

//1.0

if (userInput) {
  var array = userInput.split(",");

  //1.1 make sure the user didn't enter a repeated value

  //we need the duplication and the duplication index

  //duplicated indexes
  var duplicatedIndexes = [];

  var duplicatedItems = array.filter(function (value, index) {
    //filter only the duplication items
    if (array.indexOf(value) != index) {
      duplicatedIndexes.push(index);
    }
    return array.indexOf(value) != index;
  });

  //find the index of this duplicated items in the original array

  console.log(duplicatedIndexes);
  console.log(duplicatedItems);

  if (duplicatedItems.length != 0) {
    //if duplication
    document.write(`
    <table border ="1" borderColor ="red">
    <tr>
    <th>values</th>
    </tr>
   `);
    array.forEach(function (item) {
      document.write(`
       <tr>
       <td>${item}</td>
       </tr>
       `);
    });
    document.write(`</table>`);
    duplicatedIndexes.forEach(function (repeatedVal) {
      document.write(`
    <h3>Repeated row : ${repeatedVal + 1}</h3>
   `);
    });
  } else {
    document.write(`
    <table border ="1" borderColor ="green">
    <tr>
    <th>values</th>
    </tr>
   `);
    array.forEach(function (item) {
      document.write(`
       <tr>
       <td>${item}</td>
       </tr>
       `);
    });
    document.write(`</table>`);
}
}else{
    
    document.write(`<h1>thank you for using my app 😂</h1>`);
}
