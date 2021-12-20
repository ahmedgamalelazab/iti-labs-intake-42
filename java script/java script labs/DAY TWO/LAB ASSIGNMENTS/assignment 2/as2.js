//generate random number from 0 to 9 

var random = Math.floor((Math.random() *9) +1);

var test = [];
test.length = 10;

for(var i = 0 ; i < test.length ; i++){
    document.write(`
    <h3>${Math.floor((Math.random() *9) +1)}</h3>
`);
}