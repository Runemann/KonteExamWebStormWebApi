import express from 'express';
import * as path from 'path';
import dotenv from "dotenv";


// Load environment variables from .env file.
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "dist" directory.
const staticFolderPath = path.resolve("../dist");
app.use(express.static(staticFolderPath));

// API routes
app.get("/api/login", (req, res) => {
    res.json({
        username: "admin",
        fullname: "Bossy",
    });
});


// Catch-all route
app.get('*', (req, res) => {
    res.sendFile(path.join(staticFolderPath, "index.html"));
});

// Global error handler - This catches any other errors.
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Started server on http://localhost:${server.address().port}`);
});

// Shut down the server on process termination.
process.on('SIGINT', () => {
    console.log('Shutting down server...');
    server.close(() => {
        console.log('Server shut down.');
        process.exit(0);
    });
});
