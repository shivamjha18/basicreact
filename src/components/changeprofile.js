import React, { useContext, useState } from "react";
import { AppContext } from "./router";

export default function ChangeProfile(){
    const{setUserName}=useContext(AppContext);
    const[changeuser,setChangeUser]=useState("");
    
    
    const chng=()=>{
       setUserName(changeuser);
    }
    return(
        
        <div>
            <input onChange={(event)=>{setChangeUser(event.target.value)}}/>
           <button onClick={chng}>change username</button>
           
        </div>
    )
}