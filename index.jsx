import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("app"));

function Home(){
    return <div>
        <h1> WorkSpace </h1>
        <ul>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to="/home"></Link></li>
            <li><Link to="/staff"></Link></li>
        </ul>
    </div>
}


function Application(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/staff" element={<Staff/>}></Route>
        </Routes>
    </BrowserRouter>
}

root.render(
    <Application/>
);
