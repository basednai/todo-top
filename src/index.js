import { Todo } from "./todo.js";
import { Project } from "./projects.js";
import * as css from "./styles.css";
import { ProjectContainer } from "./projectContainer.js";
import { renderProjects, appendProject } from "./renderProjects.js";
import { RenderContent } from "./renderContent.js";



const container = document.querySelector('[data-container]');
const header = document.querySelector('[data-header]');
const sidebar = document.querySelector('[data-sidebar]');
const sidebarList = document.querySelector('[data-projectList]');
const content = document.querySelector('[data-content]');
const form = document.querySelector('[data-form]');
const formPopUp = document.querySelector('[data-formPopUp]');
const newBtn = document.querySelector("[data-newTodo]");
const closeBtn = document.querySelector("[data-closeBtn");
const submitBtn = document.querySelector("[data-submit]");
const select = document.querySelector("[data-select]");
const newProject = document.querySelector("[data-newProject]");
const noProject = document.querySelector("[data-noproject]")


// Test items
let projectContainer = ProjectContainer();
let test1 = projectContainer.newProject("test1")
let test2 = projectContainer.newProject("test2")
let test3 = projectContainer.newProject("test3")

let testTodo = Todo("todo1", "description", "DD", "urgent")
let testTodo2 = Todo("todo2", "description", "DD", "urgent")
test1.addTodo(testTodo)
test1.addTodo(testTodo2)

let testTodo3 = Todo("todo3", "description", "DD", "urgent")
test3.addTodo(testTodo3)

//List projects in sidebar and select
renderProjects(projectContainer, sidebarList, select);


newBtn.addEventListener("click", () => {
    formPopUp.style.display = "block"
    newBtn.style.display = "none"
})

closeBtn.addEventListener("click", () => {
    hideform();
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(form);

    // iterate through the name-value pairs
    // for (let pair of formData.entries()) {
    //     console.log(pair[0] + ": " + pair[1]);
    // }

    // let project = (formData.get("projects") == "none") ? projectContainer.allTodos() : projectContainer.get(formData.get("projects"))

    let project = projectContainer.get(formData.get("projects"))
    console.log(project.name, formData.get("projects"));

    project.addTodo(Todo(formData.get("title"), formData.get("dsc"), formData.get("dueDate"), formData.get("priority")))



    hideform()

    RenderContent(ProjectContainer, project, content, (project.projectName == "none") ? true : false)
})

newProject.addEventListener("click", () => {
    let projectName = prompt("Enter Project Name");
    if (projectName) {
        appendProject(projectContainer.newProject(projectName), projectContainer, content, sidebarList, select);
    }
});

function hideform() {
    form.reset()
    formPopUp.style.display = "none"
    newBtn.style.display = "block"
}

let sbButtons = document.querySelectorAll("[data-selectproject]")
sbButtons.forEach((button) => {
    // if (button.textContent == "All Todos") { };
    // render todos when selected
    button.addEventListener("click", () => {
        let selectedButtonProject = (button.id == "AllTodos" ? masterProject : projectContainer.get(button.textContent)
        )
        RenderContent(projectContainer, selectedButtonProject, content)



    })
});

document.querySelector("[data-listall]").addEventListener("click", () => {
    // console.log("click");
    RenderContent(projectContainer, projectContainer.allTodos(), content, true)
});

