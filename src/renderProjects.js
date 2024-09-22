import { RenderContent } from "./renderContent";

export function renderProjects(projectContainer, sidebarList, select) {
    projectContainer.getProjects().forEach(element => {
        let projectButton = document.createElement("button")
        projectButton.id = element.projectName.replace(" ", "")
        let projectItem = document.createElement("li")
        projectButton.textContent = element.projectName
        projectItem.appendChild(projectButton)
        sidebarList.appendChild(projectItem)

        let option = document.createElement("option")
        option.textContent = element.projectName
        option.setAttribute("value", element.projectName)
        select.appendChild(option)


        projectButton.setAttribute("data-selectproject", "")
    });
}

export function appendProject(newProject, projectContainer,content, sidebarList, select) {
    let projectButton = document.createElement("button")
    projectButton.id = newProject.projectName.replace(" ", "")
    let projectItem = document.createElement("li")
    projectButton.textContent = newProject.projectName
    projectItem.appendChild(projectButton)
    sidebarList.appendChild(projectItem)

    let option = document.createElement("option")
    option.textContent = newProject.projectName
    option.setAttribute("value", newProject.projectName)
    select.appendChild(option)


    projectButton.setAttribute("data-selectproject", "")
    projectButton.addEventListener("click", () => {
        let selectedButtonProject = projectContainer.get(projectButton.textContent)

        RenderContent(projectContainer, selectedButtonProject, content)
    })
}