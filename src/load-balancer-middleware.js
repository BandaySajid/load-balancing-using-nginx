const axios = require('axios');
const server1 = "http://127.0.0.1:9000";
const server2 = "http://127.0.0.1:9001";

let server1Reqs = 0;
let server2Reqs = 0;

async function sendRequest(req, res, serverUrl) {
    console.log('req from ip', req.socket.remoteAddress);
    const resp = await axios.get(`${serverUrl}${req.url}`, {
        headers: req.headers
    });

    res.status(resp.status).send(resp.data);
}

async function check(req, res) {
    try {
        if (server1Reqs < server2Reqs) {
            server1Reqs++;
            console.log('sending this req to server on port', server1);
            await sendRequest(req, res, server1);

        }
        else if (server2Reqs < server1Reqs) {
            server2Reqs++;
            console.log('sending this req to server on port', server2);
            await sendRequest(req, res, server2);
        }
        else {
            server1Reqs++;
            console.log('sending this req to server on port', server1);
            await sendRequest(req, res, server1);
        }
    }
    catch (err) {
        res.send('error');
        console.log(err.message);
    }
}

module.exports = check;