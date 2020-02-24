#!/bin/sh
set -e
clear
deno tests/unit/Middleware_Test.ts 
deno tests/unit/Response_Test.ts 
deno tests/unit/Route_Test.ts 
deno --allow-net tests/unit/Router_Test.ts 