import express from 'express'
import postController from '../controllers/postController.js'

const router = express.Router()
router.post('/', postController.createPost)
router.get('/', postController.getPosts)
router.post('/comentario', postController.createComment)

export default router