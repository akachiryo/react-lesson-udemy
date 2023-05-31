const Example = () => {
  // 練習用

  function sum1(x: number, y?: number) {
    // return x + y;
  }

  const res = sum1(1);
  console.log(res);

  const a ={}
  const sum2 = (x: number, y: number): void => console.log('AA')

  const res2 = sum2(1, 2);
  console.log('res2', res2);

  type Sum = (x: number, y: number) => number;
  const sum3: Sum = (x, y) => x + y;
};

export default Example;
