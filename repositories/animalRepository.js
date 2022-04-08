import Animal from "../models/animalModel.js";

async function insertAnimal(animal) {
    try {
        await Animal.create(animal)
    } catch (err) {
        throw err
    }
}

async function updateAnimal(animal) {
    try {
        await Animal.update(animal, {
            where: {
                animal_id: animal.animal_id
            }
        })
    } catch (err) {
        throw err
    }
}

async function deleteAnimal(id) {
    try {
        await Animal.destroy({
            where: {
                animal_id: id
            }
        })
    } catch (err) {
        throw err
    }
}

async function getAnimals() {
    try {
        return await Animal.findAll()
    } catch (err) {
        throw err
    }
}

async function getAnimal(id) {
    try {
        return await Animal.findByPk(id)
    } catch (err) {
        throw err
    }
}

async function getAnimalsByProprietarioId(proprietario_id) {
    try {
        return await Animal.findByPk(proprietario_id)
    } catch (err) {
        throw err
    }
}


export default {
    insertAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimals,
    getAnimal,
    getAnimalsByProprietarioId,
}