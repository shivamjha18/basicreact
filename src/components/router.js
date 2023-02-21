import React, { createContext, useState } from "react";
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Contact from "./contact";
import Home from "./home";
import Menu from "./menu";

export const AppContext=createContext();

export default function Router1(){
    const[username,setUserName]=useState("shivamjha");
    return(
        <div className="center">
            <AppContext.Provider value={{username,setUserName}}>
            <Router>
                <Link to="/">Home</Link>
                <Link to="/profile">profile</Link>
                <Link to="/contact">contact</Link>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Menu/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Routes>
            </Router>
        </AppContext.Provider>

        </div>
    )
}