import { RenderContent } from "./renderContent";

export function renderProjects(projectContainer, content, sidebarList, select) {
    sidebarList.innerHTML = "";
    select.innerHTML = "";
    projectContainer.getProjects().forEach(element => {
        console.log(element.projectName);
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

        // render todos when selected
        projectButton.addEventListener("click", () => {
            content.innerHTML = "";
            element.get().forEach((todo) => {
                RenderContent(todo, content, projectContainer)
            })
        })
    });
}