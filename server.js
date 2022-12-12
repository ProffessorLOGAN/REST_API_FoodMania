const express = require('express');
const app = express();
import cors from 'cors';
import mongoose from 'mongoose';
const { APP_PORT, DB_URL } = require('./config');
import routes from './routes';
import errorHandler from './middleware/errorHandler';
import path from 'path';




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

global.appRoot = path.resolve(__dirname);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', routes);
// app.use('/uploads', express.static('uploads'));
app.get('/', (req, res) => {
    res.send('hello world')
});


app.use(errorHandler);
const PORT = process.env.PORT || APP_PORT;
app.listen(3000, () => {
    console.log(`listening on port ${PORT}`);
});