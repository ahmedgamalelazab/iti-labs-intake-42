//ask user to enter his name and mobile number

var userName = prompt("Enter ur name sir .. Don't enter any number");

//check if the user name is string not number
var userNameValid = false;


if(isNaN(Number(userName))){
    console.log(userName);
    userNameValid = true;   
    
    var userMobile;
    var countryKey;

    do{
        /**REGEX  Y3AD*/
        userMobile = prompt("Nice .. Now enter ur phoneNumber be sure that it follows the format xxx-xxxxxxx");
        countryKey = userMobile.split('-')[0];
        console.log(countryKey);
        if((countryKey.includes('010') || countryKey.includes('011') || countryKey.includes('012') || countryKey.includes('015'))&& userMobile.length === 11){
            document.write(`
                <h3>your number is : ${userMobile}</h3>
            `);
        }else{
            document.write(`
                <h3>your number is : BAD MOBILE NUMBER</h3>
            `);            
        }
        

    }while(!((userMobile.indexOf('-') === 3) && (userMobile.length === 11)));


}else{
    document.write("Pleas enter a valid Name to continue the process");

}

