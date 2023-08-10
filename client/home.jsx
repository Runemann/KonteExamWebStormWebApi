import * as react from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {Home} from "../index";

export function Application(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/staff" element={<Staff/>}></Route>
        </Routes>
    </BrowserRouter>
}

export function Home(){
    return <div>
        <h1> WorkSpace </h1>
        <ul>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to="/home"></Link></li>
            <li><Link to="/staff"></Link></li>
        </ul>
    </div>
}
