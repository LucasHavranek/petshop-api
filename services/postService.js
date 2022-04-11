import postRepository from '../repositories/postRepository.js'

async function createPost(infoPost) {
    await postRepository.createPost(infoPost)
}

async function getPosts() {
    return await postRepository.getPosts()
}

async function createComment(infoComment) {
    await postRepository.createComment(infoComment)
}

export default {
    createPost,
    getPosts,
    createComment,
}