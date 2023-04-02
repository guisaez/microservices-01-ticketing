import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { currentUser, errorHandLer, NotFoundError } from '@gstickets2023/common';
import { newOrderRouter } from './routes/new';
import { showOrderRouter } from './routes/show';
import { deleteOrderRouter } from './routes/delete';
import { indexOrderRouter } from './routes/index';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: false // Only through HTTPS connection, notice that JEST uses HTTP (must be set to false on test environment)
    })
)

app.use(currentUser);

// --- Routes ---
app.use(newOrderRouter);
app.use(indexOrderRouter);
app.use(deleteOrderRouter);
app.use(showOrderRouter);

app.all('*', async () => { // All methods GET POST ...
    throw new NotFoundError();
});

app.use(errorHandLer);

export { app };