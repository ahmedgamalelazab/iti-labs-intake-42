/*
?Create constant project anonymouse object after takeing properties names
?and values from user (using object literals )
?Note: names are projectId , projectName ,duration and printData which 
?console.log all project data

 */

// //
// let Project = {
//        pId:0,
//        pName:"",
//        pDuration:0,
//        pDate:""
// }

// //taking the values from the user

// for (const key in Project) {
//     if (Object.hasOwnProperty.call(Project, key)) {
//         switch (key) {
//             case 'pId':
//                 Project[key] = Number(prompt('enter the project id'));
//                 break;
//                 case 'pName':
//                 Project[key] = prompt('enter the project name');
//                 break;
//                 case 'pDuration':
//                 Project[key] = Number(prompt('enter the project duration'));
//                 break;
//                 case 'pDate':
//                 Project[key] = prompt('enter the project date');
//                 break;
//             default:
//                 break;
//         }
//     }
// }

// console.log(Project);

const ({ [pId]:f,pName,pDuration,pDate} = Project);

let proname="JS";
let _Id=12;
let _project={
    // [proname]:"JS"
}

_project[proname]="kk";
let pro2={
    proname,_Id
}
