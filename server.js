const express = require('express');
const app = express();
import cors from 'cors';
import mongoose from 'mongoose';
const { APP_PORT, DB_URL } = require('./config');
import errorHandler from './middleware/errorHandler';




//Database Connection
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('database connected successfully... ');
});

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('hello world')
});


app.use(errorHandler);
const PORT = process.env.PORT || APP_PORT;
app.listen(3000, () => {
    console.log(`listening on port ${PORT}`);
});