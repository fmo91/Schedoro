const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5050;

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get("/api/v1", (req, res) => {
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