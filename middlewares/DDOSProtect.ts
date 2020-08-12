import { Middleware } from '../core/Middleware.ts'

export function DDOSProtect(): Middleware {
    const middleware = new Middleware("DDOSProtect", () => {
        
    });
    return middleware;
}