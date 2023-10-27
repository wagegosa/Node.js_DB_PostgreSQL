const { User, userSchema } = require('./user.model');

// en esta función pueden ir todos los modelos
function setupModels(sequelize) {
    User.init(userSchema, User.config(sequelize));
}

module.exports = setupModels;