const Example = () => {
  // 練習用
  const arry1: number[] = [1, 2, 3];
  const arry2: string[] = ['a', 'b', 'c'];

  type Person = {id?: number, name: string};

  const obj: Person = {name: "hoge"}

  const users: Person[] = [
    {name: "Taro"},
    {name: 'Hanako'}
  ]
};

export default Example;
