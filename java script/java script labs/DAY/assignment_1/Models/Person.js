//[✅] declare person constructor
function Person(id, name, username, email,personalImage) {
  this.id = id;
  this.name = name;
  this.username = username;
  this.email = email;
  this.personalImage = personalImage;
  
}

Person.prototype.getAll = function () {
  return [
    this.id,
    this.name,
    this.username,
    this.email,
    `<img class ="personImage" src="${this.personalImage}" alt="loading" width="50px" height ="50px"/>`,
    `<button class ="delete">delete</button>`,
    `<button class="update">update</button>`,
  ];
};

//? the person class functionality stored on the prototype because we have plain response
//?from the locale storage so we will lose all the person functionality
//?that's why we stored everything on the prototype but we will fetch this back by connecting
//?the response object with the Person.prototype later 
Person.prototype.getId = function () {
  return this.id;
};

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.getUserName = function () {
  return this.username;
};

Person.prototype.getUserEmail = function(){
  return this.email;
}

Person.prototype.getPersonalImage = function () {
  return this.personalImage;
};

Person.prototype.setId = function (id) {
  this.id = id;
};
Person.prototype.setName = function (name) {
  this.name = name;
};
Person.prototype.setUserName = function (userName) {
  this.username = userName;
};
Person.prototype.setUserEmail = function (email) {
  this.email = email;
};

Person.prototype.setPersonalImage = function (personalImage) {
  this.personalImage = personalImage;
};

//[✅] declare array of object type person
//[🔥] the application resources come from here 
//ram
/**
 * FUTURE TODO 
 * TODO update the application and connect it with backend apis to load person data from the server
 * we will apply the update soon
 */

// let arrOfPerson = [
//   new Person(1, "ahmed", "tanta", 1500, "../UP/1.jpg"),
//   new Person(2, "samir", "Mansoura", 2000, "../UP/2.jpg"),
//   new Person(3, "ali", "cairo", 10000, "../UP/3.jpg"),
//   new Person(4, "mosad", "Menia", 600, "../UP/4.jpg"),
//   new Person(5, "said", "alex", 6950, "../UP/5.jpg"),
//   new Person(6, "alex", "alex", 1521230, "../UP/6.jpg"),
//   new Person(7, "mohamed", "alex", 52481, "../UP/7.jpg"),
//   new Person(8, "kareem", "alex", 54846, "../UP/8.jpg"),
//   new Person(9, "zeezo", "alex", 21231285, "../UP/9.jpg"),
//   new Person(10, "fareed", "alex", 125, "../UP/1.jpg"),
//   new Person(11, "jargon", "alex", 1, "../UP/2.jpg"),
//   new Person(12, "mostafa", "alex", 415486, "../UP/3.jpg"),
//   new Person(13, "omar", "alex", 1656, "../UP/4.jpg"),
//   new Person(14, "loay", "alex", 6210, "../UP/5.jpg"),
//   new Person(15, "ireila", "alex", 200, "../UP/6.jpg"),
// ];

let arrOfPerson = [];

//[✅] receive the object from the internet and store it in an array 
async function fetchPersonsHandler(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  //map the data here 
  console.log(data);
  data.map((person)=>{
    arrOfPerson.push(new Person(person.id,person.name,person.username,person.email,'../UP/1.jpg'));
  })
}

export {Person, arrOfPerson,fetchPersonsHandler};


