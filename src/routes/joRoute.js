import express from 'express';
import { buatJO, riwayatJO, daftarJO } from '../controllers/joController.js';

const router = express.Router();

router.post('/buat-jo', buatJO);
router.post('/riwayat-jo', riwayatJO);
router.get('/daftar-jo', daftarJO);

export default router;