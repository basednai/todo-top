import { Todo } from "./todo.js";
import { Project, masterProject } from "./projects.js";
import { RenderContent } from "./renderContent.js";
import * as css from "./styles.css";
import { ProjectContainer } from "./projectContainer.js";



const container = document.querySelector('[data-container]');
const header = document.querySelector('[data-header]');
const sidebar = document.querySelector('[data-sidebar]');
const sidebarList = document.querySelector('[data-projectList]');
const content = document.querySelector('[data-content]');
const form = document.querySelector('[data-form]')
const formPopUp = document.querySelector('[data-formPopUp]')
const newBtn = document.querySelector("[data-newTodo]")
const closeBtn = document.querySelector("[data-closeBtn")
const submitBtn = document.querySelector("[data-submit]")
const select = document.querySelector("[data-select]")

// Test items
let projectContainer = ProjectContainer();
let test1 = projectContainer.newProject("test1")
let test2 = projectContainer.newProject("test2")
let test3 = projectContainer.newProject("test3")

console.log(projectContainer.getProjects())
let testTodo = Todo("todo1", "description", "DD", "urgent")
let testTodo2 = Todo("todo2", "description", "DD", "urgent")
test1.addTodo(testTodo)
test1.addTodo(testTodo2)

let testTodo3 = Todo("todo3", "description", "DD", "urgent")
test3.addTodo(testTodo3)


console.log(projectContainer.getProjects())


//List projects in sidebar and select
projectContainer.getProjects().forEach(element => {
    console.log(element.projectName);
    let projectButton = document.createElement("button")
    let projectItem = document.createElement("li")
    projectButton.textContent = element.projectName
    projectItem.appendChild(projectButton)
    sidebarList.appendChild(projectItem)
    let option = document.createElement("option")
    option.textContent = element.projectName
    option.setAttribute("value", element.projectName)
    select.appendChild(option)


    projectButton.addEventListener("click", () => {
        content.innerHTML = "";
        element.get().forEach((todo) => {
            RenderContent(todo, content)
        })

    })
});

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
    // output as an object
    console.log(Object.fromEntries(formData));

    // ...or iterate through the name-value pairs
    for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }

    let project = projectContainer.get(formData.get("projects"))
    console.log("selected", project);

    project.addTodo(Todo(formData.get("title"), formData.get("dsc"), formData.get("dueDate"), formData.get("priority")))


hideform()
})


function hideform() {
    form.reset()
    formPopUp.style.display = "none"
    newBtn.style.display = "block"
}

