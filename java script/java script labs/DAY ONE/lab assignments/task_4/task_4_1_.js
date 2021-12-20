//take a number from user then display it in different locals

var userInput = prompt("Enter a number");


document.write(`
   <h1>${Number(userInput).toLocaleString("ar-EG")}</h1>
`);

document.write(`
   <h1>${Number(userInput).toLocaleString("zh-CN")}</h1>
`);

document.write(`
   <h1>${Number(userInput).toLocaleString("en-US")}</h1>
`);

document.write(`
   <h1>${Number(userInput).toLocaleString("de-DE")}</h1>
`);