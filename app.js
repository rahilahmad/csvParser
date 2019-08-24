const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const postRoutes = require('./Routes/posts');

app.use(bodyParser.json());
//app.use(cors);
app.use('/posts',postRoutes);

app.get('/', (req, res) => {
    res.send('we are home');
});




//connect database
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected to DB!')
)
app.listen(3000)