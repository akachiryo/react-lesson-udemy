import  {ChakraProvider } from "@chakra-ui/react"
import Todo from "./components/Todo"

const Example = () => {
  return (
    <>
    <chakraProvider>
      <Todo />
    </chakraProvider>
    </>
  );
};

export default Example;
