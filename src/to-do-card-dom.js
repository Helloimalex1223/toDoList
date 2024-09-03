export function toDoCardDom(toDoCardObject)
{
    const cardWrapper = document.querySelector(".toDoCardWrapper");
    const cardDiv = document.createElement("div");
    
    cardDiv.classList.add("toDoCardDiv");
    cardWrapper.appendChild(cardDiv);

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = toDoCardObject.title;
    cardDiv.appendChild(cardTitle);

    const cardDescription = document.createElement("p");
    cardDescription.textContent = `Description: ${toDoCardObject.description}`;
    cardDiv.appendChild(cardDescription);

    const cardPriority = document.createElement("p");
    cardPriority.textContent = `Priority: ${toDoCardObject.priority}`;
    cardDiv.appendChild(cardPriority);

    const cardNotes = document.createElement("p");
    cardNotes.textContent = `Notes: ${toDoCardObject.notes}`;
    cardDiv.appendChild(cardNotes);

    const cardCompleted = document.createElement("p");
    cardCompleted.textContent = `Completed: ${toDoCardObject.completed}`;
    cardDiv.appendChild(cardCompleted);
}