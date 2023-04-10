import { useState } from "react";

const Example = () => {
  const [isChecked, setIsChecked] = useState(false);
const toggleChecked = () => {
  setIsChecked(prevent => !prevent);
}

  return (
    <div>
      <label htmlFor="123">
        チェック：
      </label>
      <input 
        type="checkbox"
        id="123"
        checked={isChecked}
        onChange={toggleChecked}
      />
      <p>{isChecked? "OK!": "NO!"}</p>
    </div>
  );
};

export default Example;
