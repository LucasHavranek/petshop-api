import { connectDatabase } from "./database.js";

async function insertProprietario(proprietario) {
    const conn = await connectDatabase()
    try {
        const sql = 'INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2) RETURNING *'
        const values = [proprietario.nome, proprietario.telefone]
        const res = await conn.query(sql, values)
        return res.rows[0]
    } catch (err) {
        throw new err
    } finally {
        conn.release()
    }
}

export default {
    insertProprietario,
}