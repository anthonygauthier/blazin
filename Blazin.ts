import { serve, serveTLS } from "https://deno.land/std/http/server.ts";
import { Router } from "./core/Router.ts"
import { Response } from "./core/Response.ts";
import { Logger } from "./core/Logger.ts"

export class Blazin {
    private port: number;
    private server: any;
    public router: Router;

    constructor(prt: number) {
        this.port = prt;
        this.server = null
        this.router = new Router(this.server);
    }

    private async handleRequests(): Promise<void> {
        try {
            for await (const req of this.server) {
                const res = new Response(req);
                const conn = res.request.conn.remoteAddr
                const route = this.router.getRoutes().find(route => route.getUri() == res.request.url && route.getHttpMethod() == res.request.method)

                // log request in server console
                Logger.info(`Path: ${res.request.url}  From: ${conn.transport}://${conn.hostname}:${conn.port}`)

                // fetch the favicon
                if(res.request.url === "/favicon.ico") {
                    this.router.favicon();
                // process the request if the route exists
                } else if (route) {
                    // execute the middlewares
                    for (const middleware of this.router.middlewares) {
                        middleware.function(res.request)
                    }
                    route.function(res)
                // send not found if route does not exist
                } else {
                    this.router.notfound(res)
                }
            }
        } catch (e) {
            console.error(e);
        }
    }

    public start(scheme: string = "http", options: any = {}): void {
        this.server = (scheme != "https") ? serve({port: this.port}) : serveTLS(options);
        this.handleRequests();
        Logger.info(`Blazin fast server started on ${scheme}://${this.server.listener.addr.hostname}:${this.port}`);
    }
};

export {
    Router
};