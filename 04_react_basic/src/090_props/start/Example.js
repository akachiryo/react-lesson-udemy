import Child from "./components/Child";

const Example = () => {
  const hello = (arg) => {
    return `Hello ${arg}`
  }
  return (
    <>
      <Child num={123} />
      {/* <Child color="red"/> */}
    </>
  );
}

export default Example;
