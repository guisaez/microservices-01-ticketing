import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoose from 'mongoose';

import { currentUserRouter } from './routes/current-user';
import { signInRouter } from './routes/signin';
import { signOutRouter } from './routes/signout';
import { signUpRouter } from './routes/signup';
import { errorHandLer } from './middleware/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());

// --- Routes ---

// -- Auth --
app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);


app.all('*', async () => { // All methods GET POST ...
    throw new NotFoundError();
});

app.use(errorHandLer);

const start = async () => {

    try{
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
        console.log('Connected to MongoDB');
    }
    catch (err) {
        console.error(err);
    }

    app.listen(3000, () => {
        console.log("Auth Server Listening on Port: 3000")
    });
}

start();


