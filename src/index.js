import "./styles.css";
import { toDoListObject } from "./to-do-card";
import { toDoCardDom } from "./to-do-card-dom";
import { modalLogic } from "./modal";
import { onFormSubmit } from "./to-do-form-submit"

// NEXT: Figure out the logic for adding and removing the "hidden" class to the modal. For some reason it resets the page when you click "cancel." Adding a to-do card and then clicking cancel is fine.

let toDoArray = [];
let submitButton;
let cancelButton;

const addTask = document.querySelector(".addTask");
addTask.addEventListener("click", function()
{

    //display the modal when the user clicks the Add Task Button
    modalLogic();
    let modalSelect = document.querySelector(".modalContainer");

    modalSelect.classList.remove("hidden");
    submitButton = document.querySelector(".submitButton");
    cancelButton = document.querySelector(".cancelButton");
    
    //when the user clicks the submit button, set the to-do card values to the values in the form
    submitButton.addEventListener("click", function()
    {

    //the values from the modal are initialized into a variable
    let val = onFormSubmit();
    console.log(val);

    //this variable is fed into the toDoListObject function
    let valObj = toDoListObject(val);

    console.log(`Values pushed into the toDoListObject function ${valObj}`);
    //push the values into the toDoList array
    toDoArray.push(valObj);
    console.log(`Values in the toDoArray ${toDoArray[0]}`);
    
    //output the last array value to the DOM
    toDoCardDom(toDoArray[toDoArray.length - 1]);

    //resets the form after the user submits it 
    document.querySelector(".rendered-form").reset();

    //Prevent the form from submitting when the Submit button is clicked
    document.querySelector(".rendered-form").addEventListener('submit', function(event)
    {
        event.preventDefault();
    });



    });  

    cancelButton.addEventListener("click", function()
    {
        //resets the form after the user submits it 
        document.querySelector(".rendered-form").reset();

        //Prevent the form from submitting when the Submit button is clicked
        document.querySelector(".rendered-form").addEventListener('submit', function(event)
        {
        event.preventDefault();
        });
        
        modalSelect.classList.add("hidden");
        
    });
    
});

