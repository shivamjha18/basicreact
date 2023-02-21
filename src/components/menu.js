import React, { useContext } from "react";
import ChangeProfile from "./changeprofile";
import { AppContext } from "./router";

export default function Menu(){
    const {username}=useContext(AppContext)
    return(
        <div>
            <h1>profile name is :{username}</h1>
            <ChangeProfile/>
        </div>
    )
}