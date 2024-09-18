export function RenderContent(todo, content) {
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");


    todoContent(todo, "title")
    todoContent(todo, "description")
    todoContent(todo, "dueDate")
    todoContent(todo, "priority")

    content.appendChild(todoDiv)

    function todoContent(todo, param) {
        let content = document.createElement("div")
        content.textContent = todo[param]
        todoDiv.appendChild(content)
    }
}

