import { Route } from "./Route.ts";
import { Response } from "./Response.ts";
import { Middleware } from "./Middleware.ts";
import { Logger } from "./Logger.ts"

export class Router {
    private server: any;
    private routes: Route[];
    public middlewares: Middleware[]

    constructor (server?: any) {
        this.server = server;
        this.routes = new Array<Route>();
        this.middlewares = new Array<Middleware>();
    }
    
    public get(uri: string, fn: (req: Response) => any): void {
        this.routes.push(new Route(uri, "GET", fn));
    }


    public post(uri: string, fn: (req: Response) => any): void {
        this.routes.push(new Route(uri, "POST", fn));
    }


    public put(uri: string, fn: (req: Response) => any): void {
        this.routes.push(new Route(uri, "PUT", fn));
    }


    public head(uri: string, fn: (req: Response) => any): void {
        this.routes.push(new Route(uri, "HEAD", fn));
    }


    public delete(uri: string, fn: (req: Response) => any): void {
        this.routes.push(new Route(uri, "DELETE", fn));
    }


    public connect(uri: string, fn: (req: Response) => any): void {
        this.routes.push(new Route(uri, "CONNECT", fn));
    }


    public options(uri: string, fn: (req: Response) => any): void {
        this.routes.push(new Route(uri, "OPTIONS", fn));
    }


    public trace(uri: string, fn: (req: Response) => any): void {
        this.routes.push(new Route(uri, "TRACE", fn));
    }


    public patch(uri: string, fn: (req: Response) => any): void {
        this.routes.push(new Route(uri, "GET", fn));
    }
    
    public favicon(): void {
        Logger.warn("You might want to implement the method Router.favicon()");
    }
    
    public notfound(res: any): void {
        res.status(404).send({
            "description": "page not found",
            "status": 404
        });
    }

    public getRoutes(): Route[] {
        return this.routes;
    }

    public mergeRouter(router: Router): void {
        if (router && router instanceof Router) {
            for (const route of router.getRoutes()) {
                this.routes.push(route);
            }
        }
    }
}