import { Express, RequestHandler } from 'express';

function Route(method: keyof Express, path: `/${string}`, middlewares: RequestHandler[] = []) {
    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
        const routePath = path;
        const routeHandlers = Reflect.getMetadata('routeHandlers', target) || new Map();

        if (!routeHandlers.has(method)) {
            routeHandlers.set(method, new Map());
        }

        routeHandlers.get(method)?.set(routePath, [...middlewares, descriptor.value]);

        Reflect.defineMetadata('routeHandlers', routeHandlers, target);
    };
}

export default Route;
