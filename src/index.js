import "./styles.css";
import { modalLogic } from "./modal";
import { toggleModal } from "./modal";
import { handleFormInfo } from "./formHandling"
import { handleFormReset } from "./formHandling"
import { deleteToDoListObject } from "./to-do-card";
import { deleteToDoListDOM } from "./to-do-card-dom";


//Allow users to delete a card
modalLogic(); 

let toDoArray = [];
let submitButton = document.querySelector(".submitButton");
let cancelButton = document.querySelector(".cancelButton");
let deleteButton;
let myToDoCardList;
let cardToRemove;
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

// let todayButton = document.querySelector(".today");

// todayButton.addEventListener("click", function()
// {
//     let myDeleteButtonList = document.getElementsByClassName(".deleteButton");
//     console.log(myDeleteButtonList);
// });

    //selects the parent div
    const parent = document.querySelector(".toDoCardWrapper");
    parent.addEventListener("click", function(e)
    {

    //TODO - figure out why my event listener is called multiple times. It looks like it's called the amount of times as the number of cards. How do I ensure this is only called once?
        if(e.target.id != "" && e.target.classList.contains("deleteButton"))
        {
            rem(e.target.id);
        }
    });


    
submitButton.addEventListener("click", function()
    {

    //inputs the array of to do objects and the class name of the form into the handleForm function. Set the cardNumber variable to the return value from the function
    cardNumber = handleFormInfo(toDoArray, cardNumber);
    
    //resets the form after the user submits it
    handleFormReset(".rendered-form");

    //Prevent the form from submitting when the Submit button is clicked
    document.querySelector(".rendered-form").addEventListener('submit', function(event)
    {
        event.preventDefault();
    });

    myToDoCardList = document.getElementsByClassName("toDoCardDiv");


    }); 

    function rem(e)
    {
        
        toDoArray.splice(e, 1);
        
        
        //get the card id to remove based on the button number that was clicked. This number is fed into the ID with the form `card(number`)
        cardToRemove = document.querySelector(`#card${e}`);

        cardToRemove.remove();

        
        console.log(`current status of toDoArray: ${toDoArray}`);
        console.log(myToDoCardList);
    }

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



