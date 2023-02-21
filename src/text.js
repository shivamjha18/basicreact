import React from "react";
import { useState ,useEffect} from "react";

export default function Text(){
    const[text,setText]=useState("");

    return(
        <div className="center">
            <input onChange={(event)=>{
                setText(event.target.value);
            }}/>
            <h1>{text}</h1>
        </div>
    );
}