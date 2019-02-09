// Created by bhavyaagg on 2019-02-09
const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => res.send("Hello There"))

app.listen(PORT, () => console.log("Server Listening on 4000"))