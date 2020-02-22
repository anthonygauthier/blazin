import { Route } from "./Route.ts";
import { Response } from "./Response.ts";
import { Middleware } from "./Middleware.ts";
import { Logger } from "./Logger.ts"

export class Router {
    private server: any;
    private routes: Route[];
    public middlewares: Middleware[]

    constructor (server: any) {
        this.server = server;
        this.routes = new Array<Route>();
        this.middlewares = new Array<Middleware>();
    }
    
    public get(uri: string, fn: (req: Response) => any) {
        this.routes.push(new Route(uri, "GET"));
        this.handleRequests(fn);
    }


    public post(uri: string, fn: (req: Response) => any) {
        this.routes.push(new Route(uri, "POST"));
        this.handleRequests(fn);
    }


    public put(uri: string, fn: (req: Response) => any) {
        this.routes.push(new Route(uri, "PUT"));
        this.handleRequests(fn);
    }


    public head(uri: string, fn: (req: Response) => any) {
        this.routes.push(new Route(uri, "HEAD"));
        this.handleRequests(fn);
    }


    public delete(uri: string, fn: (req: Response) => any) {
        this.routes.push(new Route(uri, "DELETE"));
        this.handleRequests(fn);
    }


    public connect(uri: string, fn: (req: Response) => any) {
        this.routes.push(new Route(uri, "CONNECT"));
        this.handleRequests(fn);
    }


    public options(uri: string, fn: (req: Response) => any) {
        this.routes.push(new Route(uri, "OPTIONS"));
        this.handleRequests(fn);
    }


    public trace(uri: string, fn: (req: Response) => any) {
        this.routes.push(new Route(uri, "TRACE"));
        this.handleRequests(fn);
    }


    public patch(uri: string, fn: (req: Response) => any) {
        this.routes.push(new Route(uri, "GET"));
        this.handleRequests(fn);
    }
    
    public favicon() {
        Logger.warn("You might want to implement the method Router.favicon()");
    }
    
    public notfound(res: any) {
        res.status(404).send({
            "description": "page not found",
            "status": 404
        });
    }

    private async handleRequests(fn: any) {
        try {
            for await (const req of this.server) {
                const res = new Response(req);
                const conn = res.request.conn.remoteAddr
                // log request in server console
                Logger.info(`Path: ${res.request.url}  From: ${conn.transport}://${conn.hostname}:${conn.port}`)

                // fetch the favicon
                if(res.request.url === "/favicon.ico") {
                    this.favicon();
                // process the request if the route exists
                } else if (this.routes.find(route => route.getUri() == res.request.url && route.getHttpMethod() == res.request.method)) {
                    // execute the middlewares
                    for (const middleware of this.middlewares) {
                        middleware.function(req)
                    }
                    fn(res)
                // send not found if route does not exist
                } else {
                    this.notfound(res)
                }
            }
        } catch (e) {
            console.error(e);
        }
    }
}