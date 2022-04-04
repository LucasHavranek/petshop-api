import animalService from "../services/animalService.js";

async function createAnimal(req, res, next) {
    try {
        const animal = req.body
        if (!animal.nome || !animal.tipo || !animal.proprietario_id) {
            throw new Error("Nome, tipo e proprietario_id são obrigatórios!")
        }
        res.send(await animalService.createAnimal(animal))
        logger.info(await `POST /animal - ${JSON.stringify(animal)}`)
    } catch (err) {
        next(err)
    }
}

async function updateAnimal(req, res, next) {
    try {
        const animal = req.body
        if (!animal.nome || !animal.tipo || !animal.animal_id || !animal.proprietario_id) {
            throw new Error("Nome, tipo, animal_id, proprietario_id são obrigatórios!")
        }
        res.send(await animalService.updateAnimal(animal))
        logger.info(await `PUT /animal - ${JSON.stringify(animal)}`)
    } catch (err) {
        next(err)
    }
}

async function deleteAnimal(req, res, next) {
    try {
        await animalService.deleteAnimal(req.params.id)
        res.end()
        logger.info('DELETE /animal :id')
    } catch (err) {
        next(err)
    }
}

async function getAnimals(req, res, next) {
    try {
        res.send(await animalService.getAnimals(req.query.proprietario_id))
        logger.info('GET /animal')
    } catch (err) {
        next(err)
    }
}

async function getAnimal(req, res, next) {
    try {
        res.send(await animalService.getAnimal(req.params.id))
        logger.info('GET /animal:id')
    } catch (err) {
        next(err)
    }
}

async function getAnimalsByProprietarioId(req, res, next) {
    try {
        res.send(await animalService.getAnimalsByProprietarioId(proprietario_id))
        logger.info('GET /animal')
    } catch (err) {
        next(err)
    }
}

export default {
    createAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimals,
    getAnimal,
    getAnimalsByProprietarioId
}