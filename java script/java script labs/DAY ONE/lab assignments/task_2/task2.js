/*
    hint : dont forget to check if the division is finite or NOT to control the division on 0
*/

var userCollection = ["", "", ""];

var counter = 0;

var userDate;

do {
  userDate = prompt(
    "Enter Three Numbers in row .. u have to know if u entered text it will be reinterpreted to 0"
  );

  console.log(userDate);

  if (isNaN(Number(userDate))) {
    userDate = 0;
  }

  userCollection[counter] = Number(userDate);

  counter++;
} while (counter < 3);

// userCollection.forEach(data=>{
//     console.log(data);
// })


    //calculating the sum of the Number
    var sum = 0;
    for (var i = 0; i < userCollection.length; i++) {
      sum += userCollection[i];
    }
    document.write(`
          <h2>sum of this numbers ${userCollection[0]} + ${userCollection[1]} + ${userCollection[2]} = ${sum}</h2>
      `);
      document.write(`
              <h2>Multiplication of this numbers ${userCollection[0]} * ${userCollection[1]} * ${userCollection[2]} = ${Multiplication}</h2>
          `);
  

  if (j === 2) {

    var division = isFinite(userCollection[0] / userCollection[1] / userCollection[2]) ? userCollection[0] / userCollection[1] / userCollection[2] : "u can't divide on zero";

    document.write(`
              <h2>Multiplication of this numbers ${userCollection[0]} / ${userCollection[1]} / ${userCollection[2]} = ${division}</h2>
          `);
  }
}
