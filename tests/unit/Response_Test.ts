import { assertEquals, unimplemented } from "https://deno.land/std/testing/asserts.ts";
import { ServerRequest } from "https://deno.land/std/http/server.ts"
import { Response } from "../../core/Response.ts";

const res = new Response(new ServerRequest());

Deno.test({
    name: "Testing Response construct",
    fn(): void {
        assertEquals(res instanceof Response, true);
    }
});

Deno.test({
    name: "Testing headers()",
    fn(): void {
        res.headers({
            "X-MyTest-Header": "test"
        });
        assertEquals(res.getHeaders().has("X-MyTest-Header"), true)
    }
});

Deno.test({
    name: "Testing status()",
    fn(): void {
        res.status(200);
        assertEquals(res.getStatus(), 200);
    }
});

Deno.runTests()