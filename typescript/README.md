npm install -g ts-nodenpm install -g typescript

Creating tsConfig.json →  tsc --init

tsc → convert all ts file to js file

create package.json using → npm init

to compile a single file → tsc src\index.ts --out out\index.js

to compile a project in tsc → tsc --project tsconfig.json (configure your tsConfig.json)

Ts file compiling to es5 js → tsc -t es5  src\index.ts --out out\index.js

Ts file compiling to es6 js → tsc -t es6  src\index.ts --out out\index.js
