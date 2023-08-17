const path = require('path');
const express = require('express');
const app = express();

// console.log(__dirname);
const staticPath = path.join(__dirname, '../public');

// built-in middleware
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.send("welcome to homepage");
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});