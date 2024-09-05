export function onFormSubmit()
{
    const toDoTitle = document.querySelector("#title").value;
    const toDoDescription = document.querySelector("#description").value;
    const toDoPriority = document.querySelector("#priority").value;
    const toDoNotes = document.querySelector("#notes").value;
    const toDoCompleted = document.querySelector("#completed-0");

    let isCompleted = false;
    if(toDoCompleted.checked)
    {
        isCompleted = true;
    }
    else
    {
        isCompleted = false;
    }
    console.log("OnFormSubmit called");

    return (`${toDoTitle}, ${toDoDescription}, ${toDoPriority}, ${toDoNotes}, ${isCompleted}`);
}