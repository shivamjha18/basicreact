import React, { useState } from "react";

export default function FirstApi(){
    const[showData,setShowData]=useState("");
    const showdata=()=>{
        fetch('https://api.nationalize.io/?name=${showData}').then((res)=>res.json()).then((data)=>{
            setShowData(data.country.country_id);
        })
    }

    return(
        <div className="center">
            <input placeholder="EX. shiv..." onChange={(event)=>{showData(event.target.value)}}/>
            <button onClick={showdata}>show data</button>
            <h2>{showData}</h2>


        </div>
    )
} 