import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Blazin, Router } from "../../Blazin.ts";

const app = new Blazin(8000)

Deno.test({
    name: "Happy path for Blazin.use()",
    fn(): void {
        let testRouter = new Router();
        testRouter.get("/", (res) => {
            res.send("Hello world!");
        });
        assertEquals(app.use(testRouter), true);
    }
});

Deno.test({
    name: "Unhappy path for Blazin.use()",
    fn(): void {
        assertEquals(app.use(new String()), false)
    }
});