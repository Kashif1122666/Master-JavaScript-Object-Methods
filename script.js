// chpater 71: Object: methods

// 1. What are methods

    // Definition :
      
    //   In JavaScript , a method is a function that is a property of an Object . It allows an 
    //   Object to perform actions or behaviors.
    //   Methods represent actions that can be preformed with the Object.
    //   Think of methods as tasks you can ask an Object to perform.

    //   In short, methods are functions that are declared inside an Object.

// why do we use Methods?

    // Methods help Objects perform specific actions , like real-world Objects do.
    // for example , a car Object may have methods like start(), drive(), or stop() to 
    // represent actions the car can take.

// 3.How to Add Methods to Objects 
 
    // example:

    var car = {
        color: "red",
        model: "Toyota",
        start: function(){
            console.log("car has started");l
        }
    }  
        car.stop = function() {  // Adding function to PreExisting object
               console.log("car has stoped");
               }
                   console.log(car);

// 4. In the above example we have learned how to add method to object and as well as we learned how to add method after creation 
  
// 5. this keyword Inside Methods 
    //  The this keyword refers to the current object and is used to access properties inside a method. 

    Example:
      var car2 = {
        color:"red",
        name: "Honda",
        start: function() {
            console.log("Starting the " + this.name);
        }
      }
      car2.start();

// 6. Benefits of using Methods 

    //    Methods organize the behaviour of Object and allow us to bundle related functionalities together. 
    // Methods allow Objects to perform actions , which can lead to interactive and dynamic behaviours. 

    