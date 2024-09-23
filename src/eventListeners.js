// import { container, ProjectContainer } from "./projectContainer"
import { hideform } from "./hideForm"
import { RenderContent } from "./renderContent"
import { appendProject, renderProjects } from "./renderProjects"
import { listall } from "./renderContent"
import { Todo } from "./todo"
import { container } from "./storage"

export function events() {
    document.querySelector("[data-newTodo]").addEventListener("click", () => {
        document.querySelector('[data-formPopUp]').style.display = "block"
        document.querySelector("[data-newTodo]").style.display = "none"
    })

    document.querySelector("[data-closeBtn").addEventListener("click", () => {
        hideform(document.querySelector('[data-form]'), document.querySelector('[data-formPopUp]'), document.querySelector('[data-newtodo]'))
    })

    document.querySelector('[data-form]').addEventListener("submit", (e) => {
        e.preventDefault();
        let formData = new FormData(document.querySelector('[data-form]'));

        let project = container.get(formData.get("projects"))

        project.addTodo(Todo(formData.get("title"), formData.get("dsc"), formData.get("dueDate"), formData.get("priority")))



        hideform(document.querySelector('[data-form]'), document.querySelector('[data-formPopUp]'), document.querySelector('[data-newtodo]'))

        RenderContent(container, project, document.querySelector('[data-content]'), (project.projectName == "none") ? true : false)
    })

    document.querySelector("[data-newProject]").addEventListener("click", () => {
        let projectName = prompt("Enter Project Name");
        if (projectName)
            if (!container.getProjects().find((proj) => proj.projectName == projectName)) {
                appendProject(container.newProject(projectName), container, document.querySelector('[data-content]'), document.querySelector('[data-projectList]'), document.querySelector("[data-select]"));
            }
    });


    document.querySelector("[data-listall]").addEventListener("click", () => {
        listall()
    });

    document.querySelector(["[data-rmProject]"]).addEventListener("click", () => {
        let rmName = prompt("Enter Project to Remove");

        if (rmName)
            if (rmName != "none") {
                container.removeProject(rmName)
                renderProjects();
                listall()
            }
            else alert("Invalid entry.")
    })
}