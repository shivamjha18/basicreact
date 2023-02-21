import { createContext, useContext, useState } from "react"
import { AppContext } from "../router"


export default function Profile(){
    const{setUserName}=useContext(AppContext);
    const[changeuser,setChangeUser]=useState("");
    function chng(){
        setUserName(changeuser);
    }
    return(
        <div>
           <input onChange={(event)=>{setChangeUser(event.target.value)}}/>
           <button onClick={chng}>click</button>
        </div>
    )
}