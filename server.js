const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname)); // Serve the static files (index.html)

// Endpoint to validate phone number
app.post('/validate', (req, res) => {
    const { phone } = req.body;

    // Regular expression for phone number format ddd-ddd-dddd
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    if (phonePattern.test(phone)) {
        res.json({ message: 'Phone number is correct.' });
    } else {
        res.json({ message: 'Phone number is incorrect. Please use the format ddd-ddd-dddd.' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
