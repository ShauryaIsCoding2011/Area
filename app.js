const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home'); 
});

// Square
app.get('/square', (req, res) => {
    const squareData = {
        shape: 'Square',
        formula: 'Area = side * side',
        imagePath: '/images/square.jpg'
    };

    res.render('square', { data: squareData });
});

app.post('/calculate/square', (req, res) => {
    const sideLength = parseFloat(req.body.sideLength);
    const area = sideLength * sideLength;

    res.render('square', { data: { shape: 'Square', area } });
});

// Circle
app.get('/circle', (req, res) => {
    const circleData = {
        shape: 'Circle',
        formula: 'Area = π * radius * radius',
        imagePath: '/images/circle.jpg'
    };

    res.render('circle', { data: circleData });
});

app.post('/calculate/circle', (req, res) => {
    const radius = parseFloat(req.body.radius);
    var area = Math.PI * radius * radius;
    area =area.toFixed(2)
    res.render('circle', { data: { shape: 'Circle', area} });
});

// Rectangle
app.get('/rectangle', (req, res) => {
    const rectangleData = {
        shape: 'Rectangle',
        formula: 'Area = length * width',
        imagePath: '/images/rectangle.jpg'
    };

    res.render('rectangle', { data: rectangleData });
});

app.post('/calculate/rectangle', (req, res) => {
    const length = parseFloat(req.body.length);
    const width = parseFloat(req.body.width);
    const area = length * width;

    res.render('rectangle', { data: { shape: 'Rectangle', area } });
});

// Triangle
app.get('/triangle', (req, res) => {
    const triangleData = {
        shape: 'Triangle',
        formula: 'Area = 0.5 * base * height',
        imagePath: '/images/triangle.jpg'
    };

    res.render('triangle', { data: triangleData });
});

app.post('/calculate/triangle', (req, res) => {
    const base = parseFloat(req.body.base);
    const height = parseFloat(req.body.height);
    const area = 0.5 * base * height;

    res.render('triangle', { data: { shape: 'Triangle', area } });
});



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


