/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var passport = require('passport');

function _onPassportAuth(req, res, error, user, info) {
  if (error) {
    sails.log.error(error);
    return res.serverError(error);
  }
  if (!user) {
    sails.log.error(info);
    return res.send({
      code: info.code,
      message: info.message
    });
  }

  return res.ok({
    token: CipherService.createToken(user),
    user: user
  });
}

module.exports = {
  

  /**
   * `AuthController.login()`
   */
  login: async function (req, res) {
    sails.log.info('POST /auth/login');
    passport.authenticate('local', _onPassportAuth.bind(this, req, res))(req, res);
  },

  /**
   * `AuthController.initPasswordReset()`
   */
  initPasswordReset: async function (req, res) {
    return res.json({
      todo: 'initPasswordReset() is not implemented yet!'
    });
  },

  /**
   * `AuthController.resetPassword()`
   */
  resetPassword: async function (req, res) {
    return res.json({
      todo: 'resetPassword() is not implemented yet!'
    });
  }

};

