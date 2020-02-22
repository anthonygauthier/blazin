import { serve, serveTLS } from "https://deno.land/std/http/server.ts";
import { Router } from "./core/Router.ts"
import { Logger } from "./core/Logger.ts"

export class Blazin {
    private port: number;
    private server: any;
    public router: Router;

    constructor(prt: number, scheme: string = "http", options: any = {}) {
        this.port = prt;
        this.server = (scheme != "https") ? serve({port: this.port}) : serveTLS(options);
        this.router = new Router(this.server);
        Logger.info(`Blazin fast server started on ${scheme}://${this.server.listener.addr.hostname}:${this.port}`)
    }
}