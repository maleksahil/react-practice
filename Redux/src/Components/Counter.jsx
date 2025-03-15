//counter.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../Redux/CounterSlice";

const Counter = () =>{
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
            <button onClick={()=>dispatch(incrementByAmount(5))}>increment By 5</button>
        </div>
    )
}

export default Counter