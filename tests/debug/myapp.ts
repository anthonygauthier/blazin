import { Blazin } from "../../Blazin.ts";

const blazin = new Blazin(8000)

blazin.router.get("/", res => {
    res.status(200)
       .headers({"X-HelloWorld-Header": "hello-world"})
       .send({message: "Hello World!" })
})
