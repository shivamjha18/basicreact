import React, { useState } from "react";

export default function NewApi(){
    const[name,setName]=useState("");
    const[age,setAge]=useState(0);
    const fetchData=()=>{
        fetch('https://api.agify.io/?name=${name}').then((res)=>res.json()).then((data)=>{
            setAge(data.age);
        })
    }

    return (
        <div className="center">
            <input placeholder="Ex. shiv..." onChange={(event)=>{setName(event.target.value)}}/>
            <button onClick={fetchData}>predict age</button>
            <h1>predicted age of {name} is {age}</h1>
        </div>
    );
}