import { Todo } from "./todo";
import {masterProject} from "./projectContainer.js";

export function Project(name) {
    let todos = [];
    let projectName = name;

    return {
        addTodo: (Todo) => {
            todos.push(Todo)
            masterProject.todos.push(Todo)
        },
        removeTodo: function (Todo) {
            todos = todos.filter((item) => item != Todo);
            masterProject.todos = masterProject.todos.filter((item) => item != Todo);

        },
        get: () => todos,
        projectName,
        todos
    }
}