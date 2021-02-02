import {serve} from 'https://deno.land/std/http/server.ts'

const PORT = 5000;
const server = serve({port: PORT});
console.log(`Server started on port ${PORT}`);
for await (const req of server) {
    req.respond({body: 'hello worlds'});
}
