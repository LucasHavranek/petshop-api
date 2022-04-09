import servicoService from "../services/servicoService.js";

async function createServico(req, res, next) {
    try {
        const servico = req.body
        if (!servico.servico_id || !servico.descricao || !servico.valor || !servico.animal_id) {
            throw new Error("Servico_id, descricao, valor e animal_id são obrigatórios!")
        }
        res.send(await servicoService.createServico(servico))
        logger.info(await `POST /servico - ${JSON.stringify(servico)}`)
    } catch (err) {
        next(err)
    }
}

async function getServicos(req, res, next) {
    try {
        res.send(await servicoService.getServicos(req.query.proprietario_id))
        logger.info('GET /servico')
    } catch (err) {
        next(err)
    }
}

export default {
    createServico,
    getServicos,
}