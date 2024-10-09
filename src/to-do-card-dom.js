export function toDoCardDom(toDoCardObject, cardNumber)
{
    //by default, the DOM text content displays an extra "," as tat is the value in the toDoCard object. That is why each textContent has to be sliced.

    const cardWrapper = document.querySelector(".toDoCardWrapper");
    const cardDiv = document.createElement("div");
    
    cardDiv.classList.add("toDoCardDiv");
    cardDiv.setAttribute("id", `card` + cardNumber);
    cardWrapper.appendChild(cardDiv);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("cardTitle");
    cardTitle.textContent = toDoCardObject.title.slice(0, -1);
    cardDiv.appendChild(cardTitle);

    const cardDescription = document.createElement("p");
    cardDescription.textContent = `Description: ${toDoCardObject.description.slice(0, -1)}`;
    cardDiv.appendChild(cardDescription);

    const cardPriority = document.createElement("p");
    cardPriority.textContent = `Priority: ${toDoCardObject.priority.slice(0, -1)}`;
    cardDiv.appendChild(cardPriority);

    const cardDueDate = document.createElement("p");
    cardDueDate.textContent = `Due Date: ${toDoCardObject.dueDate.slice(0, -1)}`;
    cardDiv.appendChild(cardDueDate);

    const cardNotes = document.createElement("p");
    cardNotes.textContent = `Notes: ${toDoCardObject.notes.slice(0, -1)}`;
    cardDiv.appendChild(cardNotes);

    const cardCompleted = document.createElement("p");
    cardCompleted.textContent = `Completed: ${toDoCardObject.completed}`;
    cardDiv.appendChild(cardCompleted);

    const cardDelete = document.createElement("button");
    cardDelete.classList.add("deleteButton");
    cardDelete.textContent = `Delete Card`;
    cardDelete.setAttribute("id", cardNumber);
    cardDiv.appendChild(cardDelete);
}

// export function deleteToDoListDOM(cardNumber)
// {
//     cardNumber.parentNode.remove();
// }