const Example = () => {
  const clickHandler = () => {
    alert('クリックされたよ');
  }
  const clickHandler2 = () => {
    console.log('クリックされたよ')
  }
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;
