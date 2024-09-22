import { ProjectContainer } from "./projectContainer.js";
import { Project } from "./projects.js";
import { renderProjects } from "./renderProjects.js";

export function RenderContent(todo, content, projectContainer) {
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");


    todoContent(todo, "title");
    todoContent(todo, "description");
    todoContent(todo, "dueDate");
    todoContent(todo, "priority");
    let rmBtn = document.createElement("button");
    rmBtn.textContent = "Remove todo"
    rmBtn.addEventListener("click", () => {
        let project = projectContainer.get(todo.project)
        console.log(project);

        console.log("before",project);
        project.removeTodo(todo)
        console.log("after",project);

    })
    todoDiv.appendChild(rmBtn)

    content.appendChild(todoDiv)

    function todoContent(todo, param) {
        let content = document.createElement("div");
        content.textContent = `${param}: ${todo[param]};`
        todoDiv.appendChild(content);
    }
}

