import { ProjectContainer } from "./projectContainer.js";
import { Project } from "./projects.js";
import { renderProjects } from "./renderProjects.js";

//clear content and render button info
export function RenderContent(projectContainer, project, content, all = false) {
    content.innerHTML = "";

    if (all) project = projectContainer.allTodos()

    project.get().forEach((todo) => {

        let todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");


        todoContent(todo, "title", todoDiv);
        todoContent(todo, "description", todoDiv);
        todoContent(todo, "dueDate", todoDiv);
        todoContent(todo, "priority", todoDiv);

        let rmBtn = document.createElement("button");
        rmBtn.textContent = "Remove"
        rmBtn.classList.add("rmButton")
        rmBtn.addEventListener("click", () => {
            project = projectContainer.get(todo.project)



            project.removeTodo(todo, projectContainer, project, content, all)

        })
        todoDiv.appendChild(rmBtn)

        content.appendChild(todoDiv)

    })

    function todoContent(todo, param, parent) {
        let content = document.createElement("div");

        let heading = (param == "dueDate") ? "Due Date" : param

        content.innerHTML = (param == "dueDate") ? `<strong>${capitalize(heading)}</strong> <br> ${todo[param].toLocaleString('en-US')}` : `<strong>${capitalize(heading)}</strong> <br> ${todo[param]}`;
        parent.appendChild(content);

        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
}
