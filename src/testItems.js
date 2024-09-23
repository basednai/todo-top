import { Todo } from "./todo";
import { container } from "./projectContainer";

export function testItems() {// Test items
    let test1 = container.newProject("Sample Project 1")
    let test2 = container.newProject("Sample Project 2")
    let test3 = container.newProject("Sample Project 3")

    let testTodo = Todo("Todo 1", "Insert description here", "Insert Due Date/Time", "Insert Urgency")
    let testTodo2 = Todo("Todo 2", "Insert description here", "Insert Due Date/Time", "Insert Urgency")
    let testTodo3 = Todo("Todo 3", "Insert description here", "Insert Due Date/Time", "Insert Urgency")


    test1.addTodo(testTodo)
    test2.addTodo(testTodo2)
    test3.addTodo(testTodo3)
}