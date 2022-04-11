import postService from "../services/postService.js";

async function createPost(req, res, next) {
    try {
        const infoPost = req.body
        if (!infoPost.titulo || !infoPost.conteudo || !infoPost.comentarios) {
            throw new Error('Titulo, conteudo e lista de comentarios são obrigatórios')
        } else {
            res.send(await postService.createPost(infoPost))
            logger.info(await `POST /post - ${JSON.stringify(infoPost)}`)
        }
    } catch (err) {
        throw err
    }
}

async function getPosts(req, res, next) {
    try {
        res.send(await postService.getPosts())
        logger.info('GET /post')
    } catch (err) {
        next(err)
    }
}

async function createComment(req, res, next) {
    try {
        const infoComment = req.body
        if (!infoComment._id || !infoComment.comentarios) {
            throw new Error('O id do post e a lista de comentarios são obrigatórios')
        } else {
            res.send(await postService.createComment(infoComment))
            logger.info(await `POST /comentario - ${JSON.stringify(infoComment)}`)
        }
    } catch (err) {
        throw err
    }
}

export default {
    createPost,
    getPosts,
    createComment
}