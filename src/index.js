import "./styles.css";
import { toDoListObject } from "./to-do-card";
import { toDoCardDom } from "./to-do-card-dom";
import { modalLogic } from "./modal";

//NEXT: Get information from the form in the modal. Input that into the toDoArray (Maybe need to create another module?)

let toDoArray = [];

const addTask = document.querySelector(".addTask");
addTask.addEventListener("click", modalLogic);


let dog1 = toDoListObject("Walk Dog", "I need to walk the dog.", "High", "Dog poops a lot", "Not completed");


let dog2 = toDoListObject("Walk Dog", "I need to walk the dog.", "High", "Dog poops a lot", "Not completed");


toDoArray.push(dog1);
toDoArray.push(dog2);

console.log(toDoArray);

//output the values in the toDoArray to the DOM
for(let val in toDoArray)
{
    toDoCardDom(toDoArray[val]);
}
