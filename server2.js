import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Route personnalisée ajoutée dans server2.js
app.get('/custom-route', (req, res) => {
    res.json({ message: 'Ceci est une nouvelle route de server2.js' });
});

app.listen(PORT, () => {
    console.log(`Server2 is running on http://localhost:${PORT}`);
});
