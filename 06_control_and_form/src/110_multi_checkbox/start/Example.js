import { useState } from "react";

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const handleChange = (e) => {
    const newFruits = fruits.map((fruit) => {
      const newFruit = {...fruit};
      if(newFruit.label === e.target.value) {
        newFruit.checked = !newFruit.checked;
      }
      return newFruit;
    })

    setFruits(newFruits);
    let sum = 0;
    newFruits.forEach((fruit) => {
      if(fruit.checked) {
        sum += fruit.value;
      }});
      setSum(sum)
  }

  const [sum, setSum] = useState(0);

  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <>
          <div key={fruit.label}> 
            <input 
              id={fruit.label}
              type="checkbox"
              value={fruit.label}
              checked={fruit.checked}
              onChange={handleChange}
            />
            <label htmlFor={fruit.label}>{fruit.label}:{fruit.value}</label>
          </div>
          </>
        )
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
