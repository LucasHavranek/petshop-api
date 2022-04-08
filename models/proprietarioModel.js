import sequelize from 'sequelize'
import database from '../repositories/database.js'

const Proprietario = database.define('proprietarios', {
    proprietario_id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: sequelize.STRING,
        allowNull: false
    }
})

export default Proprietario