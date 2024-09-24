const express = require('express');
const path = require('path');

const app = express();

// Serve the entire 'public' directory as static
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/uploads/home.html'));
});

// Route for the writes page
app.get('/writes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/uploads/writes.html'));
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});