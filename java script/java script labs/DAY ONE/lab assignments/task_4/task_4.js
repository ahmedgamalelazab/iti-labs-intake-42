
var userNumber = 0 ;

var initialRadix = 0;

var targetRadix = 0;


initialRadix = prompt("Enter ur Number Base Radix");

console.log(initialRadix);

userNumber = prompt("Enter the Number");

console.log(userNumber);

if(isInGivenBase(parseInt(userNumber,initialRadix) , initialRadix)){
    console.log("valid");
    targetRadix = prompt("enter your target Radix");
    document.write(`
    <h1>result : ${parseInt(userNumber,targetRadix)}</h1>
`);
}else{
    console.log("Not valid");
    document.write(`
    <h1>Your number not match the base</h1>
    `);
}







// Javascript program to check if given
// number is in given base or not.
//NOTE THIS CODE I COPIED IT ALL
function isInGivenBase(str, bas)
{

    // Allowed base are
    // till 16 (Hexadecimal)
    if (bas > 16)
        return false;

    // If bas is below or equal
    // to 10, then all digits
    // should be from 0 to 9.
    else if (bas <= 10)
    {
    for (let i = 0; i < str.length; i++)
        if (!(str[i].charCodeAt() >=
        '0'.charCodeAt() &&
        str[i].charCodeAt() <
        ('0'.charCodeAt() + bas)))
            return false;
    }

    // If base is below or equal
    // to 16, then all digits should
    // be from 0 to 9 or from 'A'
    else
    {
    for (let i = 0; i < str.length; i++)
        if (! ((str[i].charCodeAt() >=
        '0'.charCodeAt() &&
        str[i].charCodeAt() <
        ('0'.charCodeAt() + bas)) ||						
        (str[i].charCodeAt() >=
        'A'.charCodeAt() &&
            str[i].charCodeAt() <
            ('A'.charCodeAt() + bas - 10))
            ))		
            return false;
    }
    return true;
}



