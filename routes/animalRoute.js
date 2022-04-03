import express from 'express'
import animalController from '../controllers/animalController.js'

const router = express.Router()
router.post('/', animalController.createAnimal)
router.put('/', animalController.updateAnimal)
router.delete('/:id', animalController.deleteAnimal)
router.get('/', animalController.getAnimals)
router.get('/:id', animalController.getAnimal)


export default router