// build your `Resource` model here
const db = require('../../data/dbConfig');

const find = async () => {
    const resources = await db('resources');

    return resources;
}

const add = async (resource) => {
    try {
        const id = await db('resources').insert(resource);
        const newResource = await db('resources').where({resource_id: id}).first();
        return newResource;
    } catch (err) {
        return {status: 400, message: "There was an error inserting new resource"}
    }
    
}

module.exports = {
    find,
    add
}
