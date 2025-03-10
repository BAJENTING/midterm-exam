const express = require('express');
const app = express();
const port = 3000;

app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! John Michael Vincent Bajenting' });
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}/test`);
});