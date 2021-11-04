require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// app instance
const app = express();
const port =  8000

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api", require("./route/route"))



// DB Connection
mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(res => console.log("Db is Connected"))
    .catch(err => console.log(err.message));





app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})
