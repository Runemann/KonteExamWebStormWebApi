function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/staff" element={<Staff />} />
            </Routes>
        </BrowserRouter>
    );
}

const element = document.getElementById("app");
const root = createRoot(element);

root.render(
    <Application />
);
