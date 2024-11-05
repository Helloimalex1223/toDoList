export function addProject()
{
    const formValue = document.querySelector("#project");
    console.log(formValue.value);
    addProjectButton(formValue.value);
    // formValue.value = "";
    return formValue.value;
}

function addProjectButton(projectButton)
{
    //logic for the individual project button for each project card
    const projDiv = document.querySelector(".currentProjects");
    const individualProjDiv = document.createElement("div");

    individualProjDiv.classList.add("projectCard");
    
    const projName = document.createElement("h2");
    projName.classList.add("projTitle");
    projName.textContent = projectButton;
    individualProjDiv.appendChild(projName);

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("buttonDiv");

    const filterButton = document.createElement("button");
    filterButton.textContent = "Filter";
    buttonDiv.appendChild(filterButton);

    const closeButton = document.createElement("button");
    closeButton.textContent = "Delete";
    buttonDiv.appendChild(closeButton);

    individualProjDiv.appendChild(buttonDiv);
    projDiv.appendChild(individualProjDiv);
}