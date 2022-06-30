const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connect } = require('./services/dbConnect.js');

//routes
const userRoute = require('./routes/users.js');
const postRoute = require('./routes/posts.js');
const commentsRoute = require('./routes/comments.js');


const app = express();
dotenv.config()

//middleware
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/comments', commentsRoute);


//to handle errors
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    connect();
    console.log(`Server is running on port ${PORT}`);
})