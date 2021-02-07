import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Blazin, Router } from "../../Blazin.ts";

const app = new Blazin(8000)

Deno.test({
    name: "Happy path for Blazin.use()",
    async fn(): Promise<any> {
        let testRouter = new Router();
        testRouter.get("/", (res) => {
            res.send("Hello world!");
        });
        app.start();
        assertEquals(app.use(testRouter), true);

        const response = await fetch('http://localhost:8000/');
        const data = await response.text();
        assertEquals(data, "Hello world!");
        app.stop();
    }
});

Deno.test({
    name: "Unhappy path for Blazin.use()",
    fn(): void {
        assertEquals(app.use(new String()), false)
    }
});