import "./styles.css";
import { toDoListObject } from "./to-do-card";
import { toDoCardDom } from "./to-do-card-dom";
import { modalLogic } from "./modal";
import { onFormSubmit } from "./to-do-form-submit"


//TODO =- rewrite this code to be more modular. Add new modules for:
//showing/hiding/toggling classes on the modal (can add in Modal.js)
//form handling -- collects/returns form data/prevents default form submission behavior
//event listeners
modalLogic(); 

let toDoArray = [];
let submitButton;
let cancelButton;

let modalSelect = document.querySelector(".modalContainer");
    
submitButton = document.querySelector(".submitButton");
cancelButton = document.querySelector(".cancelButton");

const addTask = document.querySelector(".addTask");

modalSelect.classList.add("hidden");


addTask.addEventListener("click", function()
{
    modalSelect.classList.toggle("hidden");

    //display the modal when the user clicks the Add Task Button
});


    
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
            console.log("Form Prevented from submitting");
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
        console.log("Form Prevented from submitting");
        event.preventDefault();
    });

        modalSelect.classList.add("hidden");
        
    });

