import { connectDatabase } from "./database.js";

async function insertProprietario(proprietario) {
    const conn = await connectDatabase()
    try {
        const sql = 'INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2) RETURNING *'
        const values = [proprietario.nome, proprietario.telefone]
        const res = await conn.query(sql, values)
        return res.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function updateProprietario(proprietario) {
    const conn = await connectDatabase()
    try {
        const sql = 'UPDATE proprietarios SET nome = $1, telefone = $2 WHERE proprietario_id = $3 RETURNING *'
        const values = [proprietario.nome, proprietario.telefone, proprietario.proprietario_id]
        const res = await conn.query(sql, values)
        return res.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function deleteProprietario(id) {
    const conn = await connectDatabase()
    try {
        await conn.query('DELETE FROM proprietarios WHERE proprietario_id = $1', [id])
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getProprietarios() {
    const conn = await connectDatabase()
    try {
        const sql = await conn.query('SELECT * from proprietarios')
        return sql.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getProprietario(id) {
    const conn = await connectDatabase()
    try {
        const sql = await conn.query('SELECT * from proprietarios WHERE proprietario_id = $1', [id])
        return sql.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

export default {
    insertProprietario,
    updateProprietario,
    deleteProprietario,
    getProprietarios,
    getProprietario,
}