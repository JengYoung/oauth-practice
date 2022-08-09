import express, { response } from 'express';
const router = express.Router();

import authRoutes from './auth/index.js';

router.get('/', (req, res) => {
    res.send('HELLO, AUTH PRACTICE!')
})

router.use('/auth', authRoutes);



export default router;