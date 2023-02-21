import React from "react";
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Contact from "./contact";
import {Home1} from "./home1";
import Profile from "./profile";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";



export default function Home(){
    const client=new QueryClient();
    return(
        <div className="center">
            <QueryClientProvider client={client}>
            <Router>
                <Link to="/">Home</Link>
                <Link to="/profile">profile</Link>
                <Link to="/contact">contact</Link>
                <Routes>
                    <Route path="/" element={<Home1/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/profile" element={<Profile/>} />

                    
                </Routes>
            </Router>
            </QueryClientProvider>
            


        </div>
    )
}