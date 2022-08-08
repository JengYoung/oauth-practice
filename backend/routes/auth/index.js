import express from 'express';
import checkValidToken from './checkValidToken.js';
import cors from 'cors';

const router = express.Router();
const corsOptions = {
    origin: 'http://localhost:3000',
    Headers: ['Authorization']
}
router.get('/', (req, res) => {
    res.send('AUTH ROUTES!')
})
router.get('/naver/check-valid-token', cors(corsOptions), checkValidToken);

export default router;