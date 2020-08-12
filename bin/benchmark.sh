#!/bin/sh

FLAGS="--allow-net"

deno run $FLAGS tests/debug/myapp.ts -l debug &
$(npm bin)/artillery run tests/performance/benchmark.yaml