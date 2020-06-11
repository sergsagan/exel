console.log('Module.js');

async function test() {
  return await Promise.resolve('async working');
}
test().then(console.log);