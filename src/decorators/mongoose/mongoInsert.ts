import { NextFunction, Request, Response } from 'express';
import { Model } from 'mongoose';

export function MongoInsert(model: Model<any>) {
    return function MethodDecorator(target: Object, propertyKey: string, descriptor: PropertyDescriptor): void {
        const originalMethod = descriptor.value;
        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            try {
                const document = await model.create(req.body);
                req.mongoInsert = document;
                logging.info(`------------------------ `);
                logging.info(`Creating `, model.modelName);
                logging.info(`------------------------ `);
            } catch (error) {
                logging.error(`------------------------ `);
                logging.error(`Unable to Create  `, model.modelName);
                logging.error(`Error: `, error);
                logging.error(`------------------------ `);
                res.status(500).json(error);
                return;
            }

            return originalMethod.call(this, req, res, next);
        };
    };
}
