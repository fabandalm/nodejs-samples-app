const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Hello');
});

router.get('/api/courses',(req,res) =>{
    res.send(courses);
});

router.get('/api/courses/:id',(req,res) =>{
    const course = courses.find( c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The Course with the given ID was not found');
    res.send(course);
});

router.post('/api/courses',(req,res) =>{
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    console.log(req.body.name);
    courses.push(course);
    res.send(course);
});

module.exports = router;