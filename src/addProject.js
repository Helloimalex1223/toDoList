export function addProject()
{
    const formValue = document.querySelector("#project");
    console.log(formValue.value);
    addProjectButton(formValue.value);
    formValue.value = "";
}

function addProjectButton(projectButton)
{
    const projDiv = document.querySelector(".currentProjects");
    const myButton = document.createElement("button");
    myButton.textContent = projectButton;
    projDiv.appendChild(myButton);
}