function fn(number) {
  return number * 2;
}

console.log(fn(2));

const fnArrow = (number) => {
  return number * 2;
}

const fnArrow2 = number => number * 2;

console.log(fnArrow2(4))

const fnArrowObj = number => ({ result: number * 2})

console.log(fnArrowObj(2))