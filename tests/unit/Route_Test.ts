import { assertEquals, unimplemented } from "https://deno.land/std/testing/asserts.ts";
import { Route } from "../../core/Route.ts";

const route = new Route("/test", "GET");

Deno.test({
    name: "Testing Route construct",
    fn(): void {
        assertEquals(route instanceof Route, true);
    }
});

Deno.test({
    name: "Testing getUri()",
    fn(): void {
        assertEquals(route.getUri(), "/test")
    }
});

Deno.test({
    name: "Testing getHttpMethod()",
    fn(): void {
        assertEquals(route.getHttpMethod(), "GET");
    }
});

Deno.runTests()