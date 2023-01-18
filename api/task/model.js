// build your `Task` model here
const db = require('../../data/dbConfig');

const find = async () => {
    try {
        const tasks = await db('tasks as t')
        .innerJoin('projects as p', 't.project_id', 'p.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_id', 'p.project_name', 'p.project_description');

        tasks.map(task => {
            task.task_completed = !task.task_completed ? false : true;
            return task;
        });
        return tasks;
    } catch (err) {
        return err;
    }    
}

const add = async (task) => {
    try {
        const id = await db('tasks').insert(task);
        const newTask = await db('tasks').where({task_id: id}).first();
        newTask.task_completed = !newTask.task_completed ? false : true;
        return newTask;
    } catch (err) {
        return {status: 400, message: "There was an error inserting new resource"}
    }
    
}

module.exports = {
    find,
    add
}
