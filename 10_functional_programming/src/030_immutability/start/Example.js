const Example = () => {

  const num = { val: 2 };
  const double = (num) => {
    const newNum = { val: 0}
    newNum.val =  num.val * 2;
    return newNum;
  }
  const newNum = double(num);
  console.log(newNum);
  console.log(num)

  return (
    <>
      <h3>不変性（Immutability）</h3>
      <p>引数で渡ってきたオブジェクトを変更しない！</p>
    </>
  );
};

export default Example;
