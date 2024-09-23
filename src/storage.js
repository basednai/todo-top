import { ProjectContainer } from "./projectContainer";

let container = ProjectContainer();
let storage

if (!localStorage.getItem("projects")) {
    console.log("not found");
    storage = false

} else {
    console.log("found")
    let savedProjects = JSON.parse(localStorage.getItem("projects"))
    console.log(savedProjects);

    let savedNone = JSON.parse(localStorage.getItem("none"))


    savedProjects.forEach(element => {
        container.newProject(element.projectName)
        container.get(element.projectName).newTodos(element.todos)

    });


    container.getNone().newTodos(savedNone.todos)
    // console.log(container.getNone())



    // console.log("logging", container.getProjects())


    storage = true
}

function save() {


    localStorage.setItem("projects", JSON.stringify(container.getProjects()))
    localStorage.setItem("none", JSON.stringify(container.getNone()))
    console.log(JSON.parse(localStorage.getItem("projects")));

}

export { container, save, storage}