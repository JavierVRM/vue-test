module.exports = (sequelize, DataTypes) => {
    const Intern = sequelize.define('Intern', {
        name: DataTypes.STRING, 
        email: DataTypes.STRING
    })
    return Intern
}
