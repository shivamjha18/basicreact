import React from "react";
import { useState } from "react";

export default function StateHook(){
    const[changeColor,setChangeColor]=useState("black")
    const changecolor=()=>{
        setChangeColor(changeColor ==="black"? "red":"black")
        
        
    }

return(
    <div className="center">
        <button onClick={changecolor}>changecolor</button>
        <h2 style={{color:changeColor}}>shivam jha</h2>

    </div>
)

    // const[showText,setShowText]=useState(true)
    // const showhide=()=>{
    //     setShowText(!showText)
    // }

    // return(
    //     <div className="center">
    //         <button onClick={showhide}>hide/show</button>
    //         {showText && <h1>shivam jha</h1>}

    //     </div>
    // )
    // const[inputValue,setInput]=useState("")

    // const handleChange=(event)=>{
    //     setInput(event.target.value)
    // }


    // return(
    //     <div className="center">
    //         <input type="text" onChange={handleChange} />
    //         {inputValue}

    //     </div>
    // )
    // const[age,setAge]=useState(0)
    // const incr=()=>{
    //     setAge(age+1)
    // }
    // return (
    //    <div className="center">
    //     <h2>{age}</h2>
    //     <button onClick={incr}>increase age</button>
        
    //    </div>
    // )
}