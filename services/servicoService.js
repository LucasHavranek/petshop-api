import servicoRepository from "../repositories/servicoRepository.js";

async function createServico(servico) {
    return await servicoRepository.insertServico(servico)
}

async function getServicos(proprietario_id) {
    if (proprietario_id) {
        return await servicoRepository.getServicosByProprietarioId(proprietario_id)
    } else {
        return await servicoRepository.getServicos()
    }
}

export default {
    createServico,
    getServicos,
}