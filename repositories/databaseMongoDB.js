import mongodb from 'mongodb'

function getClient() {
    const uri = 'mongodb+srv://root:ISdC3qpwk37XnzJj@cluster0.woeqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    return new mongodb.MongoClient(uri)
}

export { getClient }