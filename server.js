const express = require('express');
const { APP_PORT } = require('./config');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world')
});


app.use(errorHandler);
const PORT = process.env.PORT || APP_PORT;
app.listen(3000, () => {
    console.log(`listening on port ${PORT}`);
});