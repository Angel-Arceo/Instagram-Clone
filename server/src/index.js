const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connect } = require('./services/dbConnect.js');

//routes
const userRoute = require('./routes/users.js');


const app = express();
dotenv.config()

//middleware
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    connect();
    console.log(`Server is running on port ${PORT}`);
})