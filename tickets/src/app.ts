import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { currentUser, errorHandLer, NotFoundError } from '@gstickets2023/common';
import { createTicketRouter } from './routes/new';
import { showTicketRouter } from './routes/show';
import { indexTicketRouter } from './routes';
import { updateTicketRouter } from './routes/update';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test' // Only through HTTPS connection, notice that JEST uses HTTP (must be set to false on test environment)
    })
)

app.use(currentUser);

// --- Routes ---
app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);

app.all('*', async () => { // All methods GET POST ...
    throw new NotFoundError();
});

app.use(errorHandLer);

export { app };