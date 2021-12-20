

const userData = {
    Egypt:"1111",
    Usa:"2222",
    Canada:"3333",
    Korea:'494837',
    Brazil:'227262'
}

var user_country_main;

var user_name = document.forms[0].elements['userName'];

var userSelector = document.getElementById('user-country');

var country_zip_code = document.forms[0].elements['zip-code'];

var user_email = document.forms[0].elements['mail-box'];

var register_btn = document.querySelector('input[type="submit"]');



console.log(user_email);

// console.log(userSelector.options[0].value);

// console.log(country_zip_code);

user_name.focus();


user_name.addEventListener('focusout',function(e){
    if(this.value==''){
        user_name.focus();        
        user_name.classList.add('errorInput');
    }else{
        user_name.classList.add('correctInput');
    }
})

userSelector.addEventListener('click',function(e){

    for(var country in userData){
        if(country === this.options[this.selectedIndex].innerText){
            country_zip_code.value = userData[country];
            if(country_zip_code.value != ''){
                country_zip_code.classList.add('correctInput');
            }
        }
    }
    user_country_main = this.options[this.selectedIndex].innerText;

})

//section of controls 


user_email.addEventListener('keyup',function(e){
    if(this.value.toString().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        this.classList.add('correctInput');
    }else{
        this.classList.add('errorInput');
    }
})

//validation functions

function checkUserInputFields(obj){
    if(obj.value == ''){
        return false;
    }else{
        return true;
    }
}

function checkUserEmail(obj){
    if(obj.value.toString().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        return true;
    }else{
        return false;
    }
}

var userDataCookie = {
    username : "",
    userEmail : "",
    userCountry:"",
    userZipCode:""
};

function fillMe(){
    userDataCookie.username = user_name.value;
    userDataCookie.userEmail = user_email.value;
    userDataCookie.userCountry = user_country_main;
    userDataCookie.userZipCode = country_zip_code.value;
    return true;
}

register_btn.addEventListener('click',function(e){
    debugger;
    if(checkUserInputFields(user_name)&&checkUserEmail(user_email)&&checkUserInputFields(country_zip_code)&&fillMe()){
        window.document.cookie = `userDate=${JSON.stringify(userDataCookie)}`;
        displayMe();
      debugger;
        console.log(document.cookie.toString);
    }else{
        e.preventDefault();
    }
})