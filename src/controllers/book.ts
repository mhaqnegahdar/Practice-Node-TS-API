import { Request, Response } from 'express';
import Joi from 'joi';

// Models
import { BookModel } from '../models/book';

// Decorators
import Controller from '../decorators/controller';
import Route from '../decorators/route';
import Validate from '../decorators/validate';
import { MongoGetAll } from '../decorators/mongoose/mongoGetAll';
import { MongoGet } from '../decorators/mongoose/mongogetSingle';
import { MongoInsert } from '../decorators/mongoose/mongoInsert';
import { MongoSearch } from '../decorators/mongoose/mongoSearch';
import { MongoDelete } from '../decorators/mongoose/mongoDelete';
import { MongoUpdate } from '../decorators/mongoose/mongoUpdate';
import ValidateObjectId from '../decorators/validateObjectId';

const bookSchema = Joi.object({
    title: Joi.string().min(3).required(),

    author: Joi.string().min(3).required()
});

@Controller('/books')
class Book {
    @Route('get', '/')
    @MongoGetAll(BookModel)
    getBooks(req: Request, res: Response) {
        res.status(200).json(req.mongoGetAll);
    }

    @Route('get', '/:id')
    @ValidateObjectId
    @MongoGet(BookModel)
    getBook(req: Request, res: Response) {
        res.status(200).json(req.mongoGet);
    }

    @Route('post', '/search')
    @MongoSearch(BookModel)
    searchBooks(req: Request, res: Response) {
        res.status(200).json(req.mongoSearch);
    }

    @Route('post', '/')
    @MongoInsert(BookModel)
    @Validate(bookSchema)
    insertBook(req: Request, res: Response) {
        res.status(200).json(req.mongoInsert);
    }

    @Route('put', '/:id')
    @ValidateObjectId
    @MongoUpdate(BookModel)
    updateBook(req: Request, res: Response) {
        res.status(200).json(req.mongoUpdate);
    }

    @Route('delete', '/:id')
    @ValidateObjectId
    @MongoDelete(BookModel)
    deleteBook(req: Request, res: Response) {
        res.status(200).json(req.mongoDelete);
    }
}

export default Book;
