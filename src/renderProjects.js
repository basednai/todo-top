import { listall, RenderContent } from "./renderContent";
import { container } from "./projectContainer";

export function renderProjects() {

    const sidebarList = document.querySelector('[data-projectList]')
    const select = document.querySelector("[data-select]")
    sidebarList.innerHTML = "";
    select.innerHTML = "";
    let noneOption = document.createElement("option")

    let listAll = document.createElement("button")
    listAll.classList.add("sbButton")

    listAll.setAttribute("data-listall", "")
    listAll.id = "listAll"
    listAll.textContent = "List All"
    listAll.addEventListener("click", () => {
        listall();
    })
    let item = document.createElement("li")
    item.appendChild(listAll)
    sidebarList.appendChild(item)

    noneOption.value = "none";
    select.appendChild(noneOption);
    container.getProjects().forEach(element => {
        let projectButton = document.createElement("button")
        projectButton.id = element.projectName.replace(" ", "")
        let projectItem = document.createElement("li")
        projectButton.textContent = element.projectName
        projectButton.classList.add("sbButton")
        projectItem.appendChild(projectButton)
        sidebarList.appendChild(projectItem)

        let option = document.createElement("option")
        option.textContent = element.projectName
        option.setAttribute("value", element.projectName)
        select.appendChild(option)


        projectButton.setAttribute("data-selectproject", "")


        projectButton.addEventListener("click", () => {
            let selectedButtonProject = (projectButton.id == "AllTodos" ? masterProject : container.get(projectButton.textContent)
            )
            RenderContent(container, selectedButtonProject, document.querySelector('[data-content]'))



        })


    });
}

export function appendProject(newProject, container, content, sidebarList, select) {
    let projectButton = document.createElement("button")
    projectButton.id = newProject.projectName.replace(" ", "")
    let projectItem = document.createElement("li")
    projectButton.textContent = newProject.projectName
    projectItem.appendChild(projectButton)
    sidebarList.appendChild(projectItem)
    projectButton.classList.add("sbButton")

    let option = document.createElement("option")
    option.textContent = newProject.projectName
    option.setAttribute("value", newProject.projectName)
    select.appendChild(option)


    projectButton.setAttribute("data-selectproject", "")
    projectButton.addEventListener("click", () => {
        let selectedButtonProject = container.get(projectButton.textContent)

        RenderContent(container, selectedButtonProject, content)
    })
}