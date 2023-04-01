// 非同期処理
let a = 0;
console.log(a);

// setTimeout(() => {
//   a = 1;
// }, 2000);

// console.log(a);

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve(a)
    // reject(a)
  }, 2000);
}).then((a) => {
  console.log(a);
}).then(() => {
  console.log('then')
}).catch((a) => {
  console.log('catch', a)
})
