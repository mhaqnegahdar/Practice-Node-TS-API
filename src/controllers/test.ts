import { Request, Response } from 'express';

// Decorators
import Controller from '../decorators/controller';
import Route from '../decorators/route';

@Controller('/test')
class Test {
    @Route('get', '/get')
    getTest(req: Request, res: Response) {
        res.status(200).json({ message: 'Test Route Is Working :)' });
    }
}

export default Test;
