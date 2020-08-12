# blazin'
`blazin` is a [Deno](https://deno.land/) web application framework. It is built directly on top of the `std/http` core library.
It's syntax is inspired by Express.js.

## Features

The goal of `blazin` is obviously to be blazin' fast, but also be *hella* simple. With simplicity in mind,
`blazin` comes with :

* A `Router` component
* A simplified `Response` component
* A `Logger` to understand what's going on inside your server 
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
});

blazin.start();
```

## Performance benchmark

Simple `hello world` server:

See [benchmark.yaml](tests/performance/benchmark.yaml) for the test configuration

```text
Summary report @ 18:11:01(+0000) 2020-10-14
  Scenarios launched:  180
  Scenarios completed: 180
  Requests completed:  540
  Mean response/sec: 3.01
  Response time (msec):
    min: 0.2
    max: 50
    median: 0.5
    p95: 1
    p99: 7.9
  Scenario counts:
    0: 180 (100%)
  Codes:
    200: 540
```

## Contributing
To contribute, please refer to the [CONTRIBUTING.md](./CONTRIBUTING.md) file.

## License

MIT
