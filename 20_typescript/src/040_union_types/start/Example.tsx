const Example = () => {
  // 練習用

  let strOrNum: string | number = 'Hello';
  strOrNum = 1
  strOrNum = 'a'

  type HelloOrNum = 'Hello' | number;
  const hello: HelloOrNum = 'Hello';

  type DayOfWeek = 
    |'Mon' 
    | 'Tue' 
    | 'Wed' 
    | 'Thu' 
    | 'Fri' 
    | 'Sat' 
    | 'Sun';
};

export default Example;
