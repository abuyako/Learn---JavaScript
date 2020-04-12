// OBJECT IN JAVASCRIPT
// Everything is an Object (Well all most) in JAVASCRIPT

//  PRIMITIVES
//     - Numbers 
//     - Strings 
//     - Booleans 
//     - undefined 
//     - Null 

// Everything else is an Object
//     - Array 
//     - Function 
//     - Object 
//     - Dates 
//     - Wrapper for numbers, Strings, Boolean 

// Object-Oriented Programming 
//     - Object interacting with one another through Method and Properties;
//     - Used to store data, strucute application into modules and keeping code clean. 


// example;

//     var John = {
//         name: 'John',
//         yearOfBirth: 1990,
//         isMarried: false
//     };

// So, lets we want to write many Object as we want but it will a lots of work to repeat same thing everytime, 
// imagine we have something like a BLUEPRINT to generate those Objects. 

// we can have a Person Object which act as a BLUEPRINT to create all other people Objects 

// example; 

//     Person
//     name
//     yearOfBirth
//     job
//     calculateAge()  
    
//     in other many language we used to call it Class but in JAVASCRIPT we call it 
//     CONSTRUCTOR OR PROTOTYPE so we can create as many instance as we want. 

     
//     INHERITANCE IN GENERAL
//         - is when one Object get the access of Method and Properties of another Object. very simple!!!   
         


//     JAVASCRIPT is the PROTOTYPE based language which means their INHERITANCE work by using something called PROTOTYPE
//     mean each js Object have the PROTOTYPE Properties which makes INHERITANCE possible in JAVASCRIPT.

//     PROTOTYPE chain - is what makes the INHERITANCE possible. 

//     Summary:

//         - Every JAVASCRIPT Object has a PROTOTYPE Properties, which makes INHERITANCE possible in JAVASCRIPT
//         - The PROTOTYPE Properties of an Object is where we put Method and Properties that we want other Object 
//             to INHERITANCE.
//         - The CONSTRUCTOR  PROTOTYPE Properties is NOT the PROTOTYPE of the CONSTRUCTOR itself, its the PROTOTYPE
//             of all instance that are created through it.Array
//         - when a certain Method or Properties is called, the search start in the Object itself, and if it cannot 
//             found, the search moves on  to the Object PROTOTYPE this will continue intil the method is found:
//             PROTOTYPE chain.

// coding timeeee!!!




// Function Constructor is a pattern for writting a blueprint and we write variable with a capital letter

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// }; // object literial

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Now we create a prototype properties to inherite

// Person.prototype.calculeAge = 
// function() {
//     console.log(2016 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';
// create object

// var john = new Person('John', 1990, 'teacher'); 
// this is called instantiation
// new means a brand new obj is created

// var jane = new Person ('Jane', 1996, 'designer');
// var mark = new Person ('Mark', 1948, 'retired');

// john.calculeAge();
// jane.calculeAge();
// mark.calculeAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


// object.create
