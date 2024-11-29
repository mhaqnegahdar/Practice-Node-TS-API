import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';

// SERVER

export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAE;
export const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 8000;

export const SERVER = {
    SERVER_HOSTNAME,
    SERVER_PORT
};

// DATABASE

export const MONGO_URI = process.env.MONGO_URI || '';
export const MONGO_USER = process.env.MONGO_USER || '';
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
export const MONGO_DATABASE = process.env.MONGO_DATABASE || '';
export const MONGO_OPTIONS: mongoose.ConnectOptions = {
    retryWrites: true,
    w: 'majority',
    appName: 'MohamadHaqnegahdar'
};
export const MONGO_CONNECTION = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_URI}.mongodb.net/${MONGO_DATABASE}`;

export const MONGO = {
    MONGO_OPTIONS,
    MONGO_DATABASE,
    MONGO_PASSWORD,
    MONGO_USER,
    MONGO_URI,
    MONGO_CONNECTION
};
