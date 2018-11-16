const express = require('express');
const PORT = process.env.PORT || 5050;

const app = express();

app.get("/", (req, res) => {
    res.json({
        success: true,
    });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(PORT, () => {
    console.log("SERVER STARTED AT PORT", PORT);
});