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


app.get('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedCourse = courses.find(c => c.id === id);
    res.send(selectedCourse)

})

const homeCourse = require('./data/home-course.json');

app.get('/home-course', (req, res) => {
    res.send(homeCourse);
})

const blog = require('./data/blog.json');
app.get('/blog', (req, res) => {
    res.send(blog);
})

const homeBlog = require('./data/home-blog.json');
app.get('/home-blog', (req, res) => {
    res.send(homeBlog);
})

app.listen(port, () => {
    console.log('Courses Server Running on POrt', port)
})