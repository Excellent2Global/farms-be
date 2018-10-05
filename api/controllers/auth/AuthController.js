/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `AuthController.login()`
   */
  login: async function (req, res) {
    return res.json({
      todo: 'login() is not implemented yet!'
    });
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

