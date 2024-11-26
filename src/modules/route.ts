import { Express } from 'express';
import { RouteHandler } from '../types/route';
function defineRoutes(controllers: any[], application: Express) {
    for (const controller of controllers) {
        const controllerInstance = new controller();

        const routeHandlers: RouteHandler = Reflect.getMetadata('routeHandlers', controllerInstance);
        const baseRoute = Reflect.getMetadata('baseRoute', controllerInstance.constructor);

        const methods = Array.from(routeHandlers.keys());

        for (const method of methods) {
            const routes = routeHandlers.get(method);

            if (routes)
                for (const route of Array.from(routes.keys())) {
                    const middlewares = routes.get(route);

                    if (middlewares) application[method](baseRoute + route, ...middlewares);
                }
        }
    }
}

export default defineRoutes;
