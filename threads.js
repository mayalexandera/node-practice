process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require('crypto')



const start = Date.now()



crypto.pbkdf2('a', 'b', 100000, 512, 'sha256', () => {
  console.log('1:', Date.now() - start);

})

crypto.pbkdf2("a", "b", 100000, 512, "sha256", () => {
  console.log("2:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha256", () => {
  console.log("2:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha256", () => {
  console.log("2:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha256", () => {
  console.log("2:", Date.now() - start);
});