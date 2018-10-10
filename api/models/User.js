/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    username: {
      type: 'string',
      unique: true,
      required: true,
    },

    password: {
      type: 'string',
      required: true,
      protect: true
    },

    userRole: {
      type: 'string',
      isIn: ['root', 'admin', 'manager', 'staff'],
      required: true
    },

    permission: {
      type: 'string',
      required: true,
      isIn: ['general', 'farms', 'properties', 'transportation', 'foundation']
    },

    passwordResetToken: {
      type: 'string'
    },

    lastSeenAt: {
      type: 'number',
      defaultsTo: Date.now()
    },

    userStatus: {
      type: 'string',
      isIn: ['active', 'inactive'],
      defaultsTo: 'active'
    }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

  beforeCreate: (values, next) => {
    CipherService.hashPassword(values);
    next();
  },

  beforeUpdate: (values, next) => {
    CipherService.hashPassword(values);
    next();
  },

  customToJSON: () => {
    return _.omit(this, ['password', 'createdAt', 'updatedAt', 'passwordResetToken']);
  }

};
