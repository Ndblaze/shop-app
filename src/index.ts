import express, { Application } from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import cors from 'cors';

import './controllers/RootController';
// import './controllers/AuthController';


const PORT = process.env.PORT || 5000;
// const publicPath

import { AppRouter } from './AppRouter';
import { connectDB } from './config/db';

// Load environment variables via config.env if in development mode

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

// Connect database
connectDB();

const app: Application = express();

// app.use(cors());
// app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(AppRouter.getInstance());

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(publicPath));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(publicPath, 'index.html'));
//     });
// }

const server = app.listen(process.env.PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`));

interface Error {
    message: string;
}
// Handle unhandled promise rejections
process.on('unhandledRejection', (err: Error, promise) => {
    console.error(err)
    console.log(`Error: ${err.message}`.red);
    // Close server and exit process
    server.close(() => process.exit(10));
});