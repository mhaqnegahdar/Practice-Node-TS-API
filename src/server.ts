import http from 'http';
import express, { Request, Response } from 'express';
import './config/logging';
import 'reflect-metadata';

// Middlewares
import { loggingHandler } from './middlewares/loggingHandler';
import { corsHandler } from './middlewares/corsHandler';
import { routeNotFound } from './middlewares/routeNotFound';

//Constants
import { SERVER } from './config/config';
import defineRoutes from './modules/route';
import Test from './controllers/test';

export const application = express();
export let httpServer: ReturnType<typeof http.createServer>;

const Main = () => {
    logging.info('--------------------');
    logging.info('Initializing App');
    logging.info('--------------------');
    application.use(express.urlencoded({ extended: true })); //Parsing Request
    application.use(express.json());

    logging.info('--------------------');
    logging.info('Logging & Configuration');
    logging.info('--------------------');
    application.use(loggingHandler);
    application.use(corsHandler);

    logging.info('--------------------');
    logging.info('Define Controller Routing');
    logging.info('--------------------');

    defineRoutes([Test], application);

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
