
const express = require('express');
const dotenv = require('dotenv');
const connected = require('./db');
const router = require('./route/foodroute');

dotenv.config();
const app = express();
app.use(express.json());

connected();

app.use('/food', router);

const port = process.env.PORT || 1005;

app.listen(port, () => {
    console.log(`server run on ${port}`);
})

