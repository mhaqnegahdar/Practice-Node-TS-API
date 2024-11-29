import { Request, Response } from 'express';
import Joi from 'joi';

// Decorators
import Controller from '../decorators/controller';
import Route from '../decorators/route';
import Validate from '../decorators/validate';

const testSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),

    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});

@Controller('/test')
class Test {
    @Route('get', '/get')
    getTest(req: Request, res: Response) {
        res.status(200).json({ message: 'Test Route Is Working :)' });
    }

    @Route('post', '/post')
    @Validate(testSchema)
    postTest(req: Request, res: Response) {
        res.status(200).json({ message: 'Post Test Route Is Working :)', body: req.body });
    }
}

export default Test;
