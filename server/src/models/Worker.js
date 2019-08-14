module.exports = (sequelize, DataTypes) => {
    const Worker = sequelize.define('Worker', {
        name: DataTypes.STRING, 
        email: DataTypes.STRING
    })
    return Worker
}
