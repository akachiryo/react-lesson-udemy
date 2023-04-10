import { useState } from "react";


const Example = () => {
  const [val, setVal] = useState("");
  const clearVal = () => setVal("");
  return (
    <>
      <label htmlFor="123">ラベル</label>
      <input
        id="123"
        placeholder="こんにちは"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <br />
      <textarea
        id="123"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <p>{val}</p>
      <button onClick={clearVal}>クリア</button>
    </>
  );
};

export default Example;
