import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);

  const changeName = (e) => {
    // setPerson({name: e.target.value, age: person.age});
    setPerson({ ...person , name: e.target.value});
  }
  const changeAge = (e) => {
    setPerson({...person, age: e.target.value})
  }
  const resetPerson = () => {
    setPerson({name: "", age: 0})
  }

  return (
    <>
      <h3>Name:{person.name}</h3>
      <h3>Age:{person.age}</h3>
      <input type="text" value={person.name} onChange={changeName}></input>
      <input type="number" value={person.age} onChange={changeAge}></input>
      <div>
        <button onClick={resetPerson}>リセット</button>
      </div>
    </>
  )
};

export default Example;
