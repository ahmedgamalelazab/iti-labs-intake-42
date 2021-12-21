import {UserBuilder} from "./UserBuilder.js";

async function fetchUsers(){

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await response.json();
   
    return users;
}


async function cacheUsers(flag){

    let usersBuffers = await fetchUsers();

    let userCollection = [];

    //loop on the object that coming form the server

    usersBuffers.forEach(element => {
            userCollection.push(new UserBuilder(element));
    });

    // console.log(userCollection[0].getSimpleUser());
    // console.log(userCollection[0].getComplexAddress());
    // console.log(userCollection[0].getComplexCompany());
    return new Promise((resolve , reject)=>{
        if(flag){
            window.localStorage.setItem("users",JSON.stringify(userCollection)); //cache if no data or override if flag = true            
            const cachedUsers = JSON.parse(window.localStorage.getItem("users"));
            resolve(cachedUsers);
        }else{
            reject("we already cached once pleas change the flag !!");
        }
    })



}

export {cacheUsers};