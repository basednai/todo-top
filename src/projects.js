import { Todo } from "./todo";

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

        removeTodo: function (Todo) {
            todos = todos.filter((item) => item != Todo);

        },
        get: () => todos,
        projectName,
        todos,
        master
    }
}