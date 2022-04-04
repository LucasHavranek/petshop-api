import { connectDatabase } from "./database.js";

async function insertAnimal(animal) {
    const conn = await connectDatabase()
    try {
        const sql = 'INSERT INTO animais (nome, tipo, proprietario_id) VALUES ($1, $2, $3) RETURNING *'
        const values = [animal.nome, animal.tipo, animal.proprietario_id]
        const res = await conn.query(sql, values)
        return res.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function updateAnimal(animal) {
    const conn = await connectDatabase()
    try {
        const sql = 'UPDATE animais SET nome = $1, tipo = $2, proprietario_id = $3 WHERE animal_id = $4 RETURNING *'
        const values = [animal.nome, animal.tipo, animal.proprietario_id, animal.animal_id]
        const res = await conn.query(sql, values)
        return res.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function deleteAnimal(id) {
    const conn = await connectDatabase()
    try {
        await conn.query('DELETE FROM animais WHERE animal_id = $1', [id])
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getAnimals() {
    const conn = await connectDatabase()
    try {
        const sql = await conn.query('SELECT * from animais')
        return sql.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getAnimal(id) {
    const conn = await connectDatabase()
    try {
        const sql = await conn.query('SELECT * from animais WHERE animal_id = $1', [id])
        return sql.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getAnimalsByProprietarioId(proprietario_id) {
    const conn = await connectDatabase()
    try {
        const sql = await conn.query('SELECT * from animais WHERE proprietario_id = $1', [proprietario_id])
        return sql.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}


export default {
    insertAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimals,
    getAnimal,
    getAnimalsByProprietarioId,
}