const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.argv[2]; //for this application, ports should be 9000 and 9001

if (!PORT) {
    return console.log('please provide the port number');
};

app.get('/', (req, res) => {
    console.log('req from socket ip:', req.socket.remoteAddress);
    console.log('got a req on server on port:', PORT);
    res.status(200).json({
        PORT
    });
});

app.listen(PORT, () => {
    console.log('server is up on http://127.0.0.1:' + PORT);
});