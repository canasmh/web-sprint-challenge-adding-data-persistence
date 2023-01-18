// build your `Project` model here
const db = require('../../data/dbConfig');

const find = async () => {
    const projects = await db('projects');
    projects.map(project => {
        project.project_completed = !project.project_completed ? false : true;
        return project;
    });

    return projects;
}

const add = async (project) => {
    if (!project.project_name) {
        return {status: 400, message: "project name must be inserted"};
    }
    const id = await db('projects').insert(project);
    const newProject = await db('projects').where({project_id: id}).first();
    newProject.project_completed = !newProject.project_completed ? false : true;
    return newProject;
}

module.exports = {
    find,
    add
}
