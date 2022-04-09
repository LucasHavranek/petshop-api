import sequelize from 'sequelize'
import database from '../repositories/database.js'
import Animal from './animalModel.js'

const Servico = database.define('servicos', {
    servico_id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricao: {
        type: sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: sequelize.DOUBLE,
        allowNull: false
    }
})

Servico.belongsTo(Animal, { foreignKey: 'animal_id' })

export default Servico