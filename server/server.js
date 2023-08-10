import express from 'express';
import * as path from 'path';
import dotenv from "dotenv";
import * as fs from "fs";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT,
    () => {console.log(`Started server on http://localhost:${server.address().port}`);

    });

app.get("/api/login", (req, res) => {
    res.json({
        username: "admin",
        fullname: "Bossy",
    });
});

const staticFolderPath = path.resolve("../client/dist");
app.use(express.static(path.resolve(staticFolderPath)));

app.use(express.static(path.resolve("../client/dist")));

app.use((req, res, next) => {
   res.status(404).send("File not found");
});



