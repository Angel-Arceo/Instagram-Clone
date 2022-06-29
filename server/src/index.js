const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { fileUpload }= require('express-fileupload');
const { connect } = require('./services/dbConnect.js');

const app = express();
dotenv.config()

app.use(express.json());
app.use(fileUpload())
app.use(cors())

app.get('/', (request, response) => {
    response.send('Hello World');
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    connect();
    console.log(`Server is running on port ${PORT}`);
})