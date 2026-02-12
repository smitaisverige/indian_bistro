import express from 'express';
import aboutData from '../data/aboutData.js';
import * as path from 'node:path';

const router = express.Router();
const __dirname = path.resolve()

// Route for About Us page
router.get('/', (req, res) => {
    res.render('pages/about', {
  title: 'About Us',
  page: 'about'
});

});

router.get('/about', (req, res) => {
    res.render('pages/about', { data: aboutData });
});

export default router;