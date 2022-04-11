import { getClient } from './databaseMongoDB.js'

async function createPost(infoPost) {
    const client = getClient()
    try {
        await client.connect()
        await client.db('posts').collection('posts').insertOne(infoPost)
    } catch (err) {
        throw err
    } finally {
        await client.close
    }
}

async function getPosts() {
    const client = getClient()
    try {
        await client.connect()
        return await client.db("posts").collection("posts").find().toArray()
    } catch (err) {
        throw err
    } finally {
        await client.close
    }
}

async function createComment(infoComment) {
    const client = getClient()
    try {
        await client.connect()
        await client.db('posts').collection('posts').insertOne(infoComment)
    } catch (err) {
        throw err
    } finally {
        await client.close
    }
}

export default {
    createPost,
    getPosts,
    createComment,
}