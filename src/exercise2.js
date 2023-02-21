import React from "react";
export default function Exercise2(){
    const planets=[
        {name:"mars",isGas:false},
        {name:"jupitar",isGas:true},
        {name:"earth",isGas:true}
    ]
    return(
        <div className="center">
            {planets.map((planet,index)=>(
                 planet.isGas && <h1 >{planet.name}</h1>
            ))}

        </div>
    )

}