import { Blazin } from "../../Blazin.ts";

const blazin = new Blazin(8000)

blazin.router.get("/", res => {
    res.status(200)
       .headers({"X-HelloWorld-Header": "hello-world"})
       .send({message: "Hello World!" })
});

blazin.router.get("/test", res => {
    res.status(200)
       .headers({"X-HelloWorld-Header": "hello-world"})
       .send({message: "Test!" })
});

blazin.router.get("/test2", res => {
    res.status(200)
       .headers({"X-HelloWorld-Header": "hello-world"})
       .send({message: "Test2!" })
});

blazin.start();