export function toDoListObject(inputString)
{
    //split the input string into an array
    //see the to-do-form-submit module for the exported information
    let stringToArray = inputString.split(" ");

    //the array index corresponds to the card's title, description, priority, notes, and whether it was completed
    let title = stringToArray[0];
    let project = stringToArray[1];
    let description = stringToArray[2];
    let priority = stringToArray[3];
    let dueDate = stringToArray[4];
    let notes = stringToArray[5];
    let completed = stringToArray[6];

    return { title, project, description, priority, dueDate, notes, completed };
}