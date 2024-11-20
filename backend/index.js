const express = require('express');
const app = express();
const port = 3000;
const mongoDB = require('./db');
mongoDB();

app.use(express.json());  // Place this middleware first

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001"); // Adjusted protocol
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', require('./Routes/CreateUser.js'));
app.use('/api', require('./Routes/DisplayData.js'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
