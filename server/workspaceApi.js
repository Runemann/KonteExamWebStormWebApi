import express from "express";

const WorkspaceApi = express.Router();

WorkspaceApi.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Hans Hansen",
            occupation: "Rørlegger"
        },
        {
            id: 2,
            name: "Ole Olsen",
            occupation: "Elektriker"
        },
        {
            id: 3,
            name: "Kari Karlsen",
            occupation: "Tømrer"
        }
    ]);
});
