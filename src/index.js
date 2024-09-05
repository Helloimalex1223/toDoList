import "./styles.css";
import { toDoListObject } from "./to-do-card";
import { toDoCardDom } from "./to-do-card-dom";
import { modalLogic } from "./modal";
import { onFormSubmit } from "./to-do-form-submit"

// NEXT: Clear and close the adding a task form when a user clicks "submit" 

let toDoArray = [];
let submitButton;

const addTask = document.querySelector(".addTask");
addTask.addEventListener("click", function()
{
    //display the modal when the user clicks the Add Task Button
    modalLogic();
    submitButton = document.querySelector(".submitButton");
    
    //when the user clicks the submit button, set the to-do card values to the values in the form
    submitButton.addEventListener("click", function()
    {

    //the values from the modal are initialized into a variable
    let val = onFormSubmit();
    console.log(val);

    //resets the form after the user submits it 
    document.querySelector(".rendered-form").reset();

    //TODO: prevent the form from submitting when the Submit button is clicked
    document.querySelector(".submitButton").addEventListener('submit', function(event)
    {
        event.preventDefault();
    });

    //this variable is fed into the toDoListObject function
    let valObj = toDoListObject(val);

    console.log(`Values pushed into the toDoListObject function ${valObj}`);
    //push the values into the toDoList array
    toDoArray.push(valObj);
    console.log(`Values in the toDoArray ${toDoArray[0]}`);
    //output the values in the toDoArray to the DOM
    for(let value in toDoArray)
    {
        toDoCardDom(toDoArray[value]);
    }

    });  
});

