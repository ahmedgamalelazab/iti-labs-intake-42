const main = document.querySelector('main');


console.log(main);

//[❎] cache response 
//[❎] cache every object lives inside the total response in array 
//[❎] middle object map each object and generate a new combo 
//[❎] do i have entry point ? create entry point 

import {cacheUsers} from "./logic.js";
import {UserBuilder} from "./UserBuilder.js";


cacheUsers(1).then((data)=>data.forEach(plainUser => {
    Object.setPrototypeOf(plainUser , UserBuilder.prototype);
    console.log(plainUser.getSimpleUser());
}));