const express = require('express');
const app = express();
const config = require('./config');

app.use(express.static('./dist'));

app.listen(config.port, () => {
    console.log(`app listening on port ${config.port}`)
})