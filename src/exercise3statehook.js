import React, { useState } from "react";
import { useEffect } from "react";

export default function Exercise3(){
    const[count,setCount]=useState(0);
    const incr=()=>{
        setCount(count+1);
    }
    const decr=()=>{
        setCount(count-1);
    }
    const zero=()=>{
        setCount(0);
    }

    return (
        <div className="center">
            <button onClick={incr}>increment</button>
            <button onClick={decr}>decrement</button>
            <button onClick={zero}>settozero</button>
            {count}

        </div>
    )
}