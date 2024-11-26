import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

function Validate(schema: Joi.ObjectSchema) {
    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            try {
                await schema.validateAsync(req.body);
            } catch (error) {
                logging.error(error);
                res.status(422).json(error);
                return;
            }

            return originalMethod.call(this, req, res, next);
        };
    };
}

export default Validate;
