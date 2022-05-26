import express from "express";

const app = express();

app.get("/", (request, response) => response.json({ message: "hello word" }));

app.listen(3000);
