import express from 'express'
import proprietarioController from '../controllers/proprietarioController.js'

const router = express.Router()
router.post('/', proprietarioController.createProprietario)

export default router