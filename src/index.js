import "./styles.css";
import { formModalLogic } from "./modal";
import { toggleModal } from "./modal";
import { handleFormInfo } from "./formHandling"
import { handleFormReset } from "./formHandling"
import { addProject } from "./addProject";
import { addProjectToModal } from "./modal";
// import { deleteToDoListObject } from "./to-do-card";
// import { deleteToDoListDOM } from "./to-do-card-dom";


//TOD   o: CREATE DROPDOWN THAT DISPLAYS WHEN THE USER CLICKS "ADD PROJECT." Feed the info into the DOM to create a button with that project name. Later, categorize the to do cards by the available projects

//fill in project array with the added project values (from the buttons the user added) --- add a div for each separate project? Then the user can delete projects as needed. -- need to feed this array into the project field so a user can select this when creating a card.

//Allow users to delete a card


let toDoArray = [];
let projectArray = ["value"];
//call the modal function and pass in the current array of projects
formModalLogic(); 

let submitButton = document.querySelector(".submitButton");
let cancelButton = document.querySelector(".cancelButton");
let addProjectButton = document.querySelector(".addProject");
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

//display the project modal when the "add project" button is clicked
addProjectButton.addEventListener("click", function()
{
    let val = addProject();
    projectArray.push(val);
    addProjectToModal(projectArray);
});


    //selects the parent div
    const parent = document.querySelector(".toDoCardWrapper");
    parent.addEventListener("click", function(e)
    {
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



