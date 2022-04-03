import proprietarioService from "../services/proprietarioService.js";

async function createProprietario(req, res, next) {
    try {
        const proprietario = req.body
        if (!proprietario.nome || !proprietario.telefone) {
            throw new Error("Nome e telefone são obrigatórios!")
        }
        res.send(await proprietarioService.createProprietario(proprietario))
        logger.info(await `POST /proprietario - ${JSON.stringify(proprietario)}`)
    } catch (err) {
        next(err)
    }
}

async function updateProprietario(req, res, next) {
    try {
        const proprietario = req.body
        if (!proprietario.nome || !proprietario.telefone || !proprietario.proprietario_id) {
            throw new Error("Nome, telefone e proprietario_id são obrigatórios!")
        }
        res.send(await proprietarioService.updateProprietario(proprietario))
        logger.info(await `PUT /proprietario - ${JSON.stringify(proprietario)}`)
    } catch (err) {
        next(err)
    }
}

async function deleteProprietario(req, res, next) {
    try {
        await proprietarioService.deleteProprietario(req.params.id)
        res.end()
        logger.info('DELETE /proprietario :id')
    } catch (err) {
        next(err)
    }
}

async function getProprietarios(req, res, next) {
    try {
        res.send(await proprietarioService.getProprietarios())
        logger.info('GET /proprietario')
    } catch (err) {
        next(err)
    }
}

export default {
    createProprietario,
    updateProprietario,
    deleteProprietario,
    getProprietarios,
}