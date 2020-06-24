import http from 'http';
const path = require('path');
const fs = require('fs');

app.listen(process.env.PORT);

const server = http.createServer((req, res) => {

});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port);
server.listen(port, () => console.log(`Server running on port  ${port}`));