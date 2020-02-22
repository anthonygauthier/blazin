import { assertEquals, unimplemented } from "https://deno.land/std/testing/asserts.ts";
import { serve } from "https://deno.land/std/http/server.ts";
import { Router } from "../../core/Router.ts";

const server = serve({port: 4000});
const router = new Router(server);

Deno.test({
    name: "Testing Router construct",
    fn(): void {
        assertEquals(router instanceof Router, true);
    }
});

Deno.runTests()