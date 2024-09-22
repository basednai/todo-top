import { ProjectContainer } from "./projectContainer.js";
import { Project } from "./projects.js";
import { renderProjects } from "./renderProjects.js";

//clear content and render button info
export function RenderContent(projectContainer, project, content, all = false) {
    content.innerHTML = "";

    if (all) project = projectContainer.allTodos()
    console.log(project);


    project.get().forEach((todo) => {
        console.log(todo);

        let todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");


        todoContent(todo, "title", todoDiv);
        todoContent(todo, "description", todoDiv);
        todoContent(todo, "dueDate", todoDiv);
        todoContent(todo, "priority", todoDiv);

        let rmBtn = document.createElement("button");
        rmBtn.textContent = "Remove todo"
        rmBtn.addEventListener("click", () => {
            // let project = projectContainer.get(todo.project)

            project.removeTodo(todo)

            RenderContent(projectContainer, project, content, all)
        })
        todoDiv.appendChild(rmBtn)

        content.appendChild(todoDiv)

    })


    function todoContent(todo, param, parent) {
        let content = document.createElement("div");
        content.textContent = `${param}: ${todo[param]};`
        parent.appendChild(content);
    }
}
