import { Todo } from "./todo";
import { RenderContent } from "./renderContent";

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

        removeTodo: function (Todo, projectContainer, project, content, all) {

            todos = todos.filter((item) => item != Todo);
            RenderContent(projectContainer, project, content, all)

        },
        clearTodos: function () {
            todos = [];
            RenderContent(projectContainer, project, content, all)
        },
        get: () => todos,
        projectName,
        todos,
        master
    }
}