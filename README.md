# blazin'
`blazin` is a [Deno](https://deno.land/) web application framework. It is built directly on top of the `std/http` core library.
It's syntax is inspired by Express.js.

## Features

The goal of `blazin` is obviously to be blazin' fast, but also be *hella* simple. With simplicity in mind,
`blazin` comes with :

* A `Router` component
* A simplified `Response` component
* A `Logger` to understand what"s going on inside your server 
* Support for middlewares with the `Middleware` component

## Example: hello world
Here is the simplest implementation of a hello-world in `blazin`

```typescript
import { Blazin } from "https://raw.githubusercontent.com/delirius325/blazin/master/Blazin.ts";

const blazin = new Blazin(8000)

blazin.router.get("/", res => {
    res.status(200)
       .headers({"X-HelloWorld-Header": "hello-world"})
       .send({message: "Hello World!" })
})
```

## Known issues

- [ ] Refactor the way requests are handled
- [ ] Add more unit tests in `Router_Test.ts`

... More to come ... :wink:

## Contributing
To contribute, please refer to the [CONTRIBUTING.md](./CONTRIBUTING.md) file.

## License

MIT
