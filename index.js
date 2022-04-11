import express from 'express'
import cors from 'cors'
import winston from 'winston'
import proprietarioRouter from './routes/proprietarioRoute.js'
import animalRouter from './routes/animalRoute.js'
import servicoRouter from './routes/servicoRoute.js'
import postRouter from './routes/postRoute.js'

const { combine, timestamp, label, printf } = winston.format
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} ${message}`
})

global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new(winston.transports.Console)(),
        new(winston.transports.File)({ filename: 'petshop-api.log' })
    ],
    format: combine(
        label({ label: 'petshop-api' }),
        timestamp(),
        myFormat
    )
})


const app = express()
app.use(express.json())
app.use(cors())
app.use('/proprietario', proprietarioRouter)
app.use('/animal', animalRouter)
app.use('/servico', servicoRouter)
app.use('/post', postRouter)
app.use('/comentario', postRouter)
app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`)
    res.status(400).send({ error: err.message })
})

app.listen(3000, () => console.log('API started!'))