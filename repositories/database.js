import pg from 'pg'

async function connectDatabase() {
    if (global.connection) {
        return global.connection.connect()
    }
    const pool = new pg.Pool({
        connectionString: "postgres://eaxygmcu:RCoIUVBYY3SUCwLzEXEQFnKD_K7cfeCO@kesavan.db.elephantsql.com/eaxygmcu"
    })
    global.connection = pool
    return pool.connect()
}

export {
    connectDatabase
}