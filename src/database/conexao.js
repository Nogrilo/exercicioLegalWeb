const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('bibliotecaFilmes', 'root', 'mitona@', {
  host: 'localhost',
  dialect: 'mysql',
  port : 3306
})

try {
  sequelize.authenticate()
  console.log('Conexao Feita')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize
