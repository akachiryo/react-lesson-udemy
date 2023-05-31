const Example = () => {
  // 練習用
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  }

  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  }

  const numArray = repeat<string>("hello", 5);
  console.log(numArray);

  // const strArray = repeatStr('a', 5);
  // console.log(strArray);
};

export default Example;
