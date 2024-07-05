import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";

const MOVIES = [
    {
        title: "Plan 9 from outer space",
        year: 1957,
        synopsis: "A complete mes, but Bela Lugosi is in it"

    },
{
    title: "Dune",
        year: 2021,
    synopsis: "The spice must flow"
}
];

 // Define the FrontPage component
function FrontPage() {
    return (
        <div>
            <h1>Welcome to the Front Page!</h1>
        <ul>
            <li><Link to="/movies"> List Movies </Link></li>
            <li><Link to="/movies/new"> New Movie </Link> </li>
        </ul>
    </div>
);
}

// Define the MoviesPage component
function MoviesPage() {
    return <div>List of Movies</div>;
}

// Define the NewMoviePage component
function NewMoviePage() {
        return <div>New Movie</div>;
    }
// Should create a new movie on entry
    function AddMovie({onAddMovie}){
        const [title, setTitle] = React.useState("");
        const [year, setYear] = React.useState("");
        const [synopsis, setSynopsis] = React.useState("");

        const navigate = useNavigate();

        function handleSubmit(e){
            e.preventDefault();
            onAddMovie.push({title, year, synopsis});
            console.log(MOVIES);
            navigate("/");

        }

        return(
            <form onSubmit={handleSubmit}>
                <h1> New movie details</h1>
                <div>
                    <label> Title: <input value={title} onChange={e =>setTitle(e.target.value)}/> </label>
                </div>
                <div>
                    <label> Year: <input value={year} onChange={e =>setYear(e.target.value)}/> </label>
                </div>
                <div>
                    <label> Synopsis: <input value={synopsis} onChange={e => setSynopsis(e.target.value)}/> </label>
                </div>
                <button>Submit</button>
            </form>
        );
    }

// Define the Application component with routing
function Application(){
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/movies" element={<ListMovies movies={MOVIES}/>} />
            <Route path="/movies/new" element={<AddMovie onAddMovie{m => MOVIES.push(m)}/>} />
        </Routes>
    </BrowserRouter>
    );
}

function ListMovies({movies}){
    return(
        <div>
            <h1> Listing all movies </h1>
            {
                movies.map( m =>
                <>
                <h2> {m.title} - {m.year}</h2>
                    <div>
                {m.synopsis}
                    </div>
                </>
            )
            }
                </div>
    )
}

// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(<Application />);

});