import React, { useEffect, useState } from "react";

export default function Excuse(){
    const[emp,setEmp]=useState("");
    const party=()=>{
        useEffect(()=>{
            

        })
    }
    
    return(
        <div className="center">
            <button onClick={party}>party</button>
            <button onClick={family}>family</button>
            <button onClick={office}>office</button>
        </div>
    )
}