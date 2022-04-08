import sequelize from 'sequelize'

const sequelizeConnection = new sequelize(
    "postgres://eaxygmcu:RCoIUVBYY3SUCwLzEXEQFnKD_K7cfeCO@kesavan.db.elephantsql.com/eaxygmcu", {
        dialect: 'postgress',
        define: {
            timestamps: false
        }
    }
)

export default sequelizeConnection