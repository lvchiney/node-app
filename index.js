const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Node.js server is running...... WELCOME TO THE PAGE');
});

app.listen(3000, () => console.log('Server started on port 3000!'));