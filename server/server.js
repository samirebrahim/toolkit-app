const express = require('express');
const fs = require('fs');
let app = express();


app.get("/api/categories", (req, res) => {
    res.end(fs.readFileSync('./data.json').toString());
})

app.listen(3000, () => console.log("Server is Runing on port 3000"));