import React from "react";
import { useContext } from "react";
import { AppContext } from "./router";

export default function Home(){
    const {username}=useContext(AppContext);
    return(
        <div>
            <h1>this is home page and user is {username}</h1>
        </div>
    )
}