const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    "todo_app_db",
    "postgres",
    "MniXLewbH1263$",
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)

module.exports = sequelize;