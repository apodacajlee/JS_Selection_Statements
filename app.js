console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
let number = 42;
let userNumber = prompt("Enter a number: ");

if(userNumber < number) {
  console.log("too low");
}

else if(userNumber > number) {
  console.log("too high");
}

else if(userNumber == number){
  console.log("Congratulations!!!");
}

// Exercise 2

let birthMonth = prompt("What is your birth month?");

switch(birthMonth){
  case("December"):
  case("January"):
  case("February"):
    console.log("You were born in Winter");
    break;

  case("March"):
  case("April"):
  case("May"):
    console.log("You were born in Spring");
    break;

  case("June"):
  case("July"):
  case("August"):
    console.log("You were born in Summer");
    break;

  case("September"):
  case("October"):
  case("November"):
    console.log("You were born in Fall");
    break;

  default:
    console.log("Invalid month");
}

// Exercise 3
let typeId = "90";
let colorId = "A";
let sizeId = "A";

let type = "";
let color = "";
let size = "";

switch (typeId){
  case "01":
    type = "Tank Top";
    break;

  case "02":
    type = "T-Shirt";
    break;

  case "03":
    type = "Long Sleeve";
    break;

  case "04":
    type = "Sweat Shirt";
    break;
  
  default:
    type = "Other";
}

switch (colorId){
  case "BL":
    color = "Black";
    break;
  
  case "BL":
    color = "Blue";
    break;

  case "RD":
    color = "Red";
    break;

  case "PU":
    color = "Purple";
    break;

  default:
    color = "White";
}

switch (sizeId){
  case "S":
    size = "Small";
    break;
  
  case "M":
    size = "Medium";
    break;

  case "L":
    size = "Large";
    break;

  case "XL":
    size = "Extra Large";
    break;

  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);