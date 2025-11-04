const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('bibliotecaFilmes', 'root', 'mitona@', {
  host: 'localhost',
  dialect: 'mysql',
  port : 3306
})

try {
  sequelize.authenticate()
  console.log('Conexao realizada')
} catch (error) {
  console.error('Conexao não realizada:', error)
}

module.exports = sequelize
