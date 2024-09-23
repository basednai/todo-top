
import { container } from "./projectContainer.js";


//clear content and render button info
export function RenderContent(container, project, content, all = false) {
    content.innerHTML = "";

    if (all) project = container.allTodos()

    project.get().forEach((todo) => {

        let todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");


        todoContent(todo, "title", todoDiv);
        todoContent(todo, "description", todoDiv);
        todoContent(todo, "dueDate", todoDiv);
        todoContent(todo, "priority", todoDiv);
        todoContent(todo, "project", todoDiv);

        let rmBtn = document.createElement("button");
        rmBtn.textContent = "Remove"
        rmBtn.classList.add("rmButton")
        rmBtn.addEventListener("click", () => {
            project = container.get(todo.project)

            project.removeTodo(todo, container, project, content, all)

        })
        todoDiv.appendChild(rmBtn)

        content.appendChild(todoDiv)

    })

    function todoContent(todo, param, parent) {
        let content = document.createElement("div");

        let heading = (param == "dueDate") ? "Due Date" : param
        if (param == "dueDate") {
            content.innerHTML = `<strong>${capitalize(heading)}</strong> <br> ${todo[param].toLocaleString('en-US')}`;
        }
        else if (param == "project" && todo[param] == "none") {
            content.innerHTML = `<strong>${capitalize(heading)}</strong> <br> Not Assigned`;

        }
        else content.innerHTML = `<strong>${capitalize(heading)}</strong> <br> ${todo[param]}`;



        parent.appendChild(content);

        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
}

export function listall() {
    RenderContent(container, container.allTodos(), document.querySelector('[data-content]'), true)
}