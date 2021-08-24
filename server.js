const express = require('express'); 

const app = express(); 

app.get('/', (req, res) => {
    app.send("Hello World")
});

app.listen(3000, () => {
    console.log("I am listening on port 3000")
})