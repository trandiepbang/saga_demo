let express = require('express');
let app = express();

app.post('/', (req, res) => {
    console.log('income D');
    res.status(500).json({});
});

let server = app.listen(6000, () => {
    let host = server.address().address
    let port = server.address().port
    console.log("Server run at : http://%s:%s", host, port);
});