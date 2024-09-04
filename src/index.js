import "./styles.css";
import { toDoListObject } from "./to-do-card";
import { toDoCardDom } from "./to-do-card-dom";
import { modalLogic } from "./modal";
import { onFormSubmit } from "./to-do-form-submit"

// NEXT: Fix logic and push the values the user submits in the form to the toDoListObject function

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

        //This format retrieves the correct toDoTitle from the form. Need to do something like I did in the library project. Trying to call the value from the checkbox Element is returning an error.  
        console.log(onFormSubmit().toDoTitle);



        //set the object returned from the onFormSubmit function to a variable


        //plug that variable in to the toDoList creation function
        // let dog2 = toDoListObject();

        //push the values into the toDoList array
        // toDoArray.push(dog2);
    });  
});


console.log(toDoArray);

//output the values in the toDoArray to the DOM
for(let val in toDoArray)
{
    toDoCardDom(toDoArray[val]);
}
