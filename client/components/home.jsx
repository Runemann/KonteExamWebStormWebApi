import React from 'react';
import { Link } from 'react-router-dom';


export function Home() {
    return (
        <div>
            <h1>WorkSpace</h1>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/home">Velkommen til WorkSpace</Link></li>
                <li><Link to="/staff">Ansatt side</Link></li>
                <li><Link to="/admin">Admin side</Link></li>
            </ul>
        </div>
    );
}

export default Home;
