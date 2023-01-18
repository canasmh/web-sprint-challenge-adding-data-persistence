// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const projectModel = require('./model');

router.get('/', async (req, res) => {
    const projects = await projectModel.find();

    res.send(projects).json();
});

router.post('/', async (req, res) => {
    const project = await projectModel.add(req.body);
    if (project.status) {
        res.sendStatus(project.status)
    } else {
        res.send(project).json();
    }
    
});



module.exports = router;
