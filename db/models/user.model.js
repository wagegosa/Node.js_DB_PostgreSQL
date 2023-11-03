const { Model, DataTypes, Sequelize} = require('sequelize')

const USER_TABLE = 'users';

const userSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    email:{
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    password:{
        allowNull: false,
        type: DataTypes.STRING
    },
    role:{
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'customer'
    },
    createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
        fiel: 'create_at',
        defaultValue: Sequelize.NOW
    }
}

class User extends Model{
    static associate(){
        // associate
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = { USER_TABLE, userSchema, User };