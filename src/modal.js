export function formModalLogic()
{
    let cardWrapper = document.querySelector(".toDoCardWrapper");
    let myModal = document.createElement("div");
    myModal.classList.add("modalContainer");

    let modalTitle = document.createElement("h2");
    modalTitle.classList.add("modalTitle");
    modalTitle.textContent = "Add a Task";

    myModal.appendChild(modalTitle);

    //logic to create a form in the modal when the user opens it:

        // Create the form element
        const renderedForm = document.createElement("form");
        renderedForm.className = "rendered-form";
    
        // Create the Title field
        const titleDiv = document.createElement("div");
        titleDiv.className = "formbuilder-text form-group field-title";
    
        const titleLabel = document.createElement("label");
        titleLabel.setAttribute("for", "title");
        titleLabel.className = "formbuilder-text-label";
        titleLabel.textContent = "Title";
    
        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.className = "title";
        titleInput.name = "title";
        titleInput.id = "title";
    
        titleDiv.appendChild(titleLabel);
        titleDiv.appendChild(titleInput);

        // Create the Project field
        const projectDiv = document.createElement("div");
        projectDiv.className = "projDiv";
    
        const projectLabel = document.createElement("label");
        projectLabel.setAttribute("for", "project");
        projectLabel.className = "formbuilder-text-label";
        projectLabel.textContent = "Project";
    
        const projectInput = document.createElement("select");
        projectInput.className = "project";
        projectInput.name = "project";
        projectInput.id = "project";

        //TODO get the project names from the projectArray array in the index.js file -- maybe create a new funciton for this>
        

        // const projSelections = document.createElement("option");
        // projSelections.value = choiceArr[proj];
        // projSelections.textContent = choiceArr[proj];
        // projectInput.appendChild(projSelections);


        // projectDiv.appendChild(projectLabel);
        // projectDiv.appendChild(projectInput);
    
        // Create the Description field
        const descriptionDiv = document.createElement("div");
        descriptionDiv.className = "formbuilder-text form-group field-description";
    
        const descriptionLabel = document.createElement("label");
        descriptionLabel.setAttribute("for", "description");
        descriptionLabel.className = "formbuilder-text-label";
        descriptionLabel.textContent = "Description";
    
        const descriptionInput = document.createElement("input");
        descriptionInput.type = "text";
        descriptionInput.className = "description";
        descriptionInput.name = "description";
        descriptionInput.id = "description";
    
        descriptionDiv.appendChild(descriptionLabel);
        descriptionDiv.appendChild(descriptionInput);
    
        // Create the Priority field
        const priorityDiv = document.createElement("div");
        priorityDiv.className = "formbuilder-select form-group field-priority";
    
        const priorityLabel = document.createElement("label");
        priorityLabel.setAttribute("for", "priority");
        priorityLabel.className = "formbuilder-select-label";
        priorityLabel.textContent = "Priority";
    
        const prioritySelect = document.createElement("select");
        prioritySelect.className = "priority";
        prioritySelect.name = "priority";
        prioritySelect.id = "priority";
    
        const lowOption = document.createElement("option");
        lowOption.value = "low";
        lowOption.selected = true;
        lowOption.id = "priority-0";
        lowOption.textContent = "Low";
    
        const mediumOption = document.createElement("option");
        mediumOption.value = "medium";
        mediumOption.id = "priority-1";
        mediumOption.textContent = "Medium";
    
        const highOption = document.createElement("option");
        highOption.value = "high";
        highOption.id = "priority-2";
        highOption.textContent = "High";
    
        prioritySelect.appendChild(lowOption);
        prioritySelect.appendChild(mediumOption);
        prioritySelect.appendChild(highOption);
    
        priorityDiv.appendChild(priorityLabel);
        priorityDiv.appendChild(prioritySelect);

        //create the dueDate field
        const dueDateDiv = document.createElement("div");
        dueDateDiv.className = "formbuilder-textarea form-group field-notes";
    
        const dueDateLabel = document.createElement("label");
        dueDateLabel.setAttribute("for", "dueDate");
        dueDateLabel.className = "formbuilder-textarea-label";
        dueDateLabel.textContent = "Due Date";
    
        const dueDateTextarea = document.createElement("textarea");
        dueDateTextarea.className = "dueDate";
        dueDateTextarea.name = "dueDate";
        dueDateTextarea.id = "dueDate";

        dueDateDiv.appendChild(dueDateLabel);
        dueDateDiv.appendChild(dueDateTextarea);
    
        // Create the Notes field
        const notesDiv = document.createElement("div");
        notesDiv.className = "formbuilder-textarea form-group field-notes";
    
        const notesLabel = document.createElement("label");
        notesLabel.setAttribute("for", "notes");
        notesLabel.className = "formbuilder-textarea-label";
        notesLabel.textContent = "Notes";
    
        const notesTextarea = document.createElement("textarea");
        notesTextarea.className = "notes";
        notesTextarea.name = "notes";
        notesTextarea.id = "notes";
    
        notesDiv.appendChild(notesLabel);
        notesDiv.appendChild(notesTextarea);
    
        // Create the Completed field (Checkbox)
        const completedDiv = document.createElement("div");
        completedDiv.className = "formbuilder-checkbox-group form-group field-completed";
    
        const completedLabel = document.createElement("label");
        completedLabel.setAttribute("for", "completed");
        completedLabel.className = "formbuilder-checkbox-group-label";
        completedLabel.textContent = "Completed";
    
        const checkboxGroupDiv = document.createElement("div");
        checkboxGroupDiv.className = "checkbox-group";
    
        const completedCheckboxDiv = document.createElement("div");
        completedCheckboxDiv.className = "formbuilder-checkbox";
    
        const completedCheckbox = document.createElement("input");
        completedCheckbox.className = "completed";
        completedCheckbox.name = "completed[]";
        completedCheckbox.id = "completed-0";
        completedCheckbox.value = "completed";
        completedCheckbox.type = "checkbox";
        completedCheckbox.checked = false;
    
        const completedCheckboxLabel = document.createElement("label");
        completedCheckboxLabel.setAttribute("for", "completed-0");
        completedCheckboxLabel.textContent = "Completed";

        const submit = document.createElement("button");
        submit.textContent = "Submit";
        submit.classList.add("submitButton");

        const cancel = document.createElement("button");
        cancel.textContent = "Cancel";
        cancel.classList.add("cancelButton");
    
        completedCheckboxDiv.appendChild(completedCheckbox);
        completedCheckboxDiv.appendChild(completedCheckboxLabel);
        checkboxGroupDiv.appendChild(completedCheckboxDiv);
        completedDiv.appendChild(completedLabel);
        completedDiv.appendChild(checkboxGroupDiv);
    
        // Append all fields to the renderedForm div
        renderedForm.appendChild(titleDiv);
        renderedForm.appendChild(descriptionDiv);
        renderedForm.appendChild(projectDiv);
        renderedForm.appendChild(priorityDiv);
        renderedForm.appendChild(dueDateDiv);
        renderedForm.appendChild(notesDiv);
        renderedForm.appendChild(completedDiv);
        renderedForm.appendChild(submit);
        renderedForm.appendChild(cancel);
    
        // Append the rendered form to the modal container
        myModal.appendChild(renderedForm);
        cardWrapper.appendChild(myModal);   

}


//TODO -- Troubleshoot how to get values in the project array to get added as a DOM element. I need to get the values from the array and place them in the DOM element.
export function addProjectToModal(modalArr)
{
    const projectDivv = document.querySelector(".projDiv");
    const projSelections = document.createElement("option");

    for(let proj in modalArr)
    {
        projSelections.value = modalArr[proj];
        projSelections.textContent = modalArr[proj];
        projectInput.appendChild(projSelections);
    
    }
    projectDivv.appendChild(projectLabel);
    projectDivv.appendChild(projectInput);


}

export function toggleModal(DOMElement)
{
    DOMElement.classList.toggle("hidden");
}
