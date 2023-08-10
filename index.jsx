import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Application} from "./client/home.jsx";
import Dropdown from "./client/components/dropdown.js";
import {Login} from "./client/components/login.jsx";

const root = ReactDOM.createRoot(document.getElementById("app"));

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

export function Dropdown() {
    return
        <div>
            <h1>Dropdown</h1>
            <Dropdown/>
        </div>;

}

async function fetchJSON(url) {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
        ${res.statusText};`)
        }
        return wait res.json();
    }

function useLoader(loadingFunction) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [data, setData] = useState();
    
    async function load() {
        try {
            setLoading(true);
            setData(await loadingFunction());
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }
}


root.render(
    <Application/>
);
