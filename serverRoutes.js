import express from 'express';

const router = express.Router();

// Exemple de route
router.get('/places', (req, res) => {
    res.json({ message: 'Route pour les places depuis serverRoutes.js' });
});

// Vous pouvez ajouter plusieurs routes ici
router.get('/custom', (req, res) => {
    res.json({ message: 'Route personnalisée depuis serverRoutes.js' });
});

export default router; // Exportez le routeur
