import { save } from "./storage";
import { Project } from "./projects.js";
import { container } from "./storage"


export function ProjectContainer(savedProjects = []) {
    let projects = savedProjects;
    let none = Project("none");

    return {
        newProject: (name) => {
            if (name != "none")
                if (projects.find((proj) => proj.projectName == name)) {
                    return false
                } else {
                    let project = Project(name)
                    projects.push(project);
                    save();
                    return project;
                }
        },
        removeProject: (name) => {
            if (name != "none") {
                projects.splice(0,projects.length, ...projects.filter((proj) => proj.projectName != name))
                save()
            }
        },
        getProjects: () => projects,
        getNone: () => none,
        get: (projectName) => {
            return projectName == "none" ? none :
                projects.find((item) => item.projectName == projectName)
        },
        allTodos: () => {
            let master = Project("master", true)
            none.get().forEach((todo) => master.addToAll(todo))

            projects.forEach((project) => {

                project.get().forEach((todo) => master.addToAll(todo))
            })
            return master
        }
    }
}
// let container = ProjectContainer();

// if (!localStorage.getItem("container")) {
//     console.log("not found");
//     container = ProjectContainer();
//     container.save()

// } else {
//     console.log("found")
//     container = JSON.parse(localStorage.getItem("container"))
//     console.log("logging container", container)
// }


// export { container }