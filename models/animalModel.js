import sequelize from 'sequelize'
import database from '../repositories/database.js'
import Proprietario from './proprietarioModel.js'

const Animal = database.define('animais', {
    animal_id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: sequelize.STRING,
        allowNull: false
    },
    tipo: {
        type: sequelize.STRING,
        allowNull: false
    }
})

Animal.belongsTo(Proprietario, { foreignKey: 'proprietario_id' })

export default Animal