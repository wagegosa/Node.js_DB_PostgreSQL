const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize')
// const getConnection = require('../libs/postgres');

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const rest = await models.User.findAll();
    return rest;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('No se encontro usuario');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rest = await user.update(changes);
    return rest;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
