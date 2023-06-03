const express = require('express');
// const load = require('./load-balancer-middleware');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(load); // use this if you are not using nginx for reverse-proxy and loadbalancing.

const PORT = 9090;


app.get('/', async (req, res) => {
    try {
        console.log('got a req on main server');
    }
    catch (err) {
        console.log(err.message);
        res.send('error');
    }
});

app.listen(PORT, () => {
    console.log('server is up on http://127.0.0.1:' + PORT);
});