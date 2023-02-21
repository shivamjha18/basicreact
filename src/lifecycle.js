import React from "react";
import { useState,useEffect } from "react";
import Text from './text';

export default function Cycle(){

    const[showText,setShowText]=useState(false);

    useEffect(()=>{
        console.log("component mounted");

        return()=>{
            console.log("unmounted");
        }
    },[]);

    return(
        <div className="center">
            <button onClick={()=>{setShowText(!showText);}}>
                show text

            </button>
           { showText && <Text/>}
        </div>
    )
}
