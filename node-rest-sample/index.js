const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use(function(req,res,next){
    console.log('Logging...');
    //next();
})

const courses = [
    {id:1, name:'Course 1'},
    {id:2, name:'Course 2'},
    {id:3, name:'Course 3'},
];

const port  = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));



