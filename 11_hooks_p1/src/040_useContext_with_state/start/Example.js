import { createContext, useState } from "react";
import Child from "./components/Child";
import OtherChild from "./components/OtherChild";
export const MyContext = createContext();

const Example = () => {
  const aa = useState(0);
  return (
    <>

      <MyContext.Provider value={aa}>
        <Child />
        <OtherChild />
      </MyContext.Provider>
    </>
  );
};

export default Example;
