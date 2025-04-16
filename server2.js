import express from 'express';
import serverRoutes from './server.js'; // Importez la logique existante de server.js (si elle est exportée)

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', serverRoutes); // Conservez les routes existantes
app.get('/custom-route', (req, res) => {
    res.json({ message: 'Route personnalisée de server2.js' });
});

app.listen(PORT, () => {
    console.log(`Server2 is running on http://localhost:${PORT}`);
});
