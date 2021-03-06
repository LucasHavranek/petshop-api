import animalRepository from "../repositories/animalRepository.js";

async function createAnimal(animal) {
    return await animalRepository.insertAnimal(animal)
}

async function updateAnimal(animal) {
    return await animalRepository.updateAnimal(animal)
}

async function deleteAnimal(id) {
    return await animalRepository.deleteAnimal(id)
}

async function getAnimals(proprietario_id) {
    if (proprietario_id) {
        return await animalRepository.getAnimalsByProprietarioId(proprietario_id)
    } else {
        return await animalRepository.getAnimals()
    }

}

async function getAnimal(id) {
    return await animalRepository.getAnimal(id)
}

export default {
    createAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimals,
    getAnimal,
}