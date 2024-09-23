import { Todo } from "./todo.js";
import { Project } from "./projects.js";
import * as css from "./styles.css";
import { ProjectContainer } from "./projectContainer.js";
import { renderProjects, appendProject } from "./renderProjects.js";
import { RenderContent } from "./renderContent.js";

// Test items
const projectContainer = ProjectContainer();

let test1 = projectContainer.newProject("Sample Project 1")
let test2 = projectContainer.newProject("Sample Project 2")
let test3 = projectContainer.newProject("Sample Project 3")

let testTodo = Todo("Todo 1", "Insert description here", "Insert Due Date/Time", "Insert Urgency")
let testTodo2 = Todo("Todo 2", "Insert description here", "Insert Due Date/Time", "Insert Urgency")
let testTodo3 = Todo("Todo 3", "Insert description here", "Insert Due Date/Time", "Insert Urgency")


test1.addTodo(testTodo)
test2.addTodo(testTodo2)
test3.addTodo(testTodo3)

listall()
//List projects in sidebar and select
renderProjects(projectContainer, document.querySelector('[data-projectList]'), document.querySelector("[data-select]"));

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

    // iterate through the name-value pairs
    // for (let pair of formData.entries()) {
    //     console.log(pair[0] + ": " + pair[1]);
    // }

    // let project = (formData.get("projects") == "none") ? projectContainer.allTodos() : projectContainer.get(formData.get("projects"))

    let project = projectContainer.get(formData.get("projects"))
    console.log(project.name, formData.get("projects"));

    project.addTodo(Todo(formData.get("title"), formData.get("dsc"), formData.get("dueDate"), formData.get("priority")))



    hideform(document.querySelector('[data-form]'), document.querySelector('[data-formPopUp]'), document.querySelector('[data-newtodo]'))

    RenderContent(projectContainer, project, document.querySelector('[data-content]'), (project.projectName == "none") ? true : false)
})

document.querySelector("[data-newProject]").addEventListener("click", () => {
    let projectName = prompt("Enter Project Name");
    if (projectName)
        if (!projectContainer.getProjects().find((proj) => proj.projectName == projectName)) {
            appendProject(projectContainer.newProject(projectName), projectContainer, document.querySelector('[data-content]'), document.querySelector('[data-projectList]'), document.querySelector("[data-select]"));
        }
});

function hideform(form, formPopUp, newBtn) {
    form.reset()
    formPopUp.style.display = "none"
    newBtn.style.display = "inline"
}

document.querySelector("[data-listall]").addEventListener("click", () => {
    // console.log("click");
    listall()
});

document.querySelector(["[data-rmProject]"]).addEventListener("click", () => {
    let rmName = prompt("Enter Project to Remove");

    if (rmName)
        if (rmName != "none") {
            projectContainer.removeProject(rmName)
            renderProjects(projectContainer, document.querySelector('[data-projectList]'), document.querySelector("[data-select]"));
            listall()
        }
        else alert("Invalid entry.")
})

function listall() {
    RenderContent(projectContainer, projectContainer.allTodos(), document.querySelector('[data-content]'), true)

}