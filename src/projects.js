import { RenderContent } from "./renderContent";
import { container } from "./projectContainer";

export function Project(name, master = false) {
    let todos = [];
    let projectName = name;

    return {
        addTodo: (Todo) => {
            todos.push(Todo)
            Todo.project = projectName
        },
        addToAll: (Todo) => {
            todos.push(Todo)
        },

        removeTodo: function (Todo, container, project, content, all) {

            todos = todos.filter((item) => item != Todo);
            RenderContent(container, project, content, all)

        },
        clearTodos: function () {
            todos = [];
            RenderContent(container, project, content, all)
        },
        get: () => todos,
        projectName,
        todos,
        master
    }
}