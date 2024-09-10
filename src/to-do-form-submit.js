export function onFormSubmit()
{
    const toDoTitle = document.querySelector("#title").value;
    const toDoDescription = document.querySelector("#description").value;
    const toDoPriority = document.querySelector("#priority").value;
    const toDoDueDate = document.querySelector("#dueDate").value;
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

    return (`${toDoTitle}, ${toDoDescription}, ${toDoPriority}, ${toDoDueDate}, ${toDoNotes}, ${isCompleted}`);
}