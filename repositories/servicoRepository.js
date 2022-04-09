import Servico from "../models/servicoModel.js";
import Animal from '../models/animalModel.js'

async function insertServico(servico) {
    try {
        await Servico.create(servico)
    } catch (err) {
        throw err
    }
}

async function getServicos() {
    try {
        return await Servico.findAll()
    } catch (err) {
        throw err
    }
}

async function getServicosByProprietarioId(proprietario_id) {
    try {
        return await Servico.findAll({
            include: [{
                model: Animal,
                where: {
                    proprietario_id: proprietario_id
                }
            }]
        })
    } catch (err) {
        throw err
    }
}


export default {
    insertServico,
    getServicos,
    getServicosByProprietarioId,
}