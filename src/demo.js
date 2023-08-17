const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.write("<h1>Home Page is live</h1>");
    // res.send({
    //     id : 1,
    //     name : "yash pal",
    // });
    res.send();
});

app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
});