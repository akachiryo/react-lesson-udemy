import "./Expression.css";

const Expression = () => {
  const title = "Expression";
  const arry = ["item-1", "item-2", "item-3"];
  const hello = (arg) => `${arg} Function`
  const jsx =<h3>Hello JSX</h3>

  console.log(jsx)
  return (
    <div className={title.toLowerCase()}>
      <h3>Hello {title}</h3>
      <h3>{arry}</h3>
      <h3>{hello(('hello'))}</h3>
      <h3>{/** 画面上に表示されません */}</h3>
      {<h3>Hello JSX</h3>}
      {jsx}
    </div>
  )
}

export default Expression;