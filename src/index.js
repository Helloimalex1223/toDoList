import "./styles.css";
import { modalLogic } from "./modal";
import { toggleModal } from "./modal";
import { handleFormInfo } from "./formHandling"
import { handleFormReset } from "./formHandling"
import { deleteToDoListObject } from "./to-do-card";


//Allow users to delete a card
modalLogic(); 

let toDoArray = [];
let submitButton = document.querySelector(".submitButton");
let cancelButton = document.querySelector(".cancelButton");
let deleteButton;
//initalize the card number. This is fed into the DOM when creating a card. When the user clicks a specific "delete" button, this value is used to delete the relevant card. 
let cardNumber = 0;
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

    //inputs the array of to do objects and the class name of the form into the handleForm function. Set the cardNumber variable to the return value from the function
    cardNumber = handleFormInfo(toDoArray, cardNumber);
    
    //assign the delete button variable to the deleteButton element after the card is created
    deleteButton = document.querySelector(".deleteButton");

    deleteButton.addEventListener("click", function(e)
    {
        console.log(e.target.getAttribute("id"));
    });

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


