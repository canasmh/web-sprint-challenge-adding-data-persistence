// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const taskModel = require('./model');

router.get('/', async (req, res) => {
    const task = await taskModel.find();

    res.send(task).json();
});

router.post('/', async (req, res) => {
    const task = await taskModel.add(req.body);
    if (task.status) {
        res.sendStatus(task.status)
    } else {
        res.send(task).json();
    }
    
});

module.exports = router;
