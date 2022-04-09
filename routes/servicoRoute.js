import express from 'express'
import servicoController from '../controllers/servicoController.js'

const router = express.Router()
router.post('/', servicoController.createServico)
router.get('/', servicoController.getServicos)

export default router