import sequelize from 'sequelize'

const sequelizeConnection = new sequelize(
    "postgres://ptimcwmn:TE7ToLUGX-Q_3GPYABs_Hy1f9pRvAiK6@kesavan.db.elephantsql.com/ptimcwmn", {
        dialect: 'postgress',
        define: {
            timestamps: false
        }
    }
)

export default sequelizeConnection