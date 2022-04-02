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

export default {
    createProprietario,
}