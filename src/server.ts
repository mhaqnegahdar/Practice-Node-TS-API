import http from 'http';
import express from 'express';
import mongoose from 'mongoose';
import './config/logging';
import 'reflect-metadata';

// Middlewares
import { loggingHandler } from './middlewares/loggingHandler';
import { corsHandler } from './middlewares/corsHandler';
import { routeNotFound } from './middlewares/routeNotFound';

//Constants
import { MONGO, SERVER } from './config/config';
import defineRoutes from './modules/route';
import Test from './controllers/test';
import { declareHandler } from './middlewares/declareHandler';
import Book from './controllers/book';

export const application = express();
export let httpServer: ReturnType<typeof http.createServer>;

const Main = () => {
    logging.info('--------------------');
    logging.info('Initializing App');
    logging.info('--------------------');
    application.use(express.urlencoded({ extended: true })); //Parsing Request
    application.use(express.json());

    logging.info('--------------------');
    logging.info('Database Connection');
    logging.info('--------------------');

    mongoose
        .connect(MONGO.MONGO_CONNECTION, MONGO.MONGO_OPTIONS)
        .then((connection) => {
            logging.info('--------------------');
            logging.info(`Connected to Mongo: ${connection.version}`);
            logging.info('--------------------');
        })
        .catch((error) => {
            logging.error('--------------------');
            logging.error(`Error Connecting to Mongo: ${error}`);
            logging.error('--------------------');
        });

    logging.info('--------------------');
    logging.info('Logging & Configuration');
    logging.info('--------------------');
    application.use(declareHandler);
    application.use(loggingHandler);
    application.use(corsHandler);

    logging.info('--------------------');
    logging.info('Define Controller Routing');
    logging.info('--------------------');

    defineRoutes([Test,Book], application);

    logging.info('--------------------');
    logging.info('404 Error');
    logging.info('--------------------');
    application.use(routeNotFound);

    logging.info('--------------------');
    logging.info('Start Server');
    logging.info('--------------------');
    httpServer = http.createServer(application);
    httpServer.listen(SERVER.SERVER_PORT, () => {
        logging.log('----------------------------------------');
        logging.log(`Server started on ${JSON.stringify(httpServer.address())}`);
        logging.log('----------------------------------------');
    });
};

export const ShutDown = (callback: any) => httpServer && httpServer.close(callback);

Main();
