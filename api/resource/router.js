// build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const resourceModel = require('./model');

router.get('/', async (req, res) => {
    const resources = await resourceModel.find();

    res.send(resources).json();
});

router.post('/', async (req, res) => {
    const resource = await resourceModel.add(req.body);
    if (resource.status) {
        res.sendStatus(resource.status)
    } else {
        res.send(resource).json();
    }
    
});

module.exports = router;
