import { onFormSubmit } from "./to-do-form-submit"
import { toDoCardDom } from "./to-do-card-dom";
import { toDoListObject } from "./to-do-card";


export function handleFormInfo(arrayName, cardNumber)
{

cardNumber++;
//the values from the modal are initialized into a variable
let val = onFormSubmit();

//this variable is fed into the toDoListObject function
let valObj = toDoListObject(val);

//push the values into the toDoList array
arrayName.push(valObj);

//output the last array value to the DOM
toDoCardDom(arrayName[arrayName.length - 1], cardNumber);

return cardNumber;
}

export function handleFormReset(formName)
{
    document.querySelector(formName).reset();
}