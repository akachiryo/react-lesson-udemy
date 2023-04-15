
const Child = () => {
  let value = 0;
  value++;
  return <div>{value}</div>
}
const Example = () => {

  return (
    <>
    <Child />
    <Child />
    <Child />
    </>
  );
};

export default Example;
