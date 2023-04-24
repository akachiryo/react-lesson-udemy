// import { useCounter } from "../context/CounterContext";
import { useSelector} from "react-redux";

const CounterResult = () => {
  // const state = useCounter();
  const state = useSelector(reducers => reducers.counter);
  return <h3>{state}</h3>;
};

export default CounterResult;