/**
 * Staff.js
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
      required: true
    },

    firstName: {
      type: 'string',
      required: true
    },

    middlename: {
      type: 'string'
    },

    lastName: {
      type: 'string',
      required: true
    },

    emailAddress: {
      type: 'string'
    },

    phoneNumber: {
      type: 'string',
      required: true,
      maxLength: 11
    },

    gender: {
      type: 'string',
      required: true,
      isIn: ['female', 'male']
    },

    address: {
      type: 'string'
    },

    city: {
      type: 'string'
    },

    state: {
      type: 'string'
    },

    dateOfBirth: {
      type: 'string'
    },

    stateOfOrigin: {
      type: 'string'
    },

    pictureUrl: {
      type: 'string',
    }


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

  customToJSON: () => {
    return _.omit(this, ['createdAt', 'updatedAt']);
  }

};
