import { NextFunction, Request, Response } from 'express';
import { Document, DeleteResult } from 'mongoose';

declare global {
    namespace Express {
        interface Request {
            mongoGet: Document | undefined;
            mongoGetAll: Document[];
            mongoInsert: Document | undefined;
            mongoSearch: Document[];
            mongoUpdate: Document | undefined;
            mongoDelete: DeleteResult | undefined;
        }
    }
}

export function declareHandler(req: Request, res: Response, next: NextFunction) {
    req.mongoGet = undefined;
    req.mongoGetAll = [];
    req.mongoInsert = undefined;
    req.mongoSearch = [];
    req.mongoUpdate = undefined;
    req.mongoDelete = undefined;

    next();
}
