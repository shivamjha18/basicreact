import React, { useState,useEffect } from "react";
import { Axios } from "axios";
import apnaapi from './apnaapi.json';



export default function Api(){


    const[catFact,setCatFact]=useState("");

    const fetchCat=()=>{
        fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{
        setCatFact(data.fact);
    });
    }

    // function JsonDataDisplay(){
    //     const DisplayData=apnaapi.map(
    //         (info)=>{
    //             return(
    //                 <tr>
                        
    //                     <td>{info.name}</td>
    //                     <td>{info.age}</td>
    //                 </tr>
    //             )
    //         }
    //     )
    // }

    

//     useEffect(()=>{
//         fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{
//         setCatFact(data.fact);
//     });
// },[])
//     fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{
//         setCatFact(data.fact);
// });

// useEffect(()=>{
//     Axios.get("https://catfact.ninja/fact")
//     .then((res)=> {setCatFact(res.data.fact)})
//     .catch((error) => console.error(error))
// },[])

// Axios.get("https://catfact.ninja/fact").then((res)=>{
//     setCatFact(res.fact);
// });
    return(
        <div className="center">
            <button onClick={fetchCat}>generate cat fact</button>
            <p>{catFact}</p>
           <h1>  {apnaapi.map((data,index)=>(
                 <h1 >{data.name} {data.age}</h1>
                
            ))}</h1>

            
        </div>
    )
}