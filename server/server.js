import express from 'express';
import * as path from 'path';
import dotenv from "dotenv";
import * as fs from "fs";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

const server = app.listen(process.env.port || 3000,
    () => {console.log(`Started server on http://localhost:${server.address().port}`);

    });

app.get("/api/login", (req, res) => {
    res.json({
        username: "admin",
        fullname: "Bossy",
    });
});
// Static files middleware
app.use(express.static(path.resolve("../client/dist")));
app.use((req, res, next) => {
    const filePath = path.resolve("../client/dist", + req.path);
    if(fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        next();
    }
});



