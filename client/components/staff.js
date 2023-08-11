export function Staff() {
    return (
        <div>
            <h1>Staff Page</h1>
            <AddHours />
        </div>
    );
}

function AddHours() {
    const [hours, setHours] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        // Your logic to add hours.
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Legg til arbeidstimer</label>
            <input type="text" value={hours} onChange={e => setHours(e.target.value)} />
            <input type="text" value={date} onChange={e => setDate(e.target.value)} />
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
            <button type="submit">Legg til</button>
        </form>
    );
}
