import React, { useState } from "react";

export function Admin() {
    return (
        <div>
            <h1>Admin Page</h1>
            <AddNewEmployee />
        </div>
    );
}

function AddNewEmployee() {
    return (
        <div>
            <h2>Add New Employee</h2>
            <Dropdown />
        </div>
    );
}

function Dropdown() {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <select value={selectedValue} onChange={handleChange}>
                <option value="plumber">Rørlegger</option>
                <option value="electrician">Elektriker</option>
                <option value="carpenter">Snekker</option>
                <option value="painter">Maler</option>
            </select>

            {selectedValue && <p>Du valgte: {selectedValue}</p>}
        </div>
    );
}

export default Admin;


