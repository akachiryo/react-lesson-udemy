import { useSelecter} from "react-redux"
import { add, minus, addAsync } from "../store/modules/counter"


import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"

const Counter = () => {
    const status = useSelecter(state => state.counter.status)
    return (
        <>
            <CounterResult />
            <CounterButton step={2} calcType="+" actionCreater={add}/>
            <CounterButton step={2} calcType="-" actionCreater={minus}/>
            <CounterButton step={10} calcType="+" actionCreater={addAsync}/>
            <h3>{status}</h3>
        </>
    )
}
export default Counter;