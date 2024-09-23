import { RenderContent } from "./renderContent";
// import { container } from "./projectContainer";
import { container, save } from "./storage"


export function Project(name, master = false) {
    let todos = [];
    let projectName = name;

    return {
        addTodo: (Todo) => {
            todos.unshift(Todo)
            Todo.project = projectName
            save()
        },
        addToAll: (Todo) => {
            todos.unshift(Todo)
            save()
        },

        removeTodo: function (Todo, container, project, content, all) {

            todos.splice(0, todos.length, ...todos.filter((item) => item != Todo));
            console.log(project.get());
            console.log(project.todos);
            console.log(container.getProjects());
            RenderContent(container, project, content, all)

            save()
        },
        clearTodos: function () {
            todos = [];
            RenderContent(container, project, content, all)
            save()
        },
        newTodos: (newTodos) => todos.splice(0, todos.length, ...newTodos)
        ,
        get: () => todos,
        projectName,
        todos,
        master
    }
}