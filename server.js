// Created by bhavyaagg on 2019-02-09
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send("Hello There"))

app.listen(4000, () => console.log("Server Listening on 4000"))