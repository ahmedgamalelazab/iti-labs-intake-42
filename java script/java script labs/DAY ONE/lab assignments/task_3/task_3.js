
/* 
    ITI Mansoura 2021 tsk 3 
*/

var imageName = "";

imageName = prompt("enter image Name");

document.write(`

    <h3 style ="color:green;">this is your image</h3>

    <img style="border : 1px green solid" src="${imageName}" alt="Loading"/>

`);