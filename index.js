const express = require('express');
const PORT = process.env.PORT || 5050;

const app = express();

app.get("/", (req, res) => {
    res.json({
        success: true,
    });
});

app.listen(PORT, () => {
    console.log("SERVER STARTED AT PORT", PORT);
});