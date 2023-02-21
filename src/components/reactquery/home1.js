// import React, { useContext } from "react";
// import { useState,createContext} from "react";
// import Profile from "./profile";

// export const AppContext=createContext();

// export default function Home1(){
//     const[value,setValue]=useState(0);
//     function clickMe(){
//         setValue(value+1);
//     }

//     const[username,setUserName]=useState("shivamJha")



//     return(
//         <div>
            
//             <AppContext.Provider value={{username,setUserName}}>
//             <h1>this is home page</h1>
//             <button onClick={clickMe}>click me</button>
//             <p>{value}</p>
//             <p>{username}</p>
            
//             </AppContext.Provider>
            

//         </div>
//     )
// }

import { useQuery } from "@tanstack/react-query";
import Axious from "axios"
import { useState } from "react";

export const Home1=()=>{
    const[takedata,setTakeData]=useState("");
    const{data,isLoading,refetch}=useQuery(["cat"],()=>{
        return fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{
            setTakeData(data.fact);
        });
    });
    if(isLoading){
        return<h1>loading..</h1>
    }
    return(
        <div>
        <h1>{takedata}</h1>
        <button onClick={refetch}>next</button>
        </div>

    )
}