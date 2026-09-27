const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware.js');
const validateReq = require('../middlewares/validateReq.middleware.js');
const { motoValidator } = require('../validators/moto.validator.js');
const {
  createMoto,
  getMotos,
  getMotoById,
  updateMoto,
  deleteMoto,
} = require('../controllers/moto.controller.js');

const router = express.Router();

router.post('/', authMiddleware, motoValidator, validateReq, createMoto);
router.get('/', authMiddleware, getMotos);
router.get('/:id', authMiddleware, getMotoById);
router.put('/:id', authMiddleware, motoValidator, validateReq, updateMoto);
router.delete('/:id', authMiddleware, deleteMoto);

module.exports = router;
