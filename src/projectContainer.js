import { Project } from "./projects.js";

export function ProjectContainer() {
    let projects = [];
    let none = Project("none");

    return {
        newProject: (name) => {
            if (name != "none")
                if (projects.find((proj) => proj.projectName == name)) {
                    return false
                } else {
                    let project = Project(name)
                    projects.push(project);
                    return project;
                }
        },
        removeProject: (name) => {
            if (name != "none") {
                projects = projects.filter((proj) => proj.projectName != name)
            }
        },
        getProjects: () => projects,
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

export const container = ProjectContainer();