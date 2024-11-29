import { NextFunction, Request, Response } from 'express';
import { Model } from 'mongoose';

export function MongoGetAll(model: Model<any>) {
    return function MethodDecorator(target: Object, propertyKey: string, descriptor: PropertyDescriptor): void {
        const originalMethod = descriptor.value;
        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            try {
                const documents = await model.find();
                req.mongoGetAll = documents;
                logging.info(`------------------------ `);
                logging.info(`Getting All `, model.modelName, `s`);
                logging.info(`------------------------ `);
            } catch (error) {
                logging.error(`------------------------ `);
                logging.error(`Unable to Get All `, model.modelName, `s`);
                logging.error(`Error: `, error);
                logging.error(`------------------------ `);
                res.status(500).json(error);
                return;
            }

            return originalMethod.call(this, req, res, next);
        };
    };
}
