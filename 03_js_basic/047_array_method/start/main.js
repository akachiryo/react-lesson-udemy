const arry = [10, 20, 30, 40];
const newArry = [];

for(let i = 0;i<arry.length;i++) {
  const val = arry[i] * 2;

  if(val > 50) {
    newArry.push(arry[i] * 2);
  } 
}

console.log(newArry)

const newArry2 = arry.map((val, i, arry) => {
  console.log(val, i, arry);
  return val * 3
}).filter(val => val > 50);

const newArry3 = newArry2.map(val => val * 2)

console.log(newArry2);
console.log(newArry3)

