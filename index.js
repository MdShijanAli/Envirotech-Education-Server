const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Courses API Running');
})


const courses = require('./data/courses.json');

app.get('/courses', (req, res) => {
    res.send(courses);
})

const blog = require('./data/blog.json');
app.get('/blog', (req, res) => {
    res.send(blog);
})

app.listen(port, () => {
    console.log('Courses Server Running on POrt', port)
})