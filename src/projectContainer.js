import { Project } from "./projects.js";

export let masterProject = Project("All Todos")

export function ProjectContainer() {
    let projects = [];
    projects.push(masterProject)
    let noMaster = []

    return {
        newProject: (name) => {
            let project = Project(name)
            projects.push(project);
            noMaster.push(project);
            return project;
        },
        getProjects: () => projects,
        get: (projectName) => noMaster.find((item) => item.projectName == projectName),
    }
}
