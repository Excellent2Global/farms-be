/**
 * StaffController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  /**
   * Create a new staff
   */
  addStaff: async (req, res) => {
    sails.log.info('POST /staff');
    let staffDetails = req.body;

    var newStaffRecord = await Staff.create(
        Object.assign({
          username: staffDetails.username,
          firstName: staffDetails.firstName,
          middlename: staffDetails.middlename,
          lastName: staffDetails.lastName,
          emailAddress: staffDetails.emailAddress,
          phoneNumber: staffDetails.phoneNumber,
          gender: staffDetails.gender,
          address: staffDetails.address,
          city: staffDetails.city,
          state: staffDetails.state,
          dateOfBirth: staffDetails.dateOfBirth,
          stateOfOrigin: staffDetails.stateOfOrigin,
          pictureUrl: staffDetails.pictureUrl
        }))
      .intercept((err) => {
        return res.json({
          err
        });
      })
      .fetch();

    var newUser = await User.create(
        Object.assign({
          username: staffDetails.username,
          password: 'Password1#',
          userRole: staffDetails.staffType,
          permission: staffDetails.deparment,
          userStatus: 'active'
        }))
      .intercept((err) => {
        return res.json({
          err
        });
      })
      .fetch();

    return res.ok({
      code: 201,
      message: 'New staff added successfully'
    });
  }

};
