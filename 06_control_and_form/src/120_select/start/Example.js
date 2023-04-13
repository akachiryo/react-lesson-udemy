import { useState } from 'react';

const Example = () => {
  const [selected, setSelected] = useState('Apple')
  const OPTIONS = ['Apple', 'Banana', 'Cherry']

  return (
    <>
      <select 
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {OPTIONS.map((val) => {
          return (
            <option key={val} value={val}>{val}</option>
          )
        })}
      </select>
      <p>選択された果物：{selected}</p>
    </>
  );
};

export default Example;
