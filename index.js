const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const server = http.Server(app);

// app.listen(process.env.PORT);

// const server = http.createServer((req, res) => {
// });

// let port = process.env.PORT;
// if (port == null || port == "") {
//     port = 5000;
// }

server.listen(port, () => console.log(`Server running on port  ${port}`));