export function toDoListObject(inputString)
{
    //split the input string into an array
    //see the to-do-form-submit module for the exported information
    let stringToArray = inputString.split(" ");

    //the array index corresponds to the card's title, description, priority, notes, and whether it was completed
    let title = stringToArray[0];
    let description = stringToArray[1];
    let priority = stringToArray[2];
    let dueDate = stringToArray[3];
    let notes = stringToArray[4];
    let completed = stringToArray[5];

    return { title, description, priority, dueDate, notes, completed };
}

// export function deleteToDoListObject(arrayContainingObject)
// {
//     for(let i in arrayContainingObject)
//     {
//         if(arrayContainingObject[i] == arrayContainingObject[0])
//         {
//             arrayContainingObject[i].splice(arrayContainingObject[i], 1);
//         }
//     }

//     return arrayContainingObject;
// }