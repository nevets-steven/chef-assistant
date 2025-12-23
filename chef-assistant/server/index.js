const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({
        ok: true,
        message: "Server is running"
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`API server listening on http://localhost:${PORT}`);
});