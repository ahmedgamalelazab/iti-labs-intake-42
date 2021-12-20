//====================================================
//Define a person object contain the following
//id = 1 &  name = "empty"

var person = {
  id: 1,
  name: "Empty",
};

var employee = Object.create(person);
employee.salary = 0;

console.log(employee.__proto__.id);
console.log(employee.__proto__.name);
console.log(employee.salary);

//==================================================

var HREmployee = Object.create(employee);
console.log(HREmployee.__proto__.__proto__); // person [properties]
console.log(HREmployee.__proto__); // employee [properties]
console.log(HREmployee); // HREmployee [properties]

HREmployee.id = 2;
HREmployee.name = "ahmed";

console.log(HREmployee.id); //? didn't collapse with person properties
console.log(HREmployee.name);//? didn't collapse with person properties
console.log(HREmployee.__proto__.__proto__.id);
console.log(HREmployee.__proto__.__proto__.name);

person.age = 23; // ?

console.log(`age of employee is : ${HREmployee.age}`); //? it searched in the proto chain

//create shape abstract class 


function Shape(){
    //? abstract class you can't create object from it
    if(this.__proto__.constructor.name === 'Shape'){
        throw "abstract class you can't create object from it !";
    }
    this.color = "transparent";
    
}

Shape.prototype.printColor = function(){console.log(`my color is : ${this.color}`);}
Shape.prototype.calcArea = function(){return 0;};
Shape.prototype.calcPerimeter = function(){return 0;};
Shape.prototype.setColor = function(color){
    this.color = color;
}
Shape.prototype.getColor = function(){
    return this.color;
}


//before setting up the inheritance we need intermediate object

function Rect(){
    this.width = 0;
    this.height = 0;
    this.calcArea = function(){
        return this.width * this.height;
    }
    this.calcPerimeter = function(){
        return 2 * (this.width + this.height);
    }
    Rect.numInstances = (Rect.numInstances || 0) + 1;
}

Rect.prototype = Object.create(Shape.prototype);
Rect.prototype.constructor = Rect;
Rect.prototype.setWidth = function(width){
    this.width = width;
}
Rect.prototype.setHeight = function(height){
    this.height = height;
}


//create square which inherit from the Rect

function Square(){
    this.calcArea = function(){
        return this.width * this.width;
    }
    this.calcPerimeter = function(){
        return 2 * (this.width + this.width);
    }
    Square.numInstances = (Square.numInstances || 0) + 1;
}

Square.prototype = Object.create(Rect.prototype);
Square.prototype.constructor = Square;

var rect1 = new Rect();
var square1 = new Square();
// console.log(`number of instances is : ${rect1.countInstance()}`);

console.log(rect1 instanceof Shape);
console.log(rect1 instanceof Rect);
console.log(rect1.constructor.name);
console.log(square1 instanceof Shape);
console.log(square1 instanceof Rect);
console.log(square1.constructor.name);

rect1.setColor("red");
console.log(`printing rectangular color : ${rect1.getColor()}`);
rect1.setWidth(100);
rect1.setHeight(200);
console.log(`the area of the rect1 is : ${rect1.calcArea()}`);
console.log(`the perimeter of the rect1 is : ${rect1.calcPerimeter()}`);
//================================================================
square1.setColor("yellow");
console.log(`printing rectangular color : ${square1.getColor()}`);
square1.setWidth(100);
console.log(`the area of the square1 is : ${square1.calcArea()}`);
console.log(`the perimeter of the square1 is : ${square1.calcPerimeter()}`);
//================================================================


var shapeCollection = [new Rect() , new Rect() , new Square() , new Square()];


shapeCollection.forEach(function(shape , i){
    if(shape instanceof Shape){
        if(shape instanceof Square){
            shape.setWidth(40);
            console.log(`shape ${i} type is : square and it's area is : ${shape.calcArea()}`);
            console.log(`shape ${i} type is square and it's  perimeter is : ${shape.calcPerimeter()}`);
        }else if(shape instanceof Rect){
            shape.setWidth(40);
            shape.setHeight(50);
            console.log(`shape ${i} type is : rect and it's area is : ${shape.calcArea()}`);
            console.log(`shape ${i} type is rect and it's  perimeter is : ${shape.calcPerimeter()}`);
        }else{
            throw `no shape match the super !`;
        }
    }
})


//====================================================================

console.log(Square.numInstances);
console.log(Rect.numInstances);










