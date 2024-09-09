import "./styles.css";
import { modalLogic } from "./modal";
import { toggleModal } from "./modal";
import { handleFormInfo } from "./formHandling"
import { handleFormReset } from "./formHandling"


//TODO - figure out making the form inputs hide when the .hidden class is added to the form
//Allow users to delete a card
modalLogic(); 

let toDoArray = [];
let submitButton = document.querySelector(".submitButton");
let cancelButton = document.querySelector(".cancelButton");
let deleteButton = document.querySelector(".deleteButton");
let addTask = document.querySelector(".addTask");
let modalSelect = document.querySelector(".modalContainer");

//hide the modal when the page is loaded
toggleModal(modalSelect);

//display the modal when the "add task" button is clicked
addTask.addEventListener("click", function()
{
    toggleModal(modalSelect);
});


    
submitButton.addEventListener("click", function()
    {

    //inputs the array of to do objects and the class name of the form into the handleForm function
    handleFormInfo(toDoArray, ".rendered-form");

    //resets the form after the user submits it
    handleFormReset(".rendered-form");

    //Prevent the form from submitting when the Submit button is clicked
    document.querySelector(".rendered-form").addEventListener('submit', function(event)
        {
        event.preventDefault();
        });

    }); 


cancelButton.addEventListener("click", function()
    {
    //resets the form after the user submits it 
    handleFormReset(".rendered-form");

    //Prevent the form from submitting when the Submit button is clicked
    document.querySelector(".rendered-form").addEventListener('submit', function(event)
        {
            event.preventDefault();
        });

    toggleModal(modalSelect);   

    });


//delete card when the "delete" button is clicked
//issue is I can't attach this event listener without atleast one card being created. Need to figure out how to add this into the relevant module so this can work.
deleteButton.addEventListener("click", function()
{
    console.log("card delete");
});


