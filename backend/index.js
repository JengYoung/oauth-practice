import dotenv from 'dotenv';
dotenv.config();

import morgan from 'morgan';
import express from 'express';

import routes from './routes/index.js'

const PORT = process.env.PORT || '🥰😡🥲😵‍💫';

const app = express();

app
    .use('/', routes)
    .use(morgan('dev'));


app.listen(PORT, () => {
    console.log(`Listening Server to ${PORT}`)
})