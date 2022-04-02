import proprietarioRepository from "../repositories/proprietarioRepository.js";

async function createProprietario(proprietario) {
    return await proprietarioRepository.insertProprietario(proprietario)
}

export default {
    createProprietario,

}