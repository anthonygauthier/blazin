import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Middleware } from "../../core/Middleware.ts";

const mw = new Middleware("test", () => {
    return "test";
});

Deno.test({
    name: "Testing Middleware construct",
    fn(): void {
        assertEquals(mw instanceof Middleware, true);
    }
});

Deno.test({
    name: "Testing getName()",
    fn(): void {
        assertEquals(mw.getName(), "test")
    }
});

// Deno.test({
//     name: "Testing fn()",
//     fn(): void {
//         assertEquals(mw.)
//     }
// })