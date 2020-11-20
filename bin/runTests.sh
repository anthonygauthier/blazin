#!/bin/sh
set -e
clear
deno test tests/unit/Middleware_Test.ts 
deno test tests/unit/Response_Test.ts 
deno test tests/unit/Route_Test.ts 
deno test --allow-net tests/unit/Router_Test.ts 
deno test --allow-net tests/unit/Blazin_Test.ts 