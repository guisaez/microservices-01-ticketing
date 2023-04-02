import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { signInRouter } from './routes/signin';
import { signOutRouter } from './routes/signout';
import { signUpRouter } from './routes/signup';
import { errorHandLer, NotFoundError } from '@gstickets2023/common';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: false // Only through HTTPS connection, notice that JEST uses HTTP (must be set to false on test environment)
    })
)

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

export { app };