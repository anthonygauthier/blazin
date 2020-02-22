import { assertEquals, unimplemented } from "https://deno.land/std/testing/asserts.ts";
import { Router } from "../../core/Router.ts";

const router = new Router("/test", "GET");

Deno.test({
    name: "Testing Router construct",
    fn(): void {
        assertEquals(router instanceof Router, true);
    }
});

Deno.runTests()