const encoder = new TextEncoder();

const greet = encoder.encode('hello world');

await Deno.writeFile('greet.txt', greet);
