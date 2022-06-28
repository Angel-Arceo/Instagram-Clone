const express = require('express');
const { connect } = require('./mongo.js');
const dotenv = require('dotenv');

const app = express();
dotenv.config()

app.use(express.json());

app.get('/', (request, response) => {
    response.send('Hello World');
})

const PORT = 3001;
app.listen(PORT, () => {
    connect();
    console.log(`Server is running on port ${PORT}`);
})