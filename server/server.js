import express from 'express';
import dotenv from "dotenv";
dotenv.config();

const app = express();

const server = app.listen(process.env.port || 3000,
    () => {console.log(`Started server on http://localhost:3000:${server.address().port}`);

    });
