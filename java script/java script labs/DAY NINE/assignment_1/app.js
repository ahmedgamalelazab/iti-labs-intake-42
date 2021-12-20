//define array of numbers
//sort the array using sort method passing to it arrow function

function generateRandomNumber() {
  return Math.round(Math.random() * 100) + 1;
}

function printSortedArrayToDOM(arr , Message) {
  let domArr = document.createElement("ul");

  arr.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = item;
    domArr.appendChild(li);
  });

  document.body.appendChild(document.createTextNode(Message));
  document.body.appendChild(domArr);
}

function sortAnyNumbers(arr, typeOfSort) {
  if (arr && typeOfSort) {
    switch (typeOfSort) {
      case "asc":
      case "ASC":
        return arr.sort((a, b) => a - b);
      case "desc":
      case "DESC":
        return arr.sort((a, b) => b - a);
      default:
        return arr.sort((a, b) => a - b);
    }
  } else {
    throw `pleas select the type of the sort ascending or descending !`;
  }
}

//[✅] using only let
let arr = [];

//filling the array with numbers
for (let index = 0; index < 10; index++) {
  arr.push(generateRandomNumber());
}

//sorting the array

sortAnyNumbers(arr, "asc");

printSortedArrayToDOM(arr , "ascending sort");

sortAnyNumbers(arr, "desc");

printSortedArrayToDOM(arr,"descending sort");

//? filtering numbers > 50

console.log(arr.filter((elem)=>{
    return elem > 50;
}));

//? printing the min and the maximum

//?max number
console.log(Math.max(...arr));
//?min number
console.log(Math.min(...arr));
