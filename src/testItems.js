import { Todo } from "./todo";
// import { container } from "./projectContainer";
import { container, storage } from "./storage"


export function testItems() {// Test items
    if (!storage) {
        let test1 = container.newProject("Sample Project 1")


        let testTodo = Todo("Todo 1", "Insert description here", "Insert Due Date/Time", "Insert Urgency")
        let testTodo2 = Todo("Todo 2", "Insert description here", "Insert Due Date/Time", "Insert Urgency")
        let testTodo3 = Todo("Todo 3", "Insert description here", "Insert Due Date/Time", "Insert Urgency")


        if (test1)
            test1.addTodo(testTodo)
            test1.addTodo(testTodo2)
            test1.addTodo(testTodo3)

    }
}