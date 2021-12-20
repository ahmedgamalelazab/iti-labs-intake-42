//ask the user N times for values 

var userMessage = "start";
var maximum = 0;

do{

    if(userMessage===null ||maximum >= 100){
        break;
    }

    userMessage = prompt(
        "number calculator with max Sum restriction 100 .. do u wanna Exit ?"
    );

    if(isNaN(Number(userMessage))){
        userMessage = 0;
    }else{
        maximum +=Number(userMessage);
    }

    console.log(userMessage);

}while(true);

document.write(`
    <h1>${maximum}</h1>
`);
