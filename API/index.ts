import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

router.get('/api', (ctx) => {
    ctx.response.body = 'API up and running';
});

const PORT = 5000;
console.log(`Server started on port ${ PORT }`);
await app.listen({ port: PORT });
